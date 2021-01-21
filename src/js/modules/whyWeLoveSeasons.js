const   whyWeLoveSeasons = () => {
    class CardsForSeasons {
        constructor(src, alt, ques, reas, parent, ...classes) {
            this.src = src;
            this.alt = alt;
            this.ques = ques;
            this.reas = reas;
            this.parent = document.querySelector(parent);
            this.classes = classes;
        }

        render() {
            const   card = document.createElement('div');

            if (this.classes.length == 0) {
                card.classList.add('whyWeLoveSeasons__season');
            } else {
                this.classes.forEach(item => card.classList.add(item));
            }
            card.innerHTML = `
                <div class="whyWeLoveSeasons__img">
                    <img src="${this.src}" alt="${this.alt}">
                </div>
                <h2 class="whyWeLoveSeasons__question">${this.ques}</h2>
                <div class="whyWeLoveSeasons__reason">${this.reas}/div>
            `;
            this.parent.append(card);
        }
    }
    new CardsForSeasons(
        'img/summer.jpg',
        'summer',
        'Почему мы любим лето?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo id dolorem enim facilis? Accusamus cum eos sint cumque deleniti modi, debitis eaque sunt nobis maxime. Amet praesentium cum in accusantium?',
        '.whyWeLoveSeasons__seasons').render();
    new CardsForSeasons(
        'img/autumn.jpg',
        'autumn',
        'Почему мы любим осень?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo id dolorem enim facilis? Accusamus cum eos sint cumque deleniti modi, debitis eaque sunt nobis maxime. Amet praesentium cum in accusantium?',
        '.whyWeLoveSeasons__seasons').render();
    new CardsForSeasons(
        'img/winter.jpg',
        'winter',
        'Почему мы любим зиму?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo id dolorem enim facilis? Accusamus cum eos sint cumque deleniti modi, debitis eaque sunt nobis maxime. Amet praesentium cum in accusantium?',
        '.whyWeLoveSeasons__seasons').render();
    new CardsForSeasons(
        'img/spring.jpg',
        'spring',
        'Почему мы любим весну?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo id dolorem enim facilis? Accusamus cum eos sint cumque deleniti modi, debitis eaque sunt nobis maxime. Amet praesentium cum in accusantium?',
        '.whyWeLoveSeasons__seasons').render();
};

export default whyWeLoveSeasons;