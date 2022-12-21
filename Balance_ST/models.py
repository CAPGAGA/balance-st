from django.db import models


class RequestModel(models.Model):

    id = models.BigAutoField('ID запроса', primary_key=True)
    name = models.CharField('Имя заказчика', max_length=64)
    email = models.EmailField('Почта заказчика', blank=True)
    phone = models.IntegerField('Телефоон заказчика', blank=True)
    question = models.CharField('Вопрос закзчика', max_length=200, blank=True)
    datefield = models.DateTimeField('Дата поступления запроса', auto_now_add=True)

    def get_id_of_request(self):
        return self.id

    def get_name_of_request(self):
        return self.name

    def get_email_of_request(self):
        return self.email

    def get_phone_of_request(self):
        return self.phone

    def get_question_of_request(self):
        return self.question

    def get_time_of_request(self):
        return self.datefield