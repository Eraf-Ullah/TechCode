document.addEventListener('DOMContentLoaded', function () {
    // Contact Form Validation
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.querySelector('#inputName').value.trim();
            const email = document.querySelector('#inputEmail').value.trim();
            const message = document.querySelector('#inputMessage').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Simulate form submission
            alert('Message sent successfully');
            contactForm.reset();
        });
    }

    // Newsletter Subscription
    const newsletterForm = document.querySelector('#newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const email = document.querySelector('#newsletterEmail').value.trim();

            if (!email) {
                alert('Please enter your email');
                return;
            }

            try {
                const response = await fetch('http://localhost:5000/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });

                if (!response.ok) {
                    throw new Error('Subscription failed');
                }

                alert('Subscribed successfully');
                newsletterForm.reset();
            } catch (error) {
                alert('Subscription failed');
            }
        });
    }
});
