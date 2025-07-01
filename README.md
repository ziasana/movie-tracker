# 🎬 Movie Tracker

A full-stack web application for browsing, searching, and tracking movies. Built with React, Node.js, GraphQL, and MongoDB.

## ✨ Features

- 🎥 Browse popular movies with details (title, overview, release date)
- 🔍 Search functionality with instant results
- ❤️ Save favorite movies to your watchlist
- ⭐ Rate and review movies
- 📱 Responsive design (works on mobile & desktop)

## 🛠 Tech Stack

### Frontend
- React.js
- Apollo Client (GraphQL)
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express
- Apollo Server (GraphQL)
- MongoDB (with Mongoose)

### Development Tools
- ESLint + Prettier
- GitHub Actions (CI/CD)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/movie-tracker.git
   cd movie-tracker
   Set up backend

bash
cd server
npm install
cp .env.example .env  # Update with your MongoDB URI
Set up frontend

bash
cd ../client
npm install
cp .env.example .env
Run the application

In one terminal:

bash
cd server && npm start
In another terminal:

bash
cd client && npm start

📂 Project Structure

![structure](https://github.com/user-attachments/assets/d0f8e1a6-0dbe-4d5d-ad61-aa3be6d8e73c)

🌐 API Reference
GraphQL Endpoints
GET /graphql - Main GraphQL endpoint

POST /graphql - For mutations

Example Query:

graphql
query GetMovies {
  movies {
    id
    title
    release_date
  }
}

🤝 Contributing
The Authentication part is still under development.
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📝 License
Distributed under the MIT License. See LICENSE for more information.

📬 Contact
Mohammad Zia Saa - @zs.hossainy@gmail.com

Project Link: https://github.com/your-username/movie-tracker
