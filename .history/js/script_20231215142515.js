document.addEventListener('DOMContentLoaded', function() {
    const isMobile = window.innerWidth <= 610;

    // Initialize ScrollReveal for home-content
    ScrollReveal().reveal('.home-content', {
        delay: 200,
        opacity: 0,
        distance: '80px',
        duration: 1000,
        easing: 'ease',
        reset: true,
        mobile: !isMobile
    });

    // Initialize ScrollReveal for heading
    ScrollReveal().reveal('.heading', {
        delay: 200,
        opacity: 0,
        distance: '80px',
        duration: 1000,
        easing: 'ease',
        reset: true,
        mobile: !isMobile
    });

    // Your existing ScrollReveal configurations...

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
                if (message === "OK") {
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