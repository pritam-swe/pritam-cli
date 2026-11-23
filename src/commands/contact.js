
import { portfolio } from "../data/portfolio.js";
import { detail, sectionTitle, theme } from "../ui/theme.js";

export const showContact = () => {
    sectionTitle("Connect");

    const { links } = portfolio;
    const contactDetails = [
        ["GitHub", links.github],
        ["LinkedIn", links.linkedin],
        ["X", links.x],
        ["Instagram", links.instagram],
        ["LeetCode", links.leetcode],
        ["Codeforces", links.codeforces],
        ["AtCoder", links.atcoder],
        ["Email", links.email],
    ];

    contactDetails.forEach(([name, value]) => {
        console.log(detail(name, value, theme.primary));
    });

    console.log();
};

