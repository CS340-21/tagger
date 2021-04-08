# Generated by Django 3.1.7 on 2021-04-08 20:59

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('tagger', '0008_auto_20210401_1826'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2021, 4, 8, 20, 59, 5, 279866, tzinfo=utc), verbose_name='date'),
        ),
        migrations.AlterField(
            model_name='game',
            name='start_time',
            field=models.DateTimeField(default=datetime.datetime(2021, 4, 8, 20, 59, 5, 279866, tzinfo=utc), verbose_name='time started'),
        ),
    ]
