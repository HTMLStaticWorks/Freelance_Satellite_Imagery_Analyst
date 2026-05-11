/**
 * MAIN JAVASCRIPT - SATELLITE INTELLIGENCE
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar-custom');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Dark Mode Toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            updateThemeIcon(isLight);
        });

        // Initialize Theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            updateThemeIcon(true);
        }
    }

    function updateThemeIcon(isLight) {
        const icon = themeToggle.querySelector('i');
        if (isLight) {
            icon.classList.replace('bi-moon-stars', 'bi-sun');
        } else {
            icon.classList.replace('bi-sun', 'bi-moon-stars');
        }
    }

    // 3. RTL Toggle
    const rtlToggle = document.getElementById('rtlToggle');
    if (rtlToggle) {
        rtlToggle.addEventListener('click', () => {
            const isRTL = document.documentElement.dir === 'rtl';
            if (isRTL) {
                document.documentElement.dir = 'ltr';
                document.getElementById('rtlLink')?.remove();
                localStorage.setItem('rtl', 'false');
            } else {
                document.documentElement.dir = 'rtl';
                const link = document.createElement('link');
                link.id = 'rtlLink';
                link.rel = 'stylesheet';
                link.href = 'assets/css/rtl.css';
                document.head.appendChild(link);
                localStorage.setItem('rtl', 'true');
            }
        });

        // Initialize RTL
        if (localStorage.getItem('rtl') === 'true') {
            document.documentElement.dir = 'rtl';
            const link = document.createElement('link');
            link.id = 'rtlLink';
            link.rel = 'stylesheet';
            link.href = 'assets/css/rtl.css';
            document.head.appendChild(link);
        }
    }

    // 4. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 6. Back to Top
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.remove('d-none');
                backToTop.classList.add('animate-fadeIn');
            } else {
                backToTop.classList.add('d-none');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
