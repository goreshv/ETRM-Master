from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TradeViewSet, AppUserViewSet, CommunityConceptViewSet

router = DefaultRouter()
router.register(r'trades', TradeViewSet, basename='trade')
router.register(r'users', AppUserViewSet, basename='trade-user')
router.register(r'concepts', CommunityConceptViewSet, basename='trade-concept')

urlpatterns = [
    path('', include(router.urls)),
]
