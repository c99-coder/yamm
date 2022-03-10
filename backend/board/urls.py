from django.urls import path, include

from .views import board_views


urlpatterns =[
    path('', board_views.PostList.as_view()),
    path('write', board_views.PostWrite.as_view()),
    path('detail/<int:pk>', board_views.PostDetail.as_view()),
    path('reaction/<int:pk>', board_views.PostReactionCreate.as_view()),
]