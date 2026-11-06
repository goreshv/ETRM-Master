from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from trades.models import AppUser, CommunityConcept, Trade

class ETRMBackendTests(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_app_user_registration_and_count(self):
        # Register first user
        response = self.client.post('/api/users/', {
            'name': 'Alex Trader',
            'role': 'Physical Trader',
            'device_id': 'device-test-001'
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['name'], 'Alex Trader')

        # Check user count endpoint
        count_resp = self.client.get('/api/users/count/')
        self.assertEqual(count_resp.status_code, status.HTTP_200_OK)
        self.assertEqual(count_resp.data['count'], 1)
        self.assertEqual(count_resp.data['total_users'], 1)

        # Idempotent re-registration by device_id
        response2 = self.client.post('/api/users/', {
            'name': 'Alex Senior Trader',
            'role': 'Head of Trading',
            'device_id': 'device-test-001'
        }, format='json')
        self.assertEqual(response2.status_code, status.HTTP_200_OK)
        self.assertEqual(response2.data['name'], 'Alex Senior Trader')

    def test_community_concept_creation_and_retrieval(self):
        # Create a concept
        response = self.client.post('/api/concepts/', {
            'author_name': 'Sarah Energy Analyst',
            'category': 'LNG',
            'title': 'What is JKM Netback pricing?',
            'answer': 'JKM netback is calculated by taking the destination market price and subtracting liquefaction, shipping, and regasification costs.',
            'key_takeaways': 'Netback determines arbitrage opportunities\nIncludes boil-off gas and canal transit tolls',
            'example': 'Shipping US Gulf Coast LNG to Northeast Asia when JKM - US FOB spread exceeds freight cost.'
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['author_name'], 'Sarah Energy Analyst')
        self.assertEqual(response.data['category'], 'LNG')

        # List concepts
        list_resp = self.client.get('/api/concepts/')
        self.assertEqual(list_resp.status_code, status.HTTP_200_OK)
        self.assertEqual(len(list_resp.data), 1)
        concept_id = list_resp.data[0]['id']
        self.assertEqual(list_resp.data[0]['title'], 'What is JKM Netback pricing?')

        # Verify unauthorized user CANNOT delete concept (403 Forbidden)
        delete_resp = self.client.delete(f'/api/concepts/{concept_id}/')
        self.assertEqual(delete_resp.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(CommunityConcept.objects.filter(id=concept_id).count(), 1)

    def test_trade_creation_and_retrieval(self):
        response = self.client.post('/api/trades/', {
            'company': 'TotalEnergies Trading',
            'counterparty': 'BP Trading',
            'product': 'OIL',
            'start_date': '2026-04-01',
            'end_date': '2026-04-30',
            'price': 78.50,
            'quantity': 50000,
            'unit': 'BBL',
            'status': 'CAPTURED'
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['company'], 'TotalEnergies Trading')

