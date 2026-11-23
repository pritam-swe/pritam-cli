import { portfolio } from "../data/portfolio.js";
import { detail, sectionTitle, theme } from "../ui/theme.js";

export const showSkills = () => {
    sectionTitle("Technical Skills");

    const categories = [
        ["Languages", portfolio.skills.languages],
        ["Backend", portfolio.skills.backend],
        ["Databases", portfolio.skills.databases],
        ["Tools", portfolio.skills.tools],
    ];

    categories.forEach(([name, skills]) => {
        console.log(detail(name, skills.join(" · "), theme.text));
    });

    console.log();
};
