# Pritam CLI

> A terminal-based interactive portfolio built with Node.js.

Explore my background, technical skills, projects, education and professional profiles directly from your terminal.

Instead of navigating a traditional portfolio website, interact with my portfolio using simple slash commands.

## Preview

```text
visitor@pritam.cli ~ $ /help

AVAILABLE COMMANDS

PORTFOLIO
  /about
  /skills
  /projects
  /education

IDENTITY & LINKS
  /whoami
  /identity
  /contact

PROFILES
  /github
  /linkedin
  /instagram
  /x
  /leetcode
  /codeforces
  /atcoder
  /resume

SYSTEM
  /help
  /clear
  /exit
```

## Features

- **Interactive CLI:** Explore the portfolio using slash commands.
- **About Me:** Learn about my background and interests.
- **Technical Skills:** Explore my programming languages, frameworks and tools.
- **Projects:** Discover my development projects and source code.
- **Education:** View my academic background.
- **Professional Profiles:** Access my GitHub, LinkedIn and other profiles.
- **Resume:** Access my professional resume.
- **Minimal Interface:** Clean terminal output with a consistent visual theme.

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Run without installing globally

```bash
npx pritam-cli
```
```bash
npm i pritam-cli
```

### Install globally

```bash
npm install -g pritam-cli
```

Then execute:

```bash
pritam-cli
```

## Available Commands

| Command | Description |
|---|---|
| `/about` | About me |
| `/skills` | Technical skills |
| `/projects` | View my projects |
| `/education` | Education |
| `/whoami` | Identity information |
| `/identity` | Identity information |
| `/contact` | Contact information |
| `/github` | GitHub profile |
| `/linkedin` | LinkedIn profile |
| `/instagram` | Instagram profile |
| `/x` | X profile |
| `/leetcode` | LeetCode profile |
| `/codeforces` | Codeforces profile |
| `/atcoder` | AtCoder profile |
| `/resume` | Open my resume |
| `/help` | List available commands |
| `/clear` | Clear the terminal |
| `/exit` | Exit the application |

## Tech Stack

- **Node.js** — JavaScript runtime
- **JavaScript (ES Modules)** — Application development
- **Node.js Readline** — Command-line input handling
- **Chalk** — Terminal styling
- **Boxen** — Terminal layouts and borders
- **Open** — Opening external links in the default browser
- **npm** — Package management and distribution

## Project Structure

```text
pritam-cli/
│
├── src/
│   ├── cli/
│   │   └── command-handler.js
│   │
│   ├── commands/
│   │   ├── about.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── education.js
│   │   ├── contact.js
│   │   ├── github.js
│   │   └── identity.js
│   │
│   ├── data/
│   │   └── portfolio.js
│   │
│   ├── ui/
│   │   ├── display.js
│   │   └── theme.js
│   │
│   └── index.js
│
├── tests/
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## Run Locally

Clone the repository:

```bash
git clone https://github.com/pritam-swe/pritam-cli.git
```

Navigate into the project:

```bash
cd pritam-cli
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

## Author

**Pritam**

- GitHub: https://github.com/pritam-swe
- LinkedIn: https://linkedin.com/in/pritamswe
- X: https://x.com/pritam_swe
- Instagram: https://instagram.com/pritam.swe
- Email: pritam.swe.ai@gmail.com

## License

This project is licensed under the ISC License.