# Generated by Django 4.0 on 2021-04-22 01:05

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('tagger', '0021_auto_20210422_0100'),
    ]

    operations = [
        migrations.AddField(
            model_name='pitch',
            name='game',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='tagger.game'),
        ),
        migrations.AlterField(
            model_name='game',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2021, 4, 22, 1, 5, 41, 279, tzinfo=utc), verbose_name='date'),
        ),
        migrations.AlterField(
            model_name='game',
            name='start_time',
            field=models.DateTimeField(default=datetime.datetime(2021, 4, 22, 1, 5, 41, 246, tzinfo=utc), verbose_name='time started'),
        ),
    ]
