document.addEventListener('DOMContentLoaded', function() {
    // Function to check if the screen width is greater than 610 pixels
    function isDesktop() {
        return window.innerWidth > 610;
    }

    // Initialize ScrollReveal for home-content if it's a desktop
    if (isDesktop()) {
        ScrollReveal().reveal('.home-content', {
            delay: 200,
            opacity: 0,
            distance: '80px',
            duration: 1000,
            easing: 'ease',
            reset: true
        });

        // Initialize ScrollReveal for heading if it's a desktop
        ScrollReveal().reveal('.heading', {
            delay: 200,
            opacity: 0,
            distance: '80px',
            duration: 1000,
            easing: 'ease',
            reset: true
        });

        ScrollReveal({
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    }

    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelector('header nav');

    window.onscroll = () => {
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                let activeLink = navLinks.querySelector(`a[href*=${id}]`);

                navLinks.querySelectorAll('a').forEach(link => {
                    link.classList.remove('active');
                });

                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    };

    // Initialize ScrollReveal with options
    const typed = new Typed('.multiple-text', {
        strings: ['Aspiring Developer', 'Gamer', 'Student', 'Athlete'],
        typeSpeed: 100,
        backSpeed: 100,
        backdelay: 1000,
        loop: true
    });

    const form = document.querySelector('form');
    const fullName = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const mess = document.getElementById("message");

    function sendEmail() {
        const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}<br>`;

        Email.send({
            SecureToken: "e108a27e-9ccb-4823-bbc1-81e52d3d3f0a",
            To: "contactisindu@gmail.com",
            From: "contactisindu@gmail.com",
            Subject: subject.value,
            Body: bodyMessage
        }).then(
            message => {
                if (message == "OK") {
                    Swal.fire({
                        title: "Success!",
                        text: "Message sent successfully!",
                        icon: "success"
                    });
                }
            }
        );
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        sendEmail();
    });
});