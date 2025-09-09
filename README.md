# Dev Course with AI

A comprehensive, hands-on software development course designed to take you from beginner to intermediate proficiency across modern web development, databases, frameworks, and AI integration. This course is optimized for use with Cursor's AI agent to provide personalized, interactive learning.

## Prerequisites

Before you begin, make sure you have:

- Basic computer literacy
- Cursor IDE installed
- Git installed
- Terminal/command line access
- Internet connection for package installation

## What This Course Covers

This structured curriculum covers 8 phases of software development:

- **Phase 1**: Programming Fundamentals (JavaScript, DRY/SOLID principles, debugging, testing)
- **Phase 2**: Tools & Workflow (Terminal, Git, package managers, IDE setup)
- **Phase 3**: Web & Networking (HTML/CSS/JS, HTTP, authentication, security)
- **Phase 4**: Databases (SQL/NoSQL, modeling, performance, ORMs)
- **Phase 5**: JS Frameworks (Node.js, Express, React, Firebase, React Native)
- **Phase 6**: Python Frameworks (Jupyter, Pandas, FastAPI/Flask)
- **Phase 7**: AI & Modern Development (LLMs, agents, embeddings, RAG)
- **Phase 8**: Advanced Topics (Docker, CI/CD, security, performance)

## Getting Started

Follow these steps in order to set up and start the course:

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/manish05/dev-course-with-ai.git
cd dev-course-with-ai
```

### Step 2: Set Up Cursor Custom Agent Mode

1. Open Cursor and go to **Settings** → **Chat** → **Custom Modes**
2. Enable custom modes (currently in beta)
3. Create a new custom mode with these settings:
   - **Name**: "Dev Course Instructor"
   - **Tools**: Enable ALL tools (search, edit, terminal, web search, etc.)
   - **Auto-run**: Enable
   - **Auto-fix Errors**: Enable

### Step 3: Configure the AI Instructor

Copy the entire contents of `INSTRUCTOR_INSTRUCTIONS.md` and paste it into the **Advanced Options** prompt field in your custom agent mode. This file contains detailed instructions for the AI instructor on how to:

- Deliver hands-on, practical lessons
- Create exercises on-the-fly
- Debug collaboratively with you
- Track progress and provide feedback
- Use Bun as the preferred package manager
- Follow a structured session flow

### Step 4: Start Learning

1. Switch to your "Dev Course Instructor" custom mode
2. Simply say **"Hi"** or **"Let's start learning"**
3. The AI instructor will:
   - Load your progress from `INSTRUCTOR_MEMORY.md`
   - Check your current phase in `CHECKLIST.md`
   - Set a small, achievable goal for the session
   - Create hands-on exercises
   - Guide you through debugging and implementation
   - Update your progress automatically

## Course Files

- **`COURSE.md`**: Complete syllabus with detailed topic breakdowns
- **`CHECKLIST.md`**: Progress tracking with checkboxes for each phase
- **`EVALUATION.md`**: Scoring rubric and evaluation criteria
- **`INSTRUCTOR_INSTRUCTIONS.md`**: AI instructor playbook (copy this to Cursor)
- **`INSTRUCTOR_MEMORY.md`**: Persistent memory of your progress and preferences

## Key Features

- **Hands-on Learning**: Every concept is learned through practical exercises
- **Personalized Pace**: AI adapts to your learning style and prior knowledge
- **Real-time Debugging**: Collaborative problem-solving with the AI instructor
- **Progress Tracking**: Automatic updates to your learning checklist
- **Modern Tools**: Uses Bun, modern frameworks, and current best practices
- **Comprehensive Coverage**: From basics to advanced topics like AI integration

Ready to start your journey to software development proficiency? Follow the steps above and say hello to your AI instructor!
