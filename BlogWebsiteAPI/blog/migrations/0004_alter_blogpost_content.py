# Generated by Django 3.2.8 on 2021-10-27 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20210728_2304'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='content',
            field=models.TextField(),
        ),
    ]
