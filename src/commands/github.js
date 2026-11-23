import chalk from "chalk";
import { exec } from "node:child_process";

export const showGithub = () => {
    const url = "https://github.com/pritam-swe";

    console.log(chalk.cyan("\nGitHub Profile"));
    console.log(url);

    let command;

    if (process.platform === "darwin") {
        command = "open";
    } else if (process.platform === "win32") {
        command = "start";
    } else {
        command = "xdg-open";
    }

    exec(`${command} ${url}`);
};