from django.contrib import admin
from api.models import Company, Vacancy


@admin.register(Company)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'city', 'address', 'description')


@admin.register(Vacancy)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'salary')
