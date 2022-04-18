FROM python:3.8
WORKDIR /app
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
COPY requirements.txt requirements.txt
RUN pip install --upgrade pip -r requirements.txt
EXPOSE 5000
COPY . .
CMD ["flask", "run"]