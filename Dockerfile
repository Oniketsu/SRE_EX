FROM python:3.8

RUN python3 -m pip install --upgrade pip

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt   

ENTRYPOINT [ "python" ]
CMD [ "app.py" ]