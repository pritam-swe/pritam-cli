
import { portfolio } from "../data/portfolio.js";
import { detail, theme, sectionTitle } from "../ui/theme.js";

export const showIdentity = () => {
    sectionTitle("Identity");

    console.log(detail("Name", portfolio.name, theme.text.bold));
    console.log(detail("Role", portfolio.title, theme.secondary));
    console.log(detail("GitHub", portfolio.links.github, theme.primary));

    console.log();
};
