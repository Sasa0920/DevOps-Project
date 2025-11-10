FROM node:20-alpine

# Install pnpm globally
RUN npm install -g pnpm@10.17.0

WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the code
COPY . .

# Build the app
RUN pnpm run build

EXPOSE 5173

CMD ["pnpm", "run", "dev"]
