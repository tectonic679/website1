window.addEventListener('load', function() {
    // Check if the screen size is small (indicating a mobile device)
    const isMobile = window.innerWidth <= 610;

    // Initialize ScrollReveal for home-content
    ScrollReveal().reveal('.home-content', {
        delay: 200,
        opacity: 0,
        distance: '80px',
        duration: 1000,
        easing: 'ease',
        reset: true,
        mobile: !isMobile // Disable on mobile if isMobile is true
    });

    // Initialize ScrollReveal for heading
    ScrollReveal().reveal('.heading', {
        delay: 200,
        opacity: 0,
        distance: '80px',
        duration: 1000,
        easing: 'ease',
        reset: true,
        mobile: !isMobile // Disable on mobile if isMobile is true
    });

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

    // Your existing ScrollReveal configurations...

    // Remove the global initialization of ScrollReveal at the bottom

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