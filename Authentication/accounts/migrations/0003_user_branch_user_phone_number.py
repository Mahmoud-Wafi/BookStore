# Generated by Django 5.1.1 on 2024-09-22 12:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_onetimepassword'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='branch',
            field=models.CharField(choices=[('New Capital', 'NEW Capital'), ('Mansoura', 'Mansoura'), ('Cairo University', 'Cairo University'), ('Smart Village', 'Smart Village'), ('Aswan', 'Aswan'), ('Asuit', 'Asuit'), ('Qena', 'Qena'), ('Menia', 'Menia'), ('Menofia', 'Menofia'), ('Beni Suef', 'Beni Suef'), ('Sohag', 'Sohag'), ('Asmalilia', 'Asmalilia'), ('Alexendria', 'Alexendria')], default='', max_length=30),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='phone_number',
            field=models.CharField(default='', max_length=13),
            preserve_default=False,
        ),
    ]
