#!/usr/bin/env node

import {
    createInterface,
} from "node:readline/promises";

import {
    stdin,
    stdout,
} from "node:process";

import chalk from "chalk";

import { portfolio } from "./data/portfolio.js";
import { renderHeader } from "./ui/display.js";
import { handleCommand } from "./cli/command-handler.js";

async function main() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
    });

    console.clear();
    renderHeader(portfolio);

    console.log(chalk.gray("  Start with /about, /projects, or /help.\n"));

    const confirmOpen = async (profileName) => {
        const answer = await rl.question(
            chalk.gray(`Open ${profileName} in your browser? `) +
            chalk.hex("#A3E635")("[Y/n] ")
        );

        return !["n", "no"].includes(answer.trim().toLowerCase());
    };

    rl.on("SIGINT", () => {
        console.log(chalk.gray("\n\nSession terminated."));
        rl.close();
        process.exit(0);
    });

    try {
        while (true) {
            const input = await rl.question(
                chalk.gray("visitor@pritam.cli") +
                chalk.hex("#A3E635")(" ❯ ")
            );

            if (!input.trim()) continue;

            const result = await handleCommand(input, { confirmOpen });

            if (result === "EXIT") break;
        }
    } finally {
        rl.close();
    }

    console.log(chalk.cyan("\nThanks for visiting!\n"));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
