const app = {
    board: document.getElementsByClassName('board')[0],
    player: document.getElementById('player'),

    init: () => {
        app.eventListeners();
    },

    eventListeners() {
        let formButton = document.querySelector('.throw-button');
        formButton.addEventListener('click', (e) => {
            e.preventDefault();
            app.reset();
            let input = parseInt(e.target.parentNode.childNodes[1].value);
            app.getInputValue(input);
        });
    },

    getInputValue(number) {
        let diceNumber = number;
        for (let dice = 0; dice < diceNumber; dice++) {
            app.makeDice();
        }
    },

    reset() {
        let dices = document.querySelectorAll('.dice');
        dices.forEach(dice => {
            dice.remove();
        })
    },

    makeDice() {
        let div = document.createElement('div');
        div.classList.add('dice');
        app.player.append(div);
        app.showDice(div);
    },

    showDice(div) {
        let randomInt = app.getRandomInt(1, 7);
        let newPos = app.getNewPosition(randomInt);
        div.style.backgroundPositionX = `${newPos}px`;
    },

    getNewPosition(n) {
        return ((n - 1) * 100) * -1;
    },

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
};

document.addEventListener('DOMContentLoaded', app.init);