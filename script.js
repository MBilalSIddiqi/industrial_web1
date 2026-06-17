document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Industrial Strobe Effect on Hover (Optional Brutalist touch)
    const industrialBtns = document.querySelectorAll('.btn-industrial');
    industrialBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.outline = '4px solid var(--charcoal)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.outline = 'none';
        });
    });

    // Simple Form Submission for Industrial Site
    const contactForm = document.getElementById('industrialContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'TRANSMITTING DATA...';
            btn.style.backgroundColor = '#FFD600';
            btn.style.color = '#212121';
            btn.disabled = true;

            setTimeout(() => {
                alert('DATA SECURELY LOGGED. INQUIRY COMPLETE.');
                contactForm.reset();
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
                btn.disabled = false;
            }, 1500);
        });
    }
});
