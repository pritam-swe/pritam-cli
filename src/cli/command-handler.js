
import { showAbout } from "../commands/about.js";
import { showSkills } from "../commands/skills.js";
import { showProjects } from "../commands/projects.js";
import { showContact } from "../commands/contact.js";
import { showEducation } from "../commands/education.js";
import { showIdentity } from "../commands/identity.js";
import {
    openAtCoder,
    openCodeforces,
    openGithub,
    openInstagram,
    openLeetCode,
    openLinkedin,
    openResume,
    openX,
} from "../commands/links.js";

import { errorMessage, sectionTitle, theme } from "../ui/theme.js";

const commands = {
    "/about": showAbout,
    "/skills": showSkills,
    "/projects": showProjects,
    "/education": showEducation,
    "/contact": showContact,

    "/whoami": showIdentity,
    "/identity": showIdentity,

    "/github": openGithub,
    "/linkedin": openLinkedin,
    "/instagram": openInstagram,
    "/x": openX,
    "/leetcode": openLeetCode,
    "/codeforces": openCodeforces,
    "/atcoder": openAtCoder,
    "/resume": openResume,

    "/help": () => {
        sectionTitle("Available Commands");

        const groups = {
            "Portfolio": ["/about", "/skills", "/projects", "/education"],
            "Identity & Links": ["/whoami", "/identity", "/contact"],
            "Profiles": [
                "/github", "/linkedin", "/instagram", "/x",
                "/leetcode", "/codeforces", "/atcoder", "/resume",
            ],
            "System": ["/help", "/clear", "/exit"],
        };

        for (const [group, items] of Object.entries(groups)) {
            console.log(theme.muted(group.toUpperCase()));

            for (const item of items) {
                console.log(`  ${theme.text(item)}`);
            }

            console.log();
        }
    },
};

export const handleCommand = async (input, context = {}) => {
    const [rawCommand, ...args] = input.trim().split(/\s+/);

    if (!rawCommand) return;

    const command = rawCommand.toLowerCase();

    if (command === "/clear") {
        console.clear();
        return;
    }

    if (command === "/exit") {
        return "EXIT";
    }

    const handler = commands[command];

    if (!handler) {
        errorMessage(`Unknown command: ${command}. Type /help for commands.`);
        return;
    }

    try {
        await handler(context, ...args);
    } catch (error) {
        errorMessage("Something went wrong while executing this command.");
        // Keep diagnostic details available during development.
        console.error(error);
    }
};
