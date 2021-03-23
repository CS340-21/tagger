from django.urls import path, include
from rest_framework import routers
from tagger import views

router = routers.DefaultRouter()
router.register(r'rosters', views.RosterView, 'roster')
router.register(r'player', views.PlayerView, 'player')

from . import views

app_name = 'tagger'
urlpatterns = [
    #create a player
    path('home/', views.home, name='home'),
    path('player_index/', views.player_index.as_view(), name='player_index'),
    path('roster_index/', views.roster_index.as_view(), name='roster_index'),
    path('create_roster/', views.create_roster.as_view(), name='create_roster'),
    #path('create_player/', views.create_player.as_view(), name='create_player'),
    path('roster/add_player/<int:roster_id>/', views.add_player, name='add_player'),
    path('player_details/<int:pk>/', views.player_details.as_view(), name='player_details'),
    path('roster_details/<int:pk>/', views.roster_details.as_view(), name='roster_details'),
    path('create_game/', views.create_game, name='create_game'),
    path('game_index/', views.game_index.as_view(), name='game_index'),
    path('game_details/<int:pk>/', views.game_details.as_view(), name='game_details'),
    path('game_details/add_play/<int:game_id>/', views.add_play, name='add_play'),
    path('play_details/<int:pk>/', views.play_details.as_view(), name='play_details'),
    path('api/', include(router.urls)),
]
