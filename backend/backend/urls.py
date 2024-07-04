from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg import openapi
from drf_yasg.views import get_schema_view

# Swagger 정보 설정
schema_view = get_schema_view(
    openapi.Info(
        title="Web Community API",
        default_version='v1',
        description="API documentation for the Web Community project.",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@webcommunity.local"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('board.urls')),  # 게시판 관련 API URL
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='swagger-ui'),  # Swagger UI URL
]
