# Generated by Django 4.2.1 on 2023-08-28 04:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
        ('analytics', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='applicant',
            field=models.ManyToManyField(blank=True, to='users.profile'),
        ),
        migrations.AddField(
            model_name='job',
            name='employer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.employer'),
        ),
        migrations.AddField(
            model_name='job',
            name='form',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='analytics.workform'),
        ),
        migrations.AddField(
            model_name='job',
            name='markets',
            field=models.ManyToManyField(blank=True, to='analytics.market'),
        ),
        migrations.AddField(
            model_name='job',
            name='skills',
            field=models.ManyToManyField(blank=True, to='analytics.skill'),
        ),
        migrations.AddField(
            model_name='job',
            name='type',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='analytics.worktype'),
        ),
    ]
