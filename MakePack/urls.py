from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, SupplierViewSet, ProductViewSet, InventoryViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'suppliers', SupplierViewSet)
router.register(r'products', ProductViewSet)
router.register(r'inventories', InventoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]