# Use Node 20 Alpine
FROM node:20-alpine

# Install required packages for Corepack/pnpm
RUN apk add --no-cache curl ca-certificates bash openssl libc6-compat

# Enable Corepack and install pnpm
RUN corepack enable && corepack prepare pnpm@10.17.0 --activate

# Add a retry/timeout for npm fetch (helps with flaky network)
RUN npm config set fetch-retry-maxtimeout 120000

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml first (for caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN pnpm run build

# Expose dev server port
EXPOSE 5173

# Start the app
CMD ["pnpm", "run", "dev"]
