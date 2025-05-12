#!/bin/sh

echo "⏳ Waiting for PostgreSQL to be ready..."

until npx prisma migrate deploy; do
  echo "Database not ready yet. Retrying in 2 seconds..."
  sleep 2
done

echo "Database is ready. Starting server..."
exec node index.js