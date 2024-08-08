#!/bin/sh

# Install netcat
apt-get update && apt-get install -y netcat-traditional && rm -rf /var/lib/apt/lists/*

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $DB_HOST $DB_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

echo $USER

#python manage.py flush --no-input
python manage.py migrate
python manage.py collectstatic --no-input
# sudo chown -R ec2-user:nginx ./
# chmod -R 755 ./

exec "$@"