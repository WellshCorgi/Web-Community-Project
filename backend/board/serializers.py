# 데이터 모델을 JSON 형태로 변환하거나 JSON 데이터를 모델 인스턴스로 변환하는 역할

from rest_framework import serializers
from .models import Post, Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'content', 'post', 'created_at', 'updated_at']

class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'created_at', 'updated_at', 'comments']
        extra_kwargs = {
            'title': {'required': True},
            'content': {'required': True},
        }

class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['title', 'content']

class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['content', 'post']
        extra_kwargs = {
            'content': {'required': True},
            'post': {'required': True},
        }
