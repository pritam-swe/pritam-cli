import { portfolio } from "../data/portfolio.js";
import { sectionTitle, theme } from "../ui/theme.js";

export const showEducation = () => {
    sectionTitle("Education");

    portfolio.education.forEach(({ degree, institution }, index) => {
        console.log(theme.text.bold(degree));
        console.log(theme.secondary(`  ${institution}`));

        if (index < portfolio.education.length - 1) console.log();
    });

    console.log();
};
