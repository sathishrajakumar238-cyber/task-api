# Task API — CI/CD Mini Project

A simple Node.js/Express REST API, containerized with Docker, with an automated CI pipeline in Azure DevOps.

## Features
- REST endpoints: `GET /health`, `GET /tasks`, `POST /tasks`
- Multi-stage Dockerfile for a lean production image
- Azure DevOps pipeline that auto-builds on every push to `main`

## Tech Stack
Node.js, Express, Docker, Git, Azure DevOps

## Run locally
\`\`\`bash
npm install
node index.js
\`\`\`

## Run with Docker
\`\`\`bash
docker build -t task-api .
docker run -p 3000:3000 task-api
\`\`\`

## CI Pipeline
Every push to `main` triggers an Azure DevOps pipeline that installs dependencies and builds the Docker image automatically.

This project uses Azure DevOps CI/CD with branch protection.