from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=0)
    description = models.TextField(default='Empty description')
    count = models.IntegerField(default=1)
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category,
                                 on_delete=models.CASCADE)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
        }
