from rest_framework import serializers
from .models import Trade, AppUser, CommunityConcept

class TradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trade
        fields = '__all__'

class AppUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppUser
        fields = '__all__'

class CommunityConceptSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunityConcept
        fields = '__all__'
