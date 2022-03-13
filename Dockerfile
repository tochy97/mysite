FROM python:3.6-alpine

MAINTAINER Tochy Egeonu 

EXPOSE 8000

RUN apk add --no-cache gcc python3-dev musl-dev

ADD . /root

WORKDIR /root

RUN pip install -r root/requirements.txt

RUN python root/manage.py makemigrations

RUN python root/manage.py migrate

CMD [ "python", "root/manage.py", "runserver", "0.0.0.0:8000" ]