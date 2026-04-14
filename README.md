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
│
├── README.md
├── .gitignore
├── docker-compose.yml                # Optional: LocalStack setup
│
├── terraform/                        # Infrastructure as Code (IaC)
│   ├── provider.tf                   # AWS provider (LocalStack config)
│   ├── dynamodb.tf                   # DynamoDB table definitions
│   ├── s3.tf                         # S3 bucket configuration
│   ├── sqs.tf                        # SQS queue setup
│   ├── iam.tf                        # IAM roles and policies
│   ├── apigateway.tf                 # API Gateway configuration (simulated)
│   ├── variables.tf                  # Input variables
│   └── outputs.tf                    # Output values
│
├── lambdas/                          # Simulated Lambda functions (Node.js)
│   ├── server.js                     # Express server (API Gateway + Lambda simulation)
│   │
│   ├── getMovies/
│   │   └── index.js                  # Fetch movies (GET /movies)
│   │
│   ├── addMovie/
│   │   └── index.js                  # Add movie (POST /movies)
│   │
│   ├── watchMovie/
│   │   └── index.js                  # Send watch event (POST /watch)
│   │
│   ├── processRecommendation/
│   │   └── index.js                  # Async processing (simulated SQS consumer)
│   │
│   └── shared/                       # Shared utilities (optional)
│       └── utils.js
│
├── build/                            # (Optional) Lambda zip artifacts
│   └── *.zip
│
├── scripts/                          # Automation scripts (optional but professional)
│   ├── setup.sh                      # Environment setup
│   ├── deploy.sh                     # Terraform deployment
│   ├── zip-lambdas.sh                # Package lambdas
│   └── test-api.sh                   # API testing scripts
│
├── tests/                            # API test definitions
│   └── api-tests.http
│
└── docs/                             # Documentation & diagrams
    ├── architecture.png              # Architecture diagram (PNG)
    ├── architecture.drawio          # Editable diagram (Draw.io)
    └── decisions.md                  # Key engineering decisions


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

🧠 Architecture Note

This project was originally designed as a fully serverless AWS architecture using API Gateway and Lambda.
Due to LocalStack limitations with Lambda execution on Windows, the compute layer was decoupled and simulated locally using Node.js (Express).

This approach preserves the architectural design while ensuring a stable and testable development environment.

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
