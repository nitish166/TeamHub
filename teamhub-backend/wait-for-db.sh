#!/bin/sh

# Wait for PostgreSQL to be ready
until npx prisma migrate dev; do
  echo "⏳ Waiting for DB to be ready..."
  sleep 2
done

# Start the server
node index.js