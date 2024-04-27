FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ ./

ARG SUPABASE_URL
ARG SUPABASE_KEY
ENV VITE_SUPABASE_URL=${SUPABASE_URL}
ENV VITE_SUPABASE_KEY=${SUPABASE_KEY}

RUN npm run build

EXPOSE 80

CMD ["npm", "run", "serve"]