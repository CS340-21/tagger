from rest_framework import serializers
from .models import Roster

class RosterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roster
        fields = ('roster_name', 'num_players')
