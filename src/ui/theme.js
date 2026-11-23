
import chalk from "chalk";

export const theme = {
    primary: chalk.hex("#A3E635"),
    secondary: chalk.hex("#A1A1AA"),
    text: chalk.hex("#E5E7EB"),
    muted: chalk.hex("#71717A"),
    error: chalk.hex("#FCA5A5"),
    success: chalk.hex("#86EFAC"),
    border: chalk.hex("#3F3F46"),
};

const divider = "─".repeat(48);

export const sectionTitle = (title) => {
    console.log();
    console.log(theme.primary.bold(title.toUpperCase()));
    console.log(theme.border(divider));
    console.log();
};

export const label = (text) => theme.muted(text.toUpperCase());

export const detail = (name, value, valueColor = theme.text) =>
    `${label(`${name.padEnd(10)} `)}${valueColor(value)}`;

export const errorMessage = (message) => {
    console.log();
    console.log(theme.error(`  ✕  ${message}`));
    console.log();
};

export const successMessage = (message) => {
    console.log();
    console.log(theme.success(`  ✓  ${message}`));
    console.log();
};
