/* JavaScript Document 

TemplateMo 603 CSOXPOS

https://templatemo.com/tm-603-csoxpos

*/

// ============ NAVBAR SCROLL EFFECT ============
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
	if (window.scrollY > 50) {
		navbar.classList.add('scrolled');
	} else {
		navbar.classList.remove('scrolled');
	}
});

// ============ MOBILE MENU TOGGLE ============
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
	navLinks.classList.toggle('active');
	menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links li a').forEach(link => {
	link.addEventListener('click', () => {
		navLinks.classList.remove('active');
		menuToggle.classList.remove('active');
	});
});

// ============ SMOOTH SCROLL FOR ANCHOR LINKS ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const targetId = this.getAttribute('href');
		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
});

// ============ ACTIVE NAV LINK ON SCROLL ============
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
	let current = '';
	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (window.scrollY >= sectionTop - 200) {
			current = section.getAttribute('id');
		}
	});

	navItems.forEach(item => {
		item.classList.remove('active');
		if (item.getAttribute('href') === `#${current}`) {
			item.classList.add('active');
		}
	});
});

// ============ STAT COUNTER ANIMATION ============
function animateStats() {
	const statValues = document.querySelectorAll('.stat-value[data-target]');
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const el = entry.target;
				const target = parseInt(el.getAttribute('data-target'));
				let current = 0;
				const increment = target / 50;
				const timer = setInterval(() => {
					current += increment;
					if (current >= target) {
						current = target;
						clearInterval(timer);
					}
					el.textContent = Math.floor(current);
				}, 30);
				observer.unobserve(el);
			}
		});
	}, { threshold: 0.5 });

	statValues.forEach(stat => observer.observe(stat));
}

window.addEventListener('DOMContentLoaded', () => {
	animateStats();
});
// ============ FAQ TOGGLE ============
function toggleFaq(element) {
	const faqItem = element.parentElement;
	const isActive = faqItem.classList.contains('active');

	document.querySelectorAll('.faq-item.active').forEach(item => {
		item.classList.remove('active');
	});

	if (!isActive) {
		faqItem.classList.add('active');
	}
}

// ============ BACK TO TOP BUTTON ============
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		backToTopBtn.classList.add('show');
	} else {
		backToTopBtn.classList.remove('show');
	}
});

backToTopBtn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});
