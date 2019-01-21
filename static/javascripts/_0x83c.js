document.addEventListener('DOMContentLoaded', () => {
	let menuBtn = document.getElementById('menu-btn');
	let popupDashboard = document.getElementById('popup-dashboard');
	let  menuDashboard = document.getElementById('menu-dashboard');
	let btnPost = document.getElementById('btn-post');
	let menupopup = () => {
		popupDashboard.classList.add('active');
		menuDashboard.classList.add('show');
	}
	menuBtn.addEventListener('click', menupopup);

	let removeMenu = () => {
		popupDashboard.classList.remove('active');
		menuDashboard.classList.remove('show');
		
	}
	popupDashboard.addEventListener('click', removeMenu);
}, false);