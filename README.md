# devops_local_service_finder_app

## Group Information
- **Student 1:** Sandaru Amarasekara - ITBIN-2313-0008 - Role: Backend Developer
- **Student 2:** Lakshani Manusha- ITBIN-2313-0063 - Role: DevOps/Release Manager
- **Student 3:** Ranasinghe Arachchige Shashini Ruwanthika - ITBIN-2313-0095 - Role: Frontend Developer 

## Project Description
[Local Service Finder is a web-based platform that helps users discover and connect with trusted local service providers. Users can search for electricians, plumbers, and mechanics in their area, view ratings, and contact them directly via phone or WhatsApp.git]

## Live Deployment
🔗 **Live URL:** https://your-project.vercel.app

## Technologies Used
- HTML5, CSS3, JavaScript
- JSON for data storage
- GitHub Actions
- Vercel for deployment

## Features

- Search services by name, category, or location 
- Filter by service type (Electrician, Plumber, Mechanic) 
- View provider ratings and experience 
- Direct call functionality 
-  WhatsApp contact integration 
- Responsive design for mobile and desktop 
- Search services by name, category, or location
- Filter by service type (Electrician, Plumber, Mechanic,etc.)
- View provider ratings and experience
- Direct call functionality
- WhatsApp contact integration
- Responsive design for mobile and desktop

## Branch Strategy
We implemented the following branching strategy:
- `main` - Production branch (protected, auto-deploys)
- `develop` - Integration branch
- `feature/ui-design` - Frontend UI components 
- `feature/service-data`- Backend data and search functionality 
- `feature/github-actions`- CI/CD pipeline setup 

## Individual Contributions

### Lakshani Manusha - DevOps/Release Manager 
- Repository setup and configuration
- GitHub Actions CI/CD pipeline implementation
- Vercel deployment setup and management 
- Branch protection and merge management 
- Created .github/workflows/ci.yml and deploy.yml 
- Managed pull request merges

### Sandaru Amarasekara- Backend Developer 
- Created service provider data structure (services.json) 
- Implemented search and filter functionality 
- Developed rating display system 
- Created main application logic (main.js) 
- Implemented data loading and error handling

### Ranasinghe Arachchige Shashini Ruwanthika - Frontend Developer
- Designed and implemented UI layout (index.html)
- Created responsive styling (style.css)
- Developed service card components
- Implemented contact buttons (Call/WhatsApp)
- Created comprehensive README documentation
- Ensured mobile responsiveness


## Setup Instructions

### Prerequisites
- Node.js (version 18 or higher)
- Git

### Installation
```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to project directory
cd [project-name]

# Install dependencies
npm install

# Run development server
npm run dev

# Deployment Process
[Explain how your CI/CD pipeline works]
# Challenges Faced
[Optional: Describe any challenges and how you resolved them]
# Build Status 
---

## 📝 Step-by-Step Implementation Guide

### Phase 1: Setup (0-15 minutes)

#### Step 1: Team Formation & Planning
1. Form your team (2-3 students)
2. Assign roles based on strengths
3. Choose your project type
4. Decide on features to implement

#### Step 2: Repository Creation (DevOps Engineer)
1. Go to GitHub.com and sign in
2. Click "New Repository"
3. Name: `[project-name]-devops-assignment`
4. Description: "Advanced Git & DevOps Assignment - [Group Number]"
5. Select **PUBLIC**
6. Initialize with README: **NO** (we'll create our own)
7. Click "Create Repository"

#### Step 3: Add Collaborators
1. Go to Settings → Collaborators
2. Add all team members by GitHub username
3. Each member should accept the invitation

#### Step 4: Clone Repository (All Members)
```bash
git clone https://github.com/[username]/[repo-name].git
cd [repo-name]

Step 5: Initial Setup (DevOps Engineer)
# Create initial files
touch README.md .gitignore

# Create branch structure
git checkout -b develop
git push -u origin develop

# Create GitHub Actions directory
mkdir -p .github/workflows

# Add initial commit
git add .
git commit -m "chore: initial repository setup"
git push origin develop

