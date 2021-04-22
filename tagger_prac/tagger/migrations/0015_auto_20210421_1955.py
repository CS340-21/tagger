# Generated by Django 4.0 on 2021-04-21 19:55

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('tagger', '0014_merge_0013_auto_20210420_1611_0013_auto_20210420_1620'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2021, 4, 21, 19, 55, 49, 284834, tzinfo=utc), verbose_name='date'),
        ),
        migrations.AlterField(
            model_name='game',
            name='start_time',
            field=models.DateTimeField(default=datetime.datetime(2021, 4, 21, 19, 55, 49, 284805, tzinfo=utc), verbose_name='time started'),
        ),
        migrations.AlterField(
            model_name='pitch',
            name='atBat',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='tagger.game'),
        ),
        migrations.AlterField(
            model_name='player',
            name='roster',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='player_set', to='tagger.roster'),
        ),
        migrations.AlterField(
            model_name='roster',
            name='player',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='roster_set', to='tagger.player'),
        ),
    ]
