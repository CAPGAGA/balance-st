from django.shortcuts import render
from django.http import JsonResponse
from .models import RequestModel
import json
from datetime import date
from .heandler.email_headler import EmailHeandler
import logging

def main(request):
    return render(request, 'main/index.html')

def ideas(request):
    return render(request, 'main/ideas.html')

def email_heandler(request):
    data = json.loads(request.body)
    logging.info(data)

    name = data['name']
    email = data['email']
    phone = data['phone']

    # try:
    # question = data['question']

    # time_now = date.today()

    email_request, created = RequestModel.objects.get_or_create(name=name, email=email, phone=phone)
    email_request.save()

    email_server = EmailHeandler()

    email_server.open_connection()

    email_server.send_email_to_self(email_request.get_id_of_request(),
                                    email_request.get_name_of_request(),
                                    email_request.get_email_of_request(),
                                    email_request.get_phone_of_request(),
                                    email_request.get_time_of_request())

    email_server.close_connection()

    logging.error('Request received and saved')
    return JsonResponse('Request received and saved', safe=False)
    # except:
    #     logging.error('Request received but not saved')
    #     return JsonResponse('Request received but not saved', safe=False)

