from django.forms import model_to_dict
from django.views.decorators.csrf import csrf_exempt
from django.http.response import HttpResponse, JsonResponse
from api.models import Company, Vacancy
import json


# Create your views here.
@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        categories = Company.objects.all()
        categories_json = [c.to_json() for c in categories]
        return JsonResponse(categories_json, safe=False, json_dumps_params={'indent': 4})
    if request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name', '')
        company = Company.objects.create(name=company_name)
        return JsonResponse(company.to_json(), json_dumps_params={'indent': 4})


@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json(), json_dumps_params={'indent': 4})
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_company_name = data.get('name', company.name)
        company.name = new_company_name
        company.save()
        return JsonResponse(company.to_json(), json_dumps_params={'indent': 4})
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent': 4})


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse(vacancy.to_json(), json_dumps_params={'indent': 4})


def company_vacancies(request, company_id):
    try:
        vacancies = Vacancy.objects.filter(company__pk=company_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    vacancies_json = [model_to_dict(v) for v in vacancies]
    return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent': 4})


def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by("-salary")[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent': 4})
