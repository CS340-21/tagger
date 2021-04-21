from rest_framework import serializers
from .models import Roster
from .models import Player
from .models import Game
from .models import AtBat
from .models import Inning
from .models import Pitch

class RosterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roster
        fields = ('id', 'roster_name', 'num_players', 'player_set')

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('id', 'player_name', 'player_number', 'roster_set', 'player_throwing_handedness', 'player_batting_handedness')

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'game_title', 'team1', 'team2', 'start_time', 'date')

class AtBatSerializer(serializers.ModelSerializer):
    class Meta:
        model = AtBat
        fields = ('game', 'time_stamp', 'result', 'inning')

class InningSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inning
        fields = ('half', 'outs', 'runs', 'errors', 'game')

class PitchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pitch
        fields = ('pitch_type', 'pitch_call', 'pitcher', 'batter', 'pitch_number', 'atBat')
