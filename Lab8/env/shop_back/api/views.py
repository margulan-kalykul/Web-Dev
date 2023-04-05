from django.http.response import HttpResponse, JsonResponse
from api.models import Product, Category


# Create your views here.
def get_products(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False, json_dumps_params={'indent': 4})


def get_product(request, id):
    products = Product.objects.all()
    product = {}
    for i in products:
        if i['id'] == id:
            product = i
            break
    if product != {}:
        return JsonResponse(product.to_json())
    else:
        return JsonResponse({'error': 'Product not found'})


def get_categories(request):
    categories = Category.objects.all()
    categories_json = [c.to_json for c in categories]
    return JsonResponse(categories_json, safe=False)


def get_category(request, id):
    categories = Category.objects.all()
    category = {}
    for i in categories:
        if i['id'] == id:
            category = i
            break
    if category != {}:
        return JsonResponse(category.to_json())
    else:
        return JsonResponse({'error': 'Category not found'})


def get_category_products(request, id):
    products = Product.objects.all()
    category_products = []
    for i in products:
        if i['category'] == id:
            category_products.append(i.to_json())
            break
    if len(category_products) > 0:
        return JsonResponse(category_products, safe=False)
    else:
        return JsonResponse({'error': 'Category products not found'})
