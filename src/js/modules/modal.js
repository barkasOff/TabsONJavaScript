const   modal = (message) => {
    const   toggleModal = (modal, message = "") => {
        const   error = document.createElement('div');

        error.classList.add('modal__title');
        error.innerHTML = `${message}`;
        overlay.querySelector('.modal').append(error);
        modal.classList.toggle('hide');
    };
    const   overlay = document.querySelector('.overlay'),
            closeBtn = document.querySelector('.modal__close');

    toggleModal(overlay, message);
    closeBtn.addEventListener('click', () => toggleModal(overlay));
};

export default modal;