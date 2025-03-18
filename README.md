# Chill Lounge

<div align="center">
  <img src="https://via.placeholder.com/200x200?text=Chill+Lounge" alt="Chill Lounge Logo" width="200"/>
  <p><em>A virtual social space to hang out, play music, and enjoy games together</em></p>
</div>

## Overview

Chill Lounge is a web application that enables users to create and join virtual lounges where they can socialize, listen to synchronized music, and play casual games together. It recreates the feeling of hanging out in a physical space, regardless of geographic location.

### Key Features

- **Create custom lounges** with personalized themes and settings
- **Real-time chat** with text, reactions, and media sharing
- **Synchronized music playback** with collaborative playlists
- **Integrated games** including card games and other casual entertainment
- **Voice chat** for natural conversation
- **Privacy controls** to manage who can join your lounge
- **Cross-platform compatibility** with web and mobile support

## Technology Stack

### Frontend

- React.js with Next.js framework
- TypeScript for type safety
- Redux for state management
- Tailwind CSS for styling
- Socket.io client for real-time communication

### Backend

- Node.js with Express
- MongoDB for document storage
- PostgreSQL for relational data
- Redis for caching and real-time features
- Socket.io for WebSocket communication

### Infrastructure

- Docker containers
- Kubernetes orchestration
- CI/CD with GitHub Actions
- Monitoring with Prometheus and Grafana

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- Docker and Docker Compose
- MongoDB (local or Atlas)
- PostgreSQL
- Redis

### Development Setup

1. Clone the repository

```bash
git clone https://github.com/yourusername/chill-lounge.git
cd chill-lounge
```

2. Install dependencies

```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables

```bash
# In the server directory
cp .env.example .env
# Edit .env with your configuration

# In the client directory
cp .env.example .env
# Edit .env with your configuration
```

4. Start development servers

```bash
# Start backend server
cd server
npm run dev

# In another terminal, start frontend
cd client
npm run dev
```

5. Access the application

```
Frontend: http://localhost:3000
Backend API: http://localhost:8000
API Documentation: http://localhost:8000/api-docs
```

### Docker Setup

Alternatively, you can use Docker Compose to run the entire stack:

```bash
docker-compose up -d
```

## Project Structure

```
chill-lounge/
├── client/                 # Frontend application
│   ├── public/             # Static assets
│   │   ├── components/     # Reusable components
│   │   ├── contexts/       # React contexts
│   │   ├── hooks/          # Custom hooks
│   │   ├── pages/          # Next.js pages
│   │   ├── redux/          # Redux store, actions, reducers
│   │   ├── services/       # API services
│   │   ├── styles/         # Tailwind and global styles
│   │   └── utils/          # Helper functions
│   └── ...
├── server/                 # Backend services
│   ├── src/                # Source code
│   │   ├── api/            # API routes
│   │   ├── config/         # Configuration
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Express middleware
│   │   ├── models/         # Database models
│   │   ├── services/       # Business logic
│   │   └── utils/          # Helper functions
│   └── ...
├── docs/                   # Documentation
├── k8s/                    # Kubernetes configuration
└── ...
```

## Contribution Guidelines

### Branching Strategy

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/feature-name` - Feature branches
- `bugfix/bug-name` - Bug fix branches
- `hotfix/fix-name` - Production hotfixes

### Development Workflow

1. Create a new branch from `develop` for your feature or bugfix
2. Make your changes with appropriate tests
3. Submit a pull request to the `develop` branch
4. Ensure CI tests pass
5. Request review from maintainers
6. Address feedback and update PR if needed
7. Once approved, your PR will be merged

### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example: `feat(auth): implement Google OAuth login`

### Code Style

- We use ESLint and Prettier for code formatting
- Run `npm run lint` and `npm run format` before committing
- Follow the project's established patterns and conventions

## Testing

- Run unit tests: `npm test`
- Run integration tests: `npm run test:integration`
- Run end-to-end tests: `npm run test:e2e`

## Deployment

Deployment instructions and environments:

- **Development**: Automatic deployment from the `develop` branch
- **Staging**: Manual deployment from the `staging` branch
- **Production**: Manual deployment from the `main` branch

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Project Lead: [Your Name](mailto:your.email@example.com)
- Website: [chilllounge.example.com](https://chilllounge.example.com)

---

<div align="center">
  <p>Made with ❤️ by the Chill Lounge Team</p>
</div>
