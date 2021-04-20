# Generated by Django 4.0 on 2021-04-20 16:20

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('tagger', '0012_auto_20210419_2109'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2021, 4, 20, 16, 20, 49, 943697, tzinfo=utc), verbose_name='date'),
        ),
        migrations.AlterField(
            model_name='game',
            name='start_time',
            field=models.DateTimeField(default=datetime.datetime(2021, 4, 20, 16, 20, 49, 943668, tzinfo=utc), verbose_name='time started'),
        ),
        migrations.AlterField(
            model_name='player',
            name='roster',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='roster', to='tagger.roster'),
        ),
    ]
