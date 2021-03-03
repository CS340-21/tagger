from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic
from django import forms
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
"""
class create_player(CreateView):
    template_name = 'tagger/player_form.html'
    model = Player
    fields = ['player_name', 'player_height']
    #return HttpResponseRedirect(reverse('tagger:player_details', args=))
"""

class player_form(forms.Form):
    form_player_name = forms.CharField(label='Player Name', max_length=50)
    form_player_height = forms.IntegerField(label='Height')

def add_player(request, roster_id):
    roster = get_object_or_404(Roster, pk=roster_id)
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = player_form(request.POST)
        # check whether it's valid:
        if form.is_valid():
            new_player = Player(player_name=form.cleaned_data['form_player_name'], player_height=form.cleaned_data['form_player_height'])
            new_player.save()
            print("worked\n")
            roster.player_set.add(new_player)
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            return HttpResponseRedirect(reverse('tagger:roster_details', args=(roster_id,)))

    # if a GET (or any other method) we'll create a blank form
    else:
        form = player_form()

    return render(request, 'player_form.html', {'form': form})
