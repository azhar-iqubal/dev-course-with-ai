# Dev Course with AI

A comprehensive, hands-on software development course designed to take you from beginner to intermediate proficiency across modern web development, databases, frameworks, and AI integration. This course is optimized for use with Cursor's AI agent to provide personalized, interactive learning.

## Prerequisites

Before you begin, make sure you have:

- Basic computer literacy
- Cursor IDE installed
- Git installed
- Terminal/command line access
- Internet connection for package installation
- **Superwhisper** (recommended for voice-to-text input) - see installation instructions below

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

### Step 1: Install Cursor IDE

Cursor is an AI-powered code editor that will serve as your primary development environment for this course.

#### Installation Instructions:

1. **Download Cursor:**
   - Visit the official Cursor website: [https://cursor.com/](https://cursor.com/)
   - Click the "Download" button appropriate for your operating system

2. **Install Cursor:**
   - **Windows**: Double-click the downloaded `.exe` file and follow the on-screen prompts
   - **macOS**: Open the downloaded `.dmg` file and drag the Cursor application to your "Applications" folder
   - **Linux**: Download the appropriate package (`.deb` or `.rpm`) for your distribution and install using your package manager

3. **Launch Cursor:**
   - Open Cursor and complete the initial setup
   - Sign in or create an account if prompted
   - Familiarize yourself with the interface

For detailed installation instructions, refer to Cursor's [official installation guide](https://docs.cursor.com/en/get-started/installation).

### Step 2: Install Superwhisper (Recommended)

Superwhisper enables voice-to-text input in Cursor Chat, making it easier to communicate with your AI instructor hands-free.

#### Installation Instructions:

1. **Download and Install Superwhisper:**
   - Visit the official Superwhisper website: [https://superwhisper.com/](https://superwhisper.com/)
   - Click on the "Download now" button to download the application
   - Once the download is complete, open the installer and follow the on-screen instructions to install Superwhisper on your device

2. **Set Up Superwhisper:**
   - After installation, launch Superwhisper
   - Grant the necessary permissions for microphone access and any other requested system permissions to ensure optimal functionality
   - Configure your preferred settings, such as selecting the input device (microphone) and adjusting sound preferences

3. **Integrate with Cursor Chat:**
   - Open Cursor Chat within the Cursor IDE
   - Place the text cursor in the chat input field where you want to dictate your message
   - Activate Superwhisper's dictation feature by pressing the designated hotkey (default is **Option + Space** on macOS)
   - Begin speaking your message; Superwhisper will transcribe your speech into text in real-time within the chat input field
   - Once you've finished dictating, press the hotkey again to stop the recording
   - Review the transcribed text, make any necessary edits, and send your message as usual

#### Additional Features:
- **Language Support:** Superwhisper supports transcription in over 100 languages and can translate them all to English
- **Offline Functionality:** The application operates offline, ensuring your data remains private by processing all information on-device without the need for an internet connection
- **Custom Vocabulary:** You can add specific phrases, names, links, or acronyms to enhance transcription accuracy

For more detailed information and support, please refer to the official Superwhisper documentation: [https://superwhisper.com/docs/](https://superwhisper.com/docs/)

### Step 3: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/manish05/dev-course-with-ai.git
cd dev-course-with-ai
```

### Step 4: Set Up Cursor Custom Agent Mode

1. Open Cursor and go to **Settings** → **Chat** → **Custom Modes**
2. Enable custom modes (currently in beta)
3. Create a new custom mode with these settings:
   - **Name**: "Dev Course Instructor"
   - **Tools**: Enable ALL tools (search, edit, terminal, web search, etc.)
   - **Auto-run**: Enable
   - **Auto-fix Errors**: Enable

### Step 5: Configure the AI Instructor

Copy the entire contents of `INSTRUCTOR_INSTRUCTIONS.md` and paste it into the **Advanced Options** prompt field in your custom agent mode. This file contains detailed instructions for the AI instructor on how to:

- Deliver hands-on, practical lessons
- Create exercises on-the-fly
- Debug collaboratively with you
- Track progress and provide feedback
- Use Bun as the preferred package manager
- Follow a structured session flow

### Step 6: Start Learning

1. Switch to your "Dev Course Instructor" custom mode
2. Simply say **"Hi"** or **"Let's start learning"** (you can use Superwhisper voice input by pressing **Option + Space** and speaking your message)
3. The AI instructor will:
   - Load your progress from `INSTRUCTOR_MEMORY.md`
   - Check your current phase in `CHECKLIST.md`
   - Set a small, achievable goal for the session
   - Create hands-on exercises
   - Guide you through debugging and implementation
   - Update your progress automatically

**💡 Pro Tip:** Use Superwhisper to ask questions and communicate with your AI instructor hands-free. This is especially helpful when you're coding and want to ask for help without stopping to type!

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
