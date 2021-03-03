from django.shortcuts import render
from django.views.generic.edit import CreateView
from django.views.generic.detail import DetailView
from django.views import generic
from tagger.models import Player
from tagger.models import Roster

# home page
def home(request):
    return render(request, 'tagger/home.html')

# list the rosters
class roster_index(generic.ListView):
    template_name = 'tagger/roster_index.html'
    context_object_name = 'all_rosters_list'

    def get_queryset(self):
        """all rosters."""
        return Roster.objects.all()

# this lets you see the details of the roster
class roster_details(DetailView):
    model = Roster
    template_name = 'tagger/roster_details.html'

# this makes a new roster to save
class create_roster(CreateView):
    template_name = 'tagger/roster_form.html'
    model = Roster
    fields = ['roster_name', 'num_players']
    #return HttpResponseRedirect(reverse('tagger:player_details', args=))

# list the players
class player_index(generic.ListView):
    template_name = 'tagger/player_index.html'
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
