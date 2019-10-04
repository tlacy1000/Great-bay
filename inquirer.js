var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "list",
        name: "postBid",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        choices: ["POST", "BID", "EXIT"]
    }
])