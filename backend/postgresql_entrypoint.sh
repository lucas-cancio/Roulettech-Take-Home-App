#!/bin/bash
set -e

# Create the symbolic link
ln -sf /tmp/.s.PGSQL.5432 /var/run/postgresql/.s.PGSQL.5432

# Execute the original entrypoint command of the postgres image
exec docker-entrypoint.sh "$@"