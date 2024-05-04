---
title: "Django Browser-Reload"
content_type: "notes"
topic: "Django"
category: "Workflow"
sub_category: "Python"
status: "publish"
date: "2024-04-01"
---

# Django Browser-Reload

1. **Install Dependencies**:

Install `django-browser-reload`:

```bash
python -m pip install django-browser-reload
```

2. **Update Django Settings**:

Ensure `"django.contrib.staticfiles"` is in your `INSTALLED_APPS` in `settings.py`:

```python
INSTALLED_APPS = [
    # ...
    "django.contrib.staticfiles",
    # ...
]
```

Add `"django_browser_reload"` to `INSTALLED_APPS`:

```python
INSTALLED_APPS = [
    # ...
    "django_browser_reload",
    # ...
]
```

3. **Include App URLs**:

In your root URL configuration (usually in `urls.py`), include the app's URLs:

```python
from django.urls import include, path

urlpatterns = [
    # ...
    path("__reload__/", include("django_browser_reload.urls")),
    # ...
]
```

- You can use a different prefix if needed.

4. **Add Middleware**:

In your `MIDDLEWARE` settings, add this line after other middleware (e.g., `GZipMiddleware`):

```python
MIDDLEWARE = [
    # ...
    "django_browser_reload.middleware.BrowserReloadMiddleware",
    # ...
]

DEBUG = True
```

The middleware inserts a script tag on HTML responses when `DEBUG` is `True`, enabling automatic reloading.

5. **All Set!**

Now, when you save changes to Python files, HTML, or CSS files, your browser will automatically reload to reflect those changes.

![logo](/fscode/fscode32x32.png)
