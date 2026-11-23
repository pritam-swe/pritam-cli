
import boxen from "boxen";
import { theme } from "./theme.js";

export const renderHeader = (portfolio) => {
    const content = [
        theme.text.bold(portfolio.name),
        theme.primary(portfolio.title),
        "",
        theme.secondary(portfolio.introduction),
        "",
        theme.muted("Type /help to explore the portfolio."),
    ].join("\n");

    console.log(
        boxen(content, {
            padding: { top: 1, bottom: 1, left: 2, right: 2 },
            margin: { top: 1, bottom: 1 },
            borderStyle: "round",
            borderColor: "cyan",
        })
    );
};
