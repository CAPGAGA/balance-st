from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.sitemaps.views import sitemap
from .sitemaps import StaticSitemap

app_name = "Balance_ST"

sitemaps = {
    'static': StaticSitemap
}

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.main, name='mainpage'),
    path('get_request/', views.email_heandler, name='email_heandler'),
    path('ideas/', views.ideas, name='ideas'),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)