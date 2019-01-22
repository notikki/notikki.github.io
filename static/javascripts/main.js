document.addEventListener('DOMContentLoaded', () => {
    let menuBtn = document.getElementById('menu-btn');
    let popup = document.getElementById('popup');
    let menuPopup = document.getElementById('menu-popup');

    function actionShowPopup() {
        popup.classList.add('active');
        menuPopup.classList.add('active');
    }

    function removeShowPopup() {
        popup.classList.remove('active');
        popup.classList.remove('active');
    }

    menuBtn.addEventListener('click', actionShowPopup);
    popup.addEventListener('click', removeShowPopup);
}, false);