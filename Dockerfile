FROM python:3.9-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


RUN apt-get update -y && apt -y upgrade && \
    apt-get install -y python-dev python3-pip build-essential python-setuptools

COPY . /app/Balance_ST

ADD etc etc

WORKDIR /app/Balance_ST

COPY entrypoint.sh /entrypoint.sh

RUN chmod a+x /entrypoint.sh

RUN pip3 install -r requirements.txt

ENTRYPOINT ["/app/Balance_ST/entrypoint.sh"]



