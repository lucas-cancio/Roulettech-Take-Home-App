# Use the official Python image from the Docker Hub
FROM python:3.12-slim

# Set work directory
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy entrypoint script
COPY django-entrypoint.sh /app/
RUN sed -i 's/\r$//g' /app/django-entrypoint.sh
RUN chmod +x /app/django-entrypoint.sh
RUN ls -la

# Copy the rest of the django application code
COPY ./ /app/backend/

ENTRYPOINT [ "/app/django-entrypoint.sh" ]
