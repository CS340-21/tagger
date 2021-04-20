from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic
from django.utils import timezone
from django import forms
from django.views.generic.edit import CreateView
from django.views.generic.detail import DetailView
from django.views import generic
from tagger.models import *
from rest_framework import viewsets
from .serializers import *

# test React view

class RosterView(viewsets.ModelViewSet):
    serializer_class = RosterSerializer
    queryset = Roster.objects.all()

class PlayerView(viewsets.ModelViewSet):
    serializer_class = PlayerSerializer
    queryset = Player.objects.all()

class GameView(viewsets.ModelViewSet):
    serializer_class = GameSerializer
    queryset = Game.objects.all()

class InningView(viewsets.ModelViewSet):
    serializer_class = InningSerializer
    queryset = Inning.objects.all()

class AtBatView(viewsets.ModelViewSet):
    serializer_class = AtBatSerializer
    queryset = AtBat.objects.all()

class PitchView(viewsets.ModelViewSet):
    serializer_class = PitchSerializer
    queryset = Pitch.objects.all()

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
    form_player_number = forms.IntegerField(label='Number')

def add_player(request, roster_id):
    roster = get_object_or_404(Roster, pk=roster_id)
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = player_form(request.POST)
        # check whether it's valid:
        if form.is_valid():
            new_player = Player(player_name=form.cleaned_data['form_player_name'], player_number=form.cleaned_data['form_player_number'])
            new_player.save()
            print("worked\n")
            roster.player_set.add(new_player)
            new_player.roster_set.add(roster)
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            return HttpResponseRedirect(reverse('tagger:roster_details', args=(roster_id,)))

    # if a GET (or any other method) we'll create a blank form
    else:
        form = player_form()

    return render(request, 'player_form.html', {'form': form})


# form for starting a new game
class game_form(forms.Form):
    form_game_title = forms.CharField(label='Game Title', max_length=200)

# starts a new game
def create_game(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = game_form(request.POST)
        # check whether it's valid:
        if form.is_valid():
            new_game = Game(game_title=form.cleaned_data['form_game_title'])
            new_game.start_time = timezone.now()
            new_game.save()
            print("worked\n")
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            return HttpResponseRedirect(reverse('tagger:game_details', args=(new_game.id,)))

    # if a GET (or any other method) we'll create a blank form
    else:
        form = game_form()

    return render(request, 'game_form.html', {'form': form})

class game_details(DetailView):
    model = Game
    template_name = 'tagger/game_details.html'

# list the rosters
class game_index(generic.ListView):
    template_name = 'tagger/game_index.html'
    context_object_name = 'all_games_list'

    def get_queryset(self):
        """all games."""
        return Game.objects.all()
"""
class play_form(forms.Form):
    form_play_type = forms.CharField(label='Play Type', max_length=50)

def add_play(request, game_id):
    game = get_object_or_404(Game, pk=game_id)
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = play_form(request.POST)
        # check whether it's valid:
        if form.is_valid():
            new_play = Play(play_type=form.cleaned_data['form_play_type'], time_stamp=timezone.now())
            new_play.save()
            print("worked\n")
            game.play_set.add(new_play)
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            return HttpResponseRedirect(reverse('tagger:game_details', args=(game_id,)))

    # if a GET (or any other method) we'll create a blank form
    else:
        form = play_form()

    return render(request, 'play_form.html', {'form': form})
"""
