import smtplib
from email.message import EmailMessage
import logging
import os

class EmailHeandler():

    def __init__(self):
        self.email_login = os.getenv("MAIL_LOGIN")
        self.email_password = os.getenv("MAIL_PASSWORD")

    def open_connection(self):
        try:
            self.server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
            self.server.ehlo()
            self.server.login(self.email_login, self.email_password)
            return self.server
        except:
            self.server.close()
            return print('Email Server Error')

    def send_email_to_self(self, id, name, email, phone, conn_time):
        try:
            self.id = id
            self.name = name
            self.email = email
            self.phone = phone
            self.conn_time = conn_time

            msg = EmailMessage()

            msg.set_content(f'''     
                            Заявка № {self.id} на обратную связь от {self.name}
                            Контакты:
                            Email: {self.email}
                            Телефон: {self.phone}
                            Время создания заявки: {self.conn_time.strftime('%d-%m-%Y')}
                            ''')
            msg['Subject'] = f'Заявка № {self.id}'
            msg['From'] = self.email_login
            msg['To'] = self.email_login

            self.server.send_message(msg)

            return print('Mail Sent')
        except:
            self.server.close()
            return print('Mail error')


    def send_email_to_customer(self):
        pass

    def close_connection(self):
        try:
            self.server.close()
            return print('Connection closed')
        except:
            return print('Connection close error')