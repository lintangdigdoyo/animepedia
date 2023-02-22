FROM node:16-alpine

# Create working directory
WORKDIR /app

COPY . .

RUN npm ci --only=production

# Building app
RUN npm run build

EXPOSE 3000

# Running the app
CMD ["npm", "start"]