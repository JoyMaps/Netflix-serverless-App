# 🎬 Netflix-Style Serverless Architecture (Terraform + LocalStack)

## 🚀 Overview
This project simulates a production-grade serverless backend inspired by Netflix architecture patterns. It demonstrates how scalable, event-driven systems are built using Infrastructure as Code and cloud-native design principles.

## 🏗️ Architecture
The system is built around a REST API and event-driven backend:

- API Layer (simulated API Gateway via Express)
- Compute Layer (simulated AWS Lambda using Node.js)
- Data Layer (DynamoDB via LocalStack)
- Messaging Layer (SQS for asynchronous processing)
- Infrastructure managed with Terraform

## 🧰 Tech Stack
- Terraform (Infrastructure as Code)
- LocalStack (AWS cloud simulation)
- Node.js (Lambda simulation)
- Express.js (API layer)
- DynamoDB (NoSQL database)
- SQS (event queue)

## 📁 Project Structure
netflix-serverless-project/
├── terraform/
├── lambdas/
│ ├── server.js
│ ├── getMovies/
│ ├── addMovie/
│ ├── watchMovie/
│ └── processRecommendation/
├── README.md


## ⚙️ How to Run

### 1. Start LocalStack
docker run -d -p 4566:4566 localstack/localstack

### 2. Deploy infrastructure
cd terraform
terraform init
terraform apply

### 3. Start Backend Server
cd lambdas
npm install
node server.js

### 4. Test API
GET    /movies
POST   /movies
POST   /watch

🔥 Challenges & Solutions
❌ Docker not available (Lambda failures)
LocalStack Lambda failed due to Docker runtime issues on Windows
✅ Solution: Decoupled Lambda and simulated locally using Node.js

❌ STS & IAM errors
Terraform failed due to missing services
✅ Solution: Enabled services and skipped credential validation

❌ Terraform state conflicts
Removed Lambda resources but state persisted
✅ Solution: Used terraform state rm

💡 Key Learnings
Designing serverless architectures
Debugging distributed systems
Infrastructure as Code with Terraform
Handling real-world cloud environment constraints

📌 Future Improvements
Deploy to real AWS environment
Add authentication (Cognito)
Implement CI/CD pipeline
Add monitoring (CloudWatch equivalent)

👩‍💻 Author
Joyline Mapangire
AWS Certified Solutions Architect
Aspiring Cloud Security Engineer
