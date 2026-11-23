
import open from "open";
import { portfolio } from "../data/portfolio.js";
import { theme, errorMessage, successMessage } from "../ui/theme.js";

const openProfile = async (name, url, { confirmOpen } = {}) => {
    if (!url) {
        errorMessage(`${name} profile has not been configured yet.`);
        return;
    }

    const shouldOpen = await confirmOpen?.(name);

    if (!shouldOpen) {
        console.log(theme.muted(`  ${name} profile was not opened.\n`));
        return;
    }

    try {
        await open(url);
        successMessage(`Opening ${name} profile...`);
    } catch {
        errorMessage(`Could not open the ${name} profile.`);
    }
};

export const openGithub = (context) =>
    openProfile("GitHub", portfolio.links.github, context);

export const openLinkedin = (context) =>
    openProfile("LinkedIn", portfolio.links.linkedin, context);

export const openX = (context) =>
    openProfile("X", portfolio.links.x, context);

export const openInstagram = (context) =>
    openProfile("Instagram", portfolio.links.instagram, context);

export const openLeetCode = (context) =>
    openProfile("LeetCode", portfolio.links.leetcode, context);

export const openCodeforces = (context) =>
    openProfile("Codeforces", portfolio.links.codeforces, context);

export const openAtCoder = (context) =>
    openProfile("AtCoder", portfolio.links.atcoder, context);

export const openResume = async () => {
    const url = portfolio.links.resume;

    if (!url) {
        errorMessage("Resume link has not been configured yet.");
        return;
    }

    try {
        await open(url);
        successMessage("Opening resume...");
    } catch {
        errorMessage("Could not open the resume.");
    }
};
