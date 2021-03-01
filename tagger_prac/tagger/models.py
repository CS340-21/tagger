from django.db import models
from django.urls import reverse

# Create your models here.
class Player(models.Model):
    player_name = models.CharField(max_length=50)
    player_height = models.IntegerField(default=0)

    def get_absolute_url(self):
        return reverse('tagger:player_details', kwargs={'pk': self.pk})
