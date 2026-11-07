from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Trade, AppUser, CommunityConcept, VideoTutorial
from .serializers import TradeSerializer, AppUserSerializer, CommunityConceptSerializer, VideoTutorialSerializer

class TradeViewSet(viewsets.ModelViewSet):
    queryset = Trade.objects.all().order_by('-created_at')
    serializer_class = TradeSerializer

class AppUserViewSet(viewsets.ModelViewSet):
    queryset = AppUser.objects.all().order_by('-created_at')
    serializer_class = AppUserSerializer

    def create(self, request, *args, **kwargs):
        device_id = request.data.get('device_id')
        name = request.data.get('name', '').strip()
        role = request.data.get('role', 'Learner').strip()

        # Idempotent match: find existing by device_id or case-insensitive name
        user = None
        if device_id:
            user = AppUser.objects.filter(device_id=device_id).first()
        if not user and name:
            user = AppUser.objects.filter(name__iexact=name).first()

        if user:
            if name:
                user.name = name
            if role:
                user.role = role
            if device_id and not user.device_id:
                user.device_id = device_id
            user.save()
            serializer = self.get_serializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return super().create(request, *args, **kwargs)

    @action(detail=False, methods=['get'])
    def count(self, request):
        count = AppUser.objects.count()
        return Response({'total_users': count, 'count': count})

class CommunityConceptViewSet(viewsets.ModelViewSet):
    queryset = CommunityConcept.objects.filter(is_approved=True).order_by('-created_at')
    serializer_class = CommunityConceptSerializer

    def get_permissions(self):
        # Public users can list, read, and submit concepts
        if self.action in ['list', 'retrieve', 'create']:
            return [permissions.AllowAny()]
        # Only admin/backend staff can delete or modify submitted concepts
        return [permissions.IsAdminUser()]

class VideoTutorialViewSet(viewsets.ModelViewSet):
    queryset = VideoTutorial.objects.all().order_by('order', '-created_at')
    serializer_class = VideoTutorialSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]
