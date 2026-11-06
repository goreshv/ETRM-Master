import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "energy_backend.settings")

application = get_wsgi_application()

# Ensure migrations and default superuser exist on runtime startup
try:
    from django.core.management import call_command
    call_command('migrate', interactive=False)

    from django.contrib.auth import get_user_model
    User = get_user_model()
    username = os.environ.get('DJANGO_SUPERUSER_USERNAME', 'admin')
    email = os.environ.get('DJANGO_SUPERUSER_EMAIL', 'admin@etrm.com')
    password = os.environ.get('DJANGO_SUPERUSER_PASSWORD', 'EtrmAdmin2026!')

    user, created = User.objects.get_or_create(username=username, defaults={'email': email})
    user.set_password(password)
    user.is_staff = True
    user.is_superuser = True
    user.is_active = True
    user.save()
    print(f"[WSGI_STARTUP] Superuser '{username}' verified and ready.")
except Exception as e:
    print(f"[WSGI_STARTUP] Warning during startup setup: {e}")
