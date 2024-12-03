document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active navigation link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Project gallery
    const projects = [
        { title: 'Project 1', description: 'Description of Project 1', image: 'project1.jpg' },
        { title: 'Project 2', description: 'Description of Project 2', image: 'project2.jpg' },
        { title: 'Project 3', description: 'Description of Project 3', image: 'project3.jpg' }
    ];

    const projectGallery = document.querySelector('.project-gallery');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-item');
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectGallery.appendChild(projectElement);
    });

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            alert('Message sent successfully!');
            contactForm.reset();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        return true;
    }
});

