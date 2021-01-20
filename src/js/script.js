'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const   tabs = document.querySelectorAll('.seasons__photo');

    tabs.forEach((item, i) => {
        if (i != 0) {
            item.classList.add('hide');
        }
    });
});