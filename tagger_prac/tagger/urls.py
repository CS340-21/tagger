from django.urls import path

from . import views

app_name = 'tagger'
urlpatterns = [
    #create a player
    path('home/', views.home, name='home'),
    path('player_index/', views.player_index.as_view(), name='player_index'),
    path('roster_index/', views.roster_index.as_view(), name='roster_index'),
    path('create_roster/', views.create_roster.as_view(), name='create_roster'),
    path('create_player/', views.create_player.as_view(), name='create_player'),
    path('player_details/<int:pk>/', views.player_details.as_view(), name='player_details'),
    path('roster_details/<int:pk>/', views.roster_details.as_view(), name='roster_details'),
]
