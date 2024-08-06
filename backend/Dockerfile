# Use the official Python image from the Docker Hub
FROM python:3.12-slim

# Set work directory
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the wait-for-it script
#COPY wait-for-it.sh /app/
#RUN ls -la ../
#RUN ls -la 

# Copy entrypoint script
COPY django-entrypoint.sh /app/
RUN sed -i 's/\r$//g' /app/django-entrypoint.sh
RUN chmod +x /app/django-entrypoint.sh
RUN ls -la

# Copy the rest of the django application code
COPY ./ /app/backend/

# Set the working directory to the Django backend

ENTRYPOINT [ "/app/django-entrypoint.sh" ]


# Make migrations and collect static files
#RUN pwd
#RUN ls -la
#RUN python manage.py migrate && python manage.py collectstatic --no-input

# Set correct file and ownership to enable access
#RUN sudo chown -R ec2-user:nginx ./ && chmod -R 770 ./