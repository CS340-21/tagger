from django.contrib import admin

# Register your models here.
from .models import Roster

class RosterAdmin(admin.ModelAdmin):
    list_display = ('roster_name', 'id', 'num_players',)

# Register your models here.

admin.site.register(Roster, RosterAdmin)
