from django.shortcuts import render
from django.views.generic.edit import CreateView
from django.views.generic.detail import DetailView
from django.views import generic
from tagger.models import Player

# home page
def home(request):
    return render(request, 'tagger/home.html')

# list the players
class IndexView(generic.ListView):
    template_name = 'tagger/index.html'
    context_object_name = 'all_players_list'

    def get_queryset(self):
        """all players."""
        return Player.objects.all()

# this lets you see the details of the player
class player_details(DetailView):
    model = Player
    template_name = 'tagger/player_details.html'

# this makes a new player to save
class create_player(CreateView):
    template_name = 'tagger/player_form.html'
    model = Player
    fields = ['player_name', 'player_height']
    #return HttpResponseRedirect(reverse('tagger:player_details', args=))
