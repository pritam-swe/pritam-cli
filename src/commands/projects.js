
import { portfolio } from "../data/portfolio.js";
import { theme, sectionTitle } from "../ui/theme.js";

export const showProjects = () => {
    sectionTitle("Selected Projects");

    portfolio.projects.forEach((project, index) => {
        console.log(
            theme.text.bold(`${String(index + 1).padStart(2, "0")}  ${project.name}`)
        );

        console.log(theme.secondary(`    ${project.description}`));

        if (project.website) {
            console.log(theme.muted(`    Website  ${project.website}`));
        }

        console.log(theme.primary(`    GitHub   ${project.github}`));

        if (index < portfolio.projects.length - 1) console.log();
    });

    console.log();
};
