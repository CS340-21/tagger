from django.db import models
from django.urls import reverse

# our Roster model
class Roster(models.Model):
    roster_name = models.CharField(max_length=50)
    num_players = models.IntegerField(default=0)

    def get_absolute_url(self):
        return reverse('tagger:roster_details', kwargs={'pk': self.pk})

# our player model, which is associated with a Roster by ForeignKey
class Player(models.Model):
    #roster = models.ForeignKey(Roster, on_delete=models.CASCADE)
    player_name = models.CharField(max_length=50)
    player_height = models.IntegerField(default=0)

    def get_absolute_url(self):
        return reverse('tagger:player_details', kwargs={'pk': self.pk})
