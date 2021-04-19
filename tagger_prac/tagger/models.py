from django.db import models
from django.urls import reverse
from django.utils import timezone

# our Roster model
class Roster(models.Model):
    roster_name = models.CharField(max_length=50)
    num_players = models.IntegerField(default=0)

    def get_absolute_url(self):
        return reverse('tagger:roster_details', kwargs={'pk': self.pk})

# our Player model, which is associated with a Roster by ForeignKey
class Player(models.Model):
    roster = models.ForeignKey(Roster, on_delete=models.CASCADE, null=True)
    player_name = models.CharField(max_length=50)
    player_number = models.IntegerField(default=0)
    player_throwing_handedness = models.CharField(max_length=1, default='0')
    player_batting_handedness = models.CharField(max_length=1, default='0')

    def get_absolute_url(self):
        return reverse('tagger:player_details', kwargs={'pk': self.pk})

# our Game model, which is going to have two rosters
class Game(models.Model):
    game_title = models.CharField(max_length=200)
    team1 = models.ForeignKey(Roster, on_delete=models.CASCADE, null=True, related_name='team1')
    team2 = models.ForeignKey(Roster, on_delete=models.CASCADE, null=True, related_name='team2')
    start_time = models.DateTimeField('time started', default=timezone.now())
    date = models.DateTimeField('date', default=timezone.now())

    def get_absolute_url(self):
        return reverse('tagger:game_details', kwargs={'pk': self.pk})

# our Inning model, which allows us to summarize games by inning
class Inning(models.Model):
    half = models.IntegerField() #this is a boolean for top (0) or bottom (1) of the inning
    outs = models.IntegerField()
    runs = models.IntegerField()
    errors = models.IntegerField()
    game = models.ForeignKey(Game, on_delete=models.CASCADE, null=True)

# our atBat model, which relates pitches
class AtBat(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE, null=True)
    time_stamp = models.DateTimeField('time made')
    result = models.CharField(max_length=200)
    inning = models.ForeignKey(Inning, on_delete=models.CASCADE, null=True)

    def get_absolute_url(self):
        return reverse('tagger:atbat_details', kwargs={'pk': self.pk})

# our pitch model
class Pitch(models.Model):
    pitch_type = models.CharField(max_length=200)
    pitch_call = models.CharField(max_length=200)
    pitcher = models.ForeignKey(Player, on_delete=models.CASCADE, null=True, related_name='pitcher')
    batter = models.ForeignKey(Player, on_delete=models.CASCADE, null=True, related_name='batter')
    pitch_number = models.IntegerField()
    atBat = models.ForeignKey(AtBat, on_delete=models.CASCADE, null=True)

    def get_absolute_url(self):
        return reverse('tagger:pitch_details', kwargs={'pk': self.pk})
