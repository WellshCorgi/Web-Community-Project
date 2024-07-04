#  URL과 뷰를 매핑하는 역할을 합니다. 여기에 Post와 Comment의 URL 경로를 정의
# Node.js 의 경우 MVC 패턴 에서 Routes와 유사

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, CommentViewSet

router = DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
