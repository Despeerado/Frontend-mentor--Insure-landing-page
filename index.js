var ready = (callback) => {
	if (document.readyState != "loading") callback()
	else document.addEventListener("DOMContentLoaded", callback)
}

ready(() => {
	let mobileMenu = document.getElementById('navbar_mobile')
	let hamburgerMenu = document.getElementsByClassName('hs–collapse-toggle')[0];

	document.addEventListener('click', () => {
		if (mobileMenu.classList.contains('hidden')) {
			mobileMenu.classList.remove('hidden')
		} else {
			mobileMenu.classList.add('hidden')
		}
	})
})