class Form {

    constructor() {
        this.input = createInput("Name");
        this.email = createInput("email");
        this.mobile = createInput("Mobile no.")
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "SURVEY OF CORONA VIRUS");
        this.question1 = createElement('h3', "Q1. are you found any difficulty in breathing?");
        this.radio = createRadio('h3');
        this.radio.option('yes');
        this.radio.option('No');
        this.question2 = createElement('h3', "is your body temperature is increased?");
        this.radio1 = createRadio('h3');
        this.radio1.option('yes');
        this.radio1.option('No');
        this.question3 = createElement('h3', "Q3.have you symptoms of flu?");
        this.radio2 = createRadio('h3');
        this.radio2.option('yes');
        this.radio2.option('No');
    }


    display() {
        this.input.position(670, 255)
        this.email.position(670, 165)
        this.mobile.position(670,80)
        this.button.position(700, 700)
        this.greeting.position(600, 105)
        this.text.position(600, 5)
        this.question1.position(500, 360)
        this.radio.position(600, 420)
        this.question2.position(500, 450)
        this.radio1.position(600, 510)
        this.question3.position(500, 540)
        this.radio2.position(600, 600)

        this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            User.mobile = this.mobile.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
        });

    }
}