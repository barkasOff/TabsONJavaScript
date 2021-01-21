import getDataJSON from './getDataJSON';
import modal from './modal';

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

    getDataJSON('http://localhost:3000/WhyWeLoveSeasons')
        .then(data => {
            data.forEach(({src, alt, ques, reas}) => {
                new CardsForSeasons(src, alt, ques, reas,
                    '.whyWeLoveSeasons__seasons').render();
            });
        })
        .catch(error => modal(error));
};

export default whyWeLoveSeasons;