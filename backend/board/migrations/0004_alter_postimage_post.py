# Generated by Django 4.0.2 on 2022-03-04 09:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('board', '0003_remove_post_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postimage',
            name='post',
            field=models.ForeignKey(db_column='post_id', on_delete=django.db.models.deletion.CASCADE, to='board.post'),
        ),
    ]
