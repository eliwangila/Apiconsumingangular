from django.urls import path, include
from rest_framework.routers import DefaultRouter

from blog.viewsets.blog_viewset import BlogViewSet
from blog.viewsets.like_viewset import LikeViewSet
from blog.viewsets.user_viewset import UserViewSet
from rest_framework_jwt.views import ObtainJSONWebToken, RefreshJSONWebToken, VerifyJSONWebToken


router = DefaultRouter()
router.register('blog', BlogViewSet, basename='blog')
router.register('like', LikeViewSet, basename='like')
router.register('auth/user', UserViewSet, basename='user')

urlpatterns = [
    path('', include(router.urls)),

    # AUTH JWT
    path('auth/login', ObtainJSONWebToken.as_view(), name='token_obtain_pair'),
    path('auth/refresh/', RefreshJSONWebToken.as_view(), name='token_refresh'),
    path('auth/verify', VerifyJSONWebToken.as_view(), name='token_verify'),
]
