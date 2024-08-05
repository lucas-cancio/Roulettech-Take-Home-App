# Use the official Python image from the Docker Hub
FROM python:3.12-slim

# Install system dependencies
RUN apt-get update && apt-get install -y libxcrypt libxcrypt-compat
RUN 

# Set work directory
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the rest of the django application code
COPY backend/ ./backend/

# Make migrations and collect static files
RUN cd backend/ && python manage.py migrate && python manage.py collectstatic --no-input

# Set correct file and ownership to enable access
RUN sudo chown -R ec2-user:nginx ./ && chmod -R 770 ./