from django.db import models
from django.urls import reverse
from django.utils import timezone

# our Roster model
class Roster(models.Model):
    roster_name = models.CharField(max_length=50)
    num_players = models.IntegerField(default=0)

    def get_absolute_url(self):
        return reverse('tagger:roster_details', kwargs={'pk': self.pk})

# our player model, which is associated with a Roster by ForeignKey
class Player(models.Model):
    roster = models.ForeignKey(Roster, on_delete=models.CASCADE, null=True)
    player_name = models.CharField(max_length=50)
    player_height = models.IntegerField(default=0)

    def get_absolute_url(self):
        return reverse('tagger:player_details', kwargs={'pk': self.pk})

# our Game model, which is going to have two rosters
class Game(models.Model):
    game_title = models.CharField(max_length=200)
    start_time = models.DateTimeField('time started')

    def get_absolute_url(self):
        return reverse('tagger:game_details', kwargs={'pk': self.pk})

# our Play model, which has whatever the play was
class Play(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE, null=True)
    play_type = models.CharField(max_length=200)
    time_stamp = models.DateTimeField('time made')

    def get_absolute_url(self):
        return reverse('tagger:play_details', kwargs={'pk': self.pk})
