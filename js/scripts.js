jQuery(document).ready(function() {

	// ---- Helpers ----------------------------------------------------------
	const select = (el, all = false) => {
		el = el.trim()
		if (all) {
			return [...document.querySelectorAll(el)]
		} else {
			return document.querySelector(el)
		}
	}

	// Easy event listener function
	const on = (type, el, listener, all = false) => {
		let selectEl = select(el, all)
		if (selectEl) {
			if (all) {
				selectEl.forEach(e => e.addEventListener(type, listener))
			} else {
				selectEl.addEventListener(type, listener)
			}
		}
	}

	// Easy on scroll event listener
	const onscroll = (el, listener) => {
		el.addEventListener('scroll', listener)
	}

	// ---- Navbar links active state on scroll -------------------------------
	let navbarlinks = select('#navbar .scrollto', true)
	const navbarlinksActive = () => {
		let position = window.scrollY + 200
		let atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
		navbarlinks.forEach((navbarlink, index) => {
			if (!navbarlink.hash) return
			let section = select(navbarlink.hash)
			if (!section) return
			let isLastLink = index === navbarlinks.length - 1
			let isActive = atBottom ? isLastLink : (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight))
			if (isActive) {
				navbarlink.classList.add('active')
			} else {
				navbarlink.classList.remove('active')
			}
		})
	}
	window.addEventListener('load', navbarlinksActive)
	onscroll(document, navbarlinksActive)

	// ---- Mobile nav ---------------------------------------------------------
	// Toggle button opens/closes the off-canvas sidebar
	on('click', '.mobile-nav-toggle', function(e) {
		select('body').classList.toggle('mobile-nav-active')
		this.classList.toggle('bi-list')
		this.classList.toggle('bi-x')
	})

	// Clicking the backdrop closes it
	on('click', '.mobile-nav-backdrop', function(e) {
		select('body').classList.remove('mobile-nav-active')
		let toggle = select('.mobile-nav-toggle')
		toggle.classList.add('bi-list')
		toggle.classList.remove('bi-x')
	})

	// ---- Dark mode toggle ---------------------------------------------------
	let themeIcon = select('#theme-icon')
	let themeLabel = select('#theme-label')
	const themeLabelText = () => {
		let isDark = document.documentElement.classList.contains('dark-mode')
		return window.i18n ? window.i18n.t(isDark ? 'theme.light' : 'theme.dark') : (isDark ? 'Mode clair' : 'Mode sombre')
	}
	const refreshThemeUI = () => {
		let isDark = document.documentElement.classList.contains('dark-mode')
		if (themeIcon) themeIcon.className = isDark ? 'bx bx-sun' : 'bx bx-moon'
		if (themeLabel) themeLabel.textContent = themeLabelText()
	}
	refreshThemeUI()
	on('click', '#theme-toggle', function(e) {
		let isDark = document.documentElement.classList.toggle('dark-mode')
		localStorage.setItem('site-theme', isDark ? 'dark' : 'light')
		refreshThemeUI()
	})
	document.addEventListener('i18n:change', refreshThemeUI)

	// ---- Scroll to top button appear -----------------------------------------
	$(document).scroll(function() {
		var scrollDistance = $(this).scrollTop();
		if (scrollDistance > 100) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});

	// ---- Scroll to the URL hash on load ---------------------------------------
	window.addEventListener('load', () => {
		if (window.location.hash) {
			if (select(window.location.hash)) {
				scrollto(window.location.hash)
			}
		}
	});

	// ---- Skills progress bars animate in on scroll -----------------------------
	let skilsContent = select('.skills-content');
	if (skilsContent) {
		new Waypoint({
			element: skilsContent,
			offset: '80%',
			handler: function(direction) {
				let progress = select('.progress .progress-bar', true);
				progress.forEach((el) => {
					el.style.width = el.getAttribute('aria-valuenow') + '%'
				});
			}
		})
	}

	// ---- Typed.js hero role animation ------------------------------------------
	const typed = select('.typed');
	const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
	let typedInstance = null
	const initTyped = () => {
		if (!typed) return
		if (typedInstance) {
			typedInstance.destroy()
			typedInstance = null
		}
		let items = typed.getAttribute('data-typed-items').split(',')
		if (prefersReducedMotion) {
			typed.textContent = items[0].trim()
			return
		}
		typedInstance = new Typed('.typed', {
			strings: items,
			loop: true,
			typeSpeed: 100,
			backSpeed: 50,
			backDelay: 2000
		});
	}
	initTyped()
	document.addEventListener('i18n:change', initTyped)
});

document.addEventListener("DOMContentLoaded", function() {

	// Hide the preloader once the DOM is ready
	document.querySelector("#preloader").style.display = "none";

	// ---- Contact form submission (EmailJS) -------------------------------------
	document.getElementById('contactform').addEventListener('submit', function(event) {
		event.preventDefault();
		$("#btnload").prop("disabled", true);
		$("#btnload").html(
			'<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...'
		);
		// generate a five digit number for the contact_number variable
		this.contact_number.value = Math.random() * 100000 | 0;
		// these IDs from the previous steps
		emailjs.sendForm('service_z9yfyma', 'template_aza6wwj', this)
			.then(function() {
				console.log('SUCCESS!');
				alert("Message sent. Thank you!");
				location.reload();
			}, function(error) {
				console.log('FAILED...', error);
				alert(error);
				location.reload();
			});
	});

	// ---- Scroll reveal animations ------------------------------------------------
	AOS.init({
		duration: 1000,
		easing: 'ease-in-out',
		once: true,
		mirror: false,
		disable: 'mobile'
	});
});
