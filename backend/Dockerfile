# Use the official Python image from the Docker Hub
FROM python:3.12-slim

# Set work directory
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the rest of the django application code
COPY backend/ /app/

# Set the working directory to the Django backend
WORKDIR /app/backend

# Make migrations and collect static files
RUN python manage.py migrate && python manage.py collectstatic --no-input

# Set correct file and ownership to enable access
RUN sudo chown -R ec2-user:nginx ./ && chmod -R 770 ./