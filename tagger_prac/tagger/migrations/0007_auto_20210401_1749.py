# Generated by Django 4.0 on 2021-04-01 17:49

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('tagger', '0006_game_play'),
    ]

    operations = [
        migrations.CreateModel(
            name='AtBat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_stamp', models.DateTimeField(verbose_name='time made')),
                ('result', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Inning',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('half', models.IntegerField()),
                ('outs', models.IntegerField()),
                ('runs', models.IntegerField()),
                ('errors', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Pitch',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pitch_type', models.CharField(max_length=200)),
                ('pitch_call', models.CharField(max_length=200)),
                ('pitch_number', models.IntegerField()),
                ('atBat', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='tagger.atbat')),
            ],
        ),
        migrations.RemoveField(
            model_name='player',
            name='player_height',
        ),
        migrations.AddField(
            model_name='game',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2021, 4, 1, 17, 48, 45, 869523, tzinfo=utc), verbose_name='date'),
        ),
        migrations.AddField(
            model_name='player',
            name='player_batting_handedness',
            field=models.CharField(default='0', max_length=1),
        ),
        migrations.AddField(
            model_name='player',
            name='player_number',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='player',
            name='player_throwing_handedness',
            field=models.CharField(default='0', max_length=1),
        ),
        migrations.AlterField(
            model_name='game',
            name='start_time',
            field=models.DateTimeField(default=datetime.datetime(2021, 4, 1, 17, 48, 45, 869492, tzinfo=utc), verbose_name='time started'),
        ),
        migrations.DeleteModel(
            name='Play',
        ),
        migrations.AddField(
            model_name='pitch',
            name='batter',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='batter', to='tagger.player'),
        ),
        migrations.AddField(
            model_name='pitch',
            name='pitcher',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='pitcher', to='tagger.player'),
        ),
        migrations.AddField(
            model_name='inning',
            name='game',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='tagger.game'),
        ),
        migrations.AddField(
            model_name='atbat',
            name='game',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='tagger.game'),
        ),
        migrations.AddField(
            model_name='atbat',
            name='inning',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='tagger.inning'),
        ),
    ]
