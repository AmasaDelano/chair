// Author: Alex Leone
// 10 Jan 2022
// Converted to JavaScript from Python from a TI-84 program

(function () {

var chairKicks = 1;
var doorHits = 1;
var freeFromSpell = false;
var wordsGained = 0;

function scene1() {
    game.log("There is a chair in the middle of the room. It is holding all your attention. (Press Enter)");
    goToSceneAfterEnter(2);
}

function scene2() {
    game.log("What do you do?");
    goToSceneAfterEnter(3);
}

function scene3() {
    var menu = `1-Look away from the chair
2-Look through the chair
3-Kick the chair
4-`;

    if (wordsGained >= 1 && !freeFromSpell) {
        menu += "Speak to the chair";
    } else {
        menu += "Sit in chair"
    }

    game.log(menu);

    game.read(function (choice) {
        if (choice === "1") {
            if (freeFromSpell) {
                goToScene(9);
            } else {
                goToScene(4);
            }
        } else if (choice === "2") {
            goToScene(5);
        } else if (choice === "3") {
            if (chairKicks >= 3) {
                goToScene(7);
            } else {
                goToScene(6);
            }
        } else if (choice === "4") {
            if (freeFromSpell) {
                goToScene(23);
            } else {
                goToScene(8);
            }
        } else {
            goToScene(3);
        }
    });
}


function scene4() {
    game.log("You can't. The chair is holding all of your attention");
    goToSceneAfterEnter(3);
}


function scene5() {
    game.log("You don't have X-ray vision.");
    game.read(function () {
        game.log("What do you really do?");
        goToSceneAfterEnter(3);
    });
}

function scene6() {
    if (!freeFromSpell) {
        game.log("The chair does not move. It shakes.");
        chairKicks += 1;
    } else {
        game.log("The chair moves.");
    }

    goToSceneAfterEnter(2);
}


function scene7() {
    game.log("The chair moves across the floor. You are free from its spell.");
    goToSceneAfterEnter(9);
}


function scene8() {
    if (wordsGained >= 2) {
        goToScene(22);
    } else if (wordsGained >= 1) {
        game.log("You cannot speak. The chair is holding all of your attention.");
        goToSceneAfterEnter(3);
    } else {
        game.log("You cannot move.");
        goToSceneAfterEnter(3);
    }
}


function scene9() {
    game.log("There is, in the room: a door, a chair, and a hole. What do you do?");
    chairKicks = 1;
    freeFromSpell = false;
    goToSceneAfterEnter(10);
}


function scene10() {
    game.log(
`1-Look at the door
2-Look at the chair
3-Look at the hole`
);
    
    game.read(function (choice) {
        if (choice === "1") {
            goToScene(12);
        } else if (choice === "2") {
            goToScene(11);
        } else if (choice === "3") {
            goToScene(17);
        } else {
            goToScene(10);
        }
    });
}


function scene11() {
    game.log("The chair is holding all of your attention.");
    goToSceneAfterEnter(2);
}


function scene12() {
    game.log("The door is wood and really big. It scares you.");
    goToSceneAfterEnter(13);
}


function scene13() {
    game.log("What do you do?");
    goToSceneAfterEnter(14);
}


function scene14() {
    game.log(
`1-Hit the door
2-Look away from the door
3-Scare the door`);

    game.read(function (choice) {
        if (choice === "1") {
            if (doorHits >= 5) {
                if (doorHits === 5) {
                    goToScene(27);
                } else {
                    goToScene(28);
                }
            } else {
                goToScene(15);
            }
        } else if (choice === "2") {
            goToScene(9);
        } else if (choice === "3") {
            goToScene(16);
        } else {
            goToScene(14);
        }
    });
}


function scene15() {
    game.log("You hit your hand on the door. Your hand hurts.");
    doorHits += 1;
    goToSceneAfterEnter(13);
}


function scene27() {
    game.log("You break your hand on the hard wood door.");
    doorHits += 1;
    goToSceneAfterEnter(13);
}


function scene28() {
    game.log("You can't move your hand. It's broken.");
    goToSceneAfterEnter(13);
}


function scene16() {
    if (wordsGained < 1) {
        game.log("You say BOO. The door is unaffected by your tactics.");

        goToSceneAfterEnter(13);
    } else {
        game.log("What do you say to the door? (Type your answer.)");

        game.read(function(answer) {
            if (answer !== "OOB") {
                game.log("No good.");
                goToSceneAfterEnter(13);
            } else {
                game.log("The door trembles, and for a brief moment, a single word appears engraved on the door:");
                game.read(function () {
                    game.log("EERF");

                    if (wordsGained < 2) {
                        wordsGained = 2;
                    }

                    goToSceneAfterEnter(13);
                });
            }
        });
    }
}


function scene17() {
    game.log("The hole is black. You cannot see the back of it.");
    goToSceneAfterEnter(18);
}


function scene18() {
    game.log(
`1-Blow into the hole
2-Scare the hole
3-Look into hole
4-Look away from the hole`);

    game.read(function(choice) {
        if (choice === "1") {
            goToScene(19);
        } else if (choice === "2") {
            goToScene(20);
        } else if (choice === "3") {
            goToScene(21);
        } else if (choice === "4") {
            goToScene(9);
        } else {
            goToScene(18);
        }
    });
}


function scene19() {
    game.log("Your breath comes back at you. Phew. Take a mint.");
    goToSceneAfterEnter(18);
}


function scene20() {
    game.log("You say BOO. Out of the inky blackness, you hear a single word emerge...");

    game.read(function () {
        game.log("OOB.");
    
        if (wordsGained < 1) {
            wordsGained = 1;
        }
        
        goToSceneAfterEnter(18);
    });
}


function scene21() {
    game.log("It is very dark in there.");
    goToSceneAfterEnter(18);
}


function scene22() {
    game.log("You can speak. What do you want to say to the chair? (Type your answer.)");

    game.read(function (answer) {
        if (answer !== "EERF") {
            game.log("No good.");
            goToSceneAfterEnter(2);
        } else {
            game.log("You are free from the spell.");
            freeFromSpell = true;
            goToSceneAfterEnter(2);
        }
    });
}


function scene30() {
    game.log("The ceiling falls in on you and you are transported to another realm.");
    game.read(function () {
        game.log("TO BE CONTINUED...");
        game.read(function () {
            return;
        });
    });
}

function scene23() {
    game.log("You are sitting in the chair, feeling either like a king or a jack-o-lantern.");
    chairKicks = 1;
    goToSceneAfterEnter(24);
}


function scene24() {
    game.log("What to do here?");
    game.log(
`1-Get up
2-Look up
3-Talk to yourself`);

    game.read(function (choice) {
        if (choice === "1") {
            goToScene(2);
        } else if (choice === "2") {
            goToScene(26);
        } else if (choice === "3") {
            goToScene(25);
        } else {
            goToScene(24);
        }
    });
}


function scene25() {
    if (wordsGained < 3) {
        game.log("You are crazy...");
        goToSceneAfterEnter(24);
    } else {
        game.log("What do you want to say? (Type your answer.)");

        game.read(function (answer) {
            if (answer !== "UP") {
                game.log("You are crazy...");
                goToSceneAfterEnter(24);
            } else {
                goToScene(30);
            }
        });
    }
}


function scene26() {
    game.log("You see a single word written on the ceiling:");
    game.read(function () {

        game.log("PU");
        
        if (wordsGained < 3) {
            wordsGained = 3;
        }
        
        goToSceneAfterEnter(24);
    });
}

function getSceneById(sceneName) {
    var scenes = {
        1: scene1,
        2: scene2,
        3: scene3,
        4: scene4,
        5: scene5,
        6: scene6,
        7: scene7,
        8: scene8,
        9: scene9,
        10: scene10,
        11: scene11,
        12: scene12,
        13: scene13,
        14: scene14,
        15: scene15,
        27: scene27,
        28: scene28,
        16: scene16,
        17: scene17,
        18: scene18,
        19: scene19,
        20: scene20,
        21: scene21,
        22: scene22,
        30: scene30,
        23: scene23,
        24: scene24,
        25: scene25,
        26: scene26,
    };
    
    var scene = scenes[sceneName]
    return scene;
}

var nextScene = 1;

var game = html5console.init("game", {
    allowEmptyInput: true,
    defaultInputHandler: function () {
        goToScene(nextScene);
    }
});

game.log("~~~ CHAIR ~~~<br>a game by Alex Leone<br>~~~~~~~~~~~~~");

function goToSceneAfterEnter(sceneId) {
    game.read(function () {
        goToScene(sceneId);
    });
}

function goToScene(sceneId) {
    var scene = getSceneById(sceneId);
    var result = scene();

    if (typeof(result) === "number") {
        nextScene = result;
    }
}

goToScene(nextScene);

}());