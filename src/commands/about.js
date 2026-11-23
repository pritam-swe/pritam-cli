// import chalk from "chalk";

// export const showAbout = () => {
//     console.log("\n" + chalk.bold.cyan("ABOUT ME"));
//     console.log("------------------------------");

//     console.log("Hi, I'm Pritam.");
//     console.log("I'm a software developer interested in backend engineering.");
//     console.log("I enjoy solving problems and building software.");

//     console.log("------------------------------\n");
// };


import { theme, sectionTitle } from "../ui/theme.js";

export const showAbout = () => {
    sectionTitle("About Me");

    console.log(theme.text.bold("Hi, I'm Pritam."));
    console.log();

    console.log(
        theme.text(
            "I'm a software developer interested in backend engineering, AI, and building useful software."
        )
    );

    console.log();

    console.log(
        theme.secondary(
            "I enjoy solving complex problems, understanding systems, and turning ideas into working software."
        )
    );

    console.log();
    console.log(theme.muted("Currently focused on backend engineering and AI."));
    console.log();
};
