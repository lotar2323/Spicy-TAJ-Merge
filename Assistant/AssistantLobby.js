{

    if (getVar(VARIABLE_WAITING_FOR_CHASTITY_KEY_RETURN, false)) {
        sendVirtualAssistantMessage('%SlaveName%');
        sendVirtualAssistantMessage('Last time you left I allowed you to unlock yourself and since then I haven\'t locked you back yet');
        sendVirtualAssistantMessage('Are you ready to be locked again?', 0);

        if (createYesOrNoQuestion()) {
            sendVirtualAssistantMessage('Great!');
            onChastityKeyReturn();
        } else {
            sendVirtualAssistantMessage('Don\'t abuse my trust %SlaveName%!');
        }
    }

    sendVirtualAssistantMessage(getWelcomeMessage(), false);

    let exitRequest = false;

    while (!exitRequest) {
        let lobbyAnswer = createInput("Session", "Chores", "Dungeon", "Settings", "Shop", "Fitness", "Exercise", "Study", "House Rules", "Pin Board", "Chastity", "End");
        while (true) {
            if (lobbyAnswer.isLike("session", "domme")) {
                lobbyAnswer.clearOptions();
                startSession();
                break;
            } else if (lobbyAnswer.isLike("chore", "clean", "dust", "wipe", "wash")) {
                lobbyAnswer.clearOptions();
                run("Chore/ChoreMenu.js");
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else if (lobbyAnswer.isLike("dungeon", "spanking", "spankzchoir", "selfbondage", "pain", "torture", "chamber", "punish")) {
                lobbyAnswer.clearOptions();
                // sendVirtualAssistantMessage("This is not supported yet!");
                run("Dungeon/PunishmentBase.js");
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else if (lobbyAnswer.isLike("setting", "adjust", "calibrate", "setup")) {
                lobbyAnswer.clearOptions();
                run('Assistant/Settings/Settings.js');
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else if (lobbyAnswer.isLike("shop", "buy", "purchase", "spent", "gold", "store")) {
                sendVirtualAssistantMessage("This is not supported yet!");
                break;
            } else if (lobbyAnswer.isLike("fitness", "health")) {
                lobbyAnswer.clearOptions();
                run("Exercise/ExerciseBase.js");
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else if (lobbyAnswer.isLike("report", "exercise")) {
                lobbyAnswer.clearOptions();
                run("Exercise/reportexercise.js");
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else if (lobbyAnswer.isLike("work", "study")) {
                lobbyAnswer.clearOptions();
                run("WorkMode/GNMWorkMode.js");
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else if (lobbyAnswer.isLike("rule", "house", "commands", "orders")) {
                lobbyAnswer.clearOptions();
                run("Rules/HouseRules.js");
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else if (lobbyAnswer.isLike("save", "end", "quit", "stop", "leave", "close", "finish")) {
                sendVirtualAssistantMessage(random("Bye", "Until next time", "See you", "I'm waiting for the next time", "Don't leave me alone to long", "Good bye", "Have a nice day", "I saved your process you can close the program"));
                lobbyAnswer.clearOptions();
                endSession();
                break;
            } else if (lobbyAnswer.isLike("pin", "board", "notices", "news")) {
                lobbyAnswer.clearOptions();
                run("Assistant/PinBoard.js");
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else if (lobbyAnswer.isLike("chastity")) {
                lobbyAnswer.clearOptions();
                run('Assistant/ChastityLobby.js');
                sendVirtualAssistantMessage(getWelcomeMessage(), false);
                break;
            } else {
                sendVirtualAssistantMessage("You have the following options %SlaveName%");
                sendVirtualAssistantMessage("Request a session with your Mistress");
                sendVirtualAssistantMessage("Request a chore");
                sendVirtualAssistantMessage("Enter the dungeon");
                sendVirtualAssistantMessage("Check settings");
                sendVirtualAssistantMessage("Enter the shop");
                sendVirtualAssistantMessage("Do some fitness");
                sendVirtualAssistantMessage("Report for exercise (you can only complete an exercise every 10 hours)");
                sendVirtualAssistantMessage("Work/Study mode");
                sendVirtualAssistantMessage("Request to view the rules ");
                sendVirtualAssistantMessage("View the pin-board");
                sendVirtualAssistantMessage("Or save and leave the program");
                break;
            }
        }

        lobbyAnswer.clearOptions();
    }
}

function startSession() {
    if (getDate(VARIABLE_LAST_TEASE_SESSION).clone().addHour(16).hasPassed()) {
        if (getVar(VARIABLE_PUNISHMENT_POINTS) > 400) {
            sendVirtualAssistantMessage("Session denied %SlaveName%");
            sendVirtualAssistantMessage("You have too many punishment points");
            sendVirtualAssistantMessage("Report for punishment");
            return;
        }

        if (getMood() == VERY_ANNOYED_MOOD) {
            sendVirtualAssistantMessage("Session denied %SlaveName%");
            sendVirtualAssistantMessage("Due to recent poor behaviour");

            if (getVar(VARIABLE_PUNISHMENT_POINTS) >= 200) {
                sendVirtualAssistantMessage("You should either report for chores or punishment");
            } else {
                sendVirtualAssistantMessage("I recommend reporting for chores");
            }

            return;
        }

        sendVirtualAssistantMessage(random("Launching", "Initiating", "Starting", "Establishing") + " session with Mistress");
        run("Session/StartSession.js");
        return;
    } else {
        sendVirtualAssistantMessage("%SlaveName% you had a session recently");
        if (getDate(VARIABLE_LAST_TEASE_SESSION).clone().addHour(14).hasPassed()) {
            sendVirtualAssistantMessage("You will be eligible for a session again soon");
        }
    }
}

function getWelcomeMessage() {
    const answers = [
        "Welcome!",
        "Welcome back!",
        "breezy welcome",
        "Yes?",
        "Yes?",
        "Yes?",
        "Yes?",
        "Yes?",
        "Yes?",
        "Hmm?",
        "Hmm?",
        "Hmm?",
        "Hmm?",
        "Hmm?",
        "Hmm?",
        "Yes?",
        "Hey",
        "Yes slave?",
        "Well slave?",
        "Yes %SlaveName%?",
        "What can I do for you?",
        "How can I help?",
        "What is your desire?",
        "You wish?",
        "What do you next?",
        "Let's start something..",
        "Let's go!",
        "What are you waiting for?",
        "Are you ready to choose?",
        "Hello can I help you?",
        "Is there anything else I can do for you?",
        "Enjoy your stay!",
        "Well if I can help you please ask.",
        "What is your concern?",
        "Oh you again.",
        "Happy to see you.",
        "Tell me what you want.",
        "Hey, You have gold. Take a look in the shop what you can buy."
    ];
    answers.push("Hey, You have " + getVar(VARIABLE_GOLD, 0) + " gold. Take a look in the shop what you can buy.");

    return answers[randomInteger(0, answers.length - 1)];
}
