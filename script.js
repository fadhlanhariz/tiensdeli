// Tidak ada JavaScript spesifik yang diperlukan untuk tata letak dasar ini.
// Anda dapat menambahkan interaksi atau animasi di sini jika diperlukan.

// Contoh sederhana untuk menambahkan kelas 'active' pada link navbar saat di-scroll
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const sections = document.querySelectorAll('section');

function setActiveLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current) && current) {
            link.classList.add('active');
        } else if (!current && link.getAttribute('href') === '#') {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveLink);