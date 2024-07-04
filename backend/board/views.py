# API의 로직을 구현하는 곳
# 기능 위한 API 엔드포인트를 설정한다.

from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Post, Comment
from .serializers import PostSerializer, PostCreateSerializer, CommentSerializer, CommentCreateSerializer


class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer

    def get_serializer_class(self):
        if self.action in ['create']:
            return PostCreateSerializer
        return PostSerializer

    def destroy(self, request, *args, **kwargs):
        post = self.get_object()
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CommentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows comments to be viewed or edited.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_serializer_class(self):
        if self.action == 'create':
            return CommentCreateSerializer
        return CommentSerializer

    def destroy(self, request, *args, **kwargs):
        comment = self.get_object()
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
