from rest_framework import serializers
from .models import Roster
from .models import Player

class RosterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roster
        fields = ('id', 'roster_name', 'num_players', 'player_set')

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('id', 'player_name', 'player_height', 'roster')
