
import { select } from "@inquirer/prompts";

export const returnToMenu = async () => {
    await select({
        message: "Continue exploring?",
        choices: [
            { name: "Return to main menu", value: "menu" }
        ]
    });
};
