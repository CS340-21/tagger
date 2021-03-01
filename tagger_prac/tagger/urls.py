from django.urls import path

from . import views

app_name = 'tagger'
urlpatterns = [
    #create a player
    path('home/', views.home, name='home'),
    path('index/', views.IndexView.as_view(), name='index'),
    path('create_player/', views.create_player.as_view(), name='create_player'),
    path('<int:pk>/', views.player_details.as_view(), name='player_details'),
]
