const app = {
    board: document.getElementsByClassName('board')[0],
    player: document.getElementById('player'),
    inputBx: document.querySelector('.inputBx'),
    options: [],
    init: () => {
        app.eventListeners();
    },

    eventListeners() {
        let addBtn = document.querySelector('.inputBx__btn--add');
        addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            app.resetBx();
            app.options = [];
            let inputs = document.querySelectorAll('.inputBx__option');
            inputs = [...inputs].filter(input => input.value.length > 0);
            // console.log(inputs)
            if(inputs.length > 1){
                let throwBx = document.querySelector('.throw-inputBx');
                // console.log(throwBx);
                if(throwBx === null){
                    app.displayThrowBtn();
                    let formButton = document.querySelector('.throw-button');
                    if (formButton !== null) {
                        formButton.addEventListener('click', (e) => {
                            e.preventDefault();
                            app.resetDice();
                            app.pick();
                        });
                    }
                }
                app.getOptions(inputs);
            }
            console.log(app.board);
        })


        let addOptionBtn = document.querySelector('.inputBx__btn--plus');
        addOptionBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('click')
            app.addOption();
        });
    },

    addOption(){
        let inputBx = document.querySelector('.inputBx');
        let optionLength = document.querySelectorAll('.inputBx__option').length;
        let count = optionLength + 1;
        console.log(optionLength, count)
        let inputDiv = document.createElement('div');
        inputDiv.classList.add('inputBx__input');

        let label = document.createElement('label');
        label.classList.add('inputBx__label');
        label.setAttribute('for', "option");
        label.textContent = `Choix ${count} :`;

        let input = document.createElement('input');
        input.classList.add('inputBx__option');
        input.type = 'text';
        input.name = `${count}`;
        
        inputDiv.appendChild(label);
        inputDiv.appendChild(input);
        inputBx.lastChild.after(inputDiv);
    },

    getOptions(targets) {
        for (let target of targets) {
            let option = {
                id: target.name,
                value: target.value,
                dice: null,
            }
            app.options.push(option);
        }
        app.displayOptions()
    },

    displayOptions() {
        for (let option of app.options) {
            let div = document.createElement('div');
            div.classList.add('optionBx');
            div.setAttribute('id', `option_${option.id}`);
            let title = document.createElement("p");
            title.textContent = option.value;
            title.classList.add('optionBx__title');
            div.appendChild(title);
            app.board.appendChild(div);
        }
    },

    displayThrowBtn() {
        let div = document.createElement('div');
        div.classList.add('throw-inputBx');
        let input = document.createElement('input');
        input.classList.add('throw-button');
        input.value = 'Lancer';
        input.type = 'submit';
        div.appendChild(input);
        document.querySelector('.buttonBx').after(div);
    },

    pick(){
        for (let option of app.options) {
            let randomInt = app.getRandomInt(1, 7);
            let isUnique = false;
            while (isUnique === false) {
                randomInt = app.getRandomInt(1, 7);
                isUnique = app.options.every(option => option.dice !== randomInt)
            }
            option.dice = randomInt;
            app.makeDice(option.id, option.dice);
        }
        console.log(app.options);
        let winner = app.options.reduce((prev, current) => prev.dice > current.dice ? prev : current);
        app.win(winner)
    },

    makeDice(count, randomInt) {
        let div = document.createElement('div');
        div.setAttribute('id', count);
        div.classList.add('dice');
        app.switchDice(div, randomInt);
        let parentDiv = document.getElementById(`option_${count}`);
        parentDiv.append(div);
        return randomInt;
    },

    getNewPosition(n) {
        return ((n - 1) * 100) * -1;
    },

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
    
    switchDice(div, int) {
        let newPos = app.getNewPosition(int);
        div.style.backgroundPositionX = `${newPos}px`;
    },

    win(winner){
        console.log("FTW", winner);
        let div = document.getElementById(`option_${winner.id}`);
        let title = div.childNodes[0];
        let message = document.createElement('h3');
        message.setAttribute('id', "message");
        message.textContent = `Le hasard a parlé ! C'est l'option ${winner.id} qui l'emporte !`;
        title.after(message);
    },

    resetBx(){
        let childs = document.querySelectorAll('.optionBx');
        childs.forEach(child => {
            child.remove();
        });
        app.options =[];
        let message = document.querySelector('#message');
        if(message){
            message.remove();
        }
    },

    resetDice() {
        let dices = document.querySelectorAll('.dice');
        dices.forEach(dice => {
            dice.remove();
        })
        let message = document.querySelector('#message');
        if(message){
            message.remove();
        }
    },
};

document.addEventListener('DOMContentLoaded', app.init);