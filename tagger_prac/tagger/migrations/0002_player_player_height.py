# Generated by Django 3.1.6 on 2021-03-01 19:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tagger', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='player_height',
            field=models.IntegerField(default=0),
        ),
    ]
