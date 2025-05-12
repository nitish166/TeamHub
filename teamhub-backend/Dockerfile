FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma client
RUN npx prisma generate

# Copy and make wait script executable
COPY wait-for-db.sh .
RUN chmod +x wait-for-db.sh

EXPOSE 5000

CMD ["./wait-for-db.sh"]