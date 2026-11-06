from django.db import migrations
import os

def create_superuser(apps, schema_editor):
    from django.contrib.auth import get_user_model
    User = get_user_model()
    
    username = os.environ.get('DJANGO_SUPERUSER_USERNAME', 'admin')
    email = os.environ.get('DJANGO_SUPERUSER_EMAIL', 'admin@etrm.com')
    password = os.environ.get('DJANGO_SUPERUSER_PASSWORD', 'EtrmAdmin2026!')

    if not User.objects.filter(username=username).exists():
        User.objects.create_superuser(
            username=username,
            email=email,
            password=password
        )
        print(f"\n[INIT] Default superuser '{username}' created successfully.")
    else:
        user = User.objects.get(username=username)
        user.set_password(password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        print(f"\n[INIT] Existing superuser '{username}' password refreshed.")

def reverse_func(apps, schema_editor):
    pass

class Migration(migrations.Migration):

    dependencies = [
        ('trades', '0004_appuser_communityconcept'),
    ]

    operations = [
        migrations.RunPython(create_superuser, reverse_func),
    ]
