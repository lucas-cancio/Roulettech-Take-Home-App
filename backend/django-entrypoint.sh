#!/bin/sh

# Install netcat
# apt-get update && apt-get install -y nc && rm -rf /var/lib/apt/lists/*

echo "Waiting for postgres..."
sleep 15
# if [ "$DATABASE" = "postgres" ]
# then
#     echo "Waiting for postgres..."

#     while ! nc -z $SQL_HOST $SQL_PORT; do
#       sleep 0.1
#     done

#     echo "PostgreSQL started"
# fi

echo $USER

#python manage.py flush --no-input
python manage.py migrate
python manage.py collectstatic --no-input
#sudo chown -R ec2-user:nginx ./ && chmod -R 770 ./

cd backend
exec "$@"