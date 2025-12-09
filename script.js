$(document).ready(function() {
    // Mobile menu toggle
    $('.menu-toggle').click(function() {
        $('.nav-links').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-times');
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Form submission
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        const name = $(this).find('input[type="text"]').val();
        const email = $(this).find('input[type="email"]').val();
        const message = $(this).find('textarea').val();
        
        // Simple validation
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            $(this).trigger('reset');
            
            // Animation for button
            const btn = $(this).find('.btn');
            btn.html('<i class="fas fa-check"></i> Message Sent!');
            btn.css('background-color', '#2ecc71');
            
            setTimeout(() => {
                btn.html('Send Message');
                btn.css('background-color', '#e74c3c');
            }, 3000);
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Print resume functionality
    $('#printResume').click(function() {
        window.print();
    });

    // Skill bars animation
    function animateSkillBars() {
        $('.skill-level').each(function() {
            const width = $(this).css('width');
            $(this).css('width', '0');
            setTimeout(() => {
                $(this).animate({
                    width: width
                }, 1000);
            }, 500);
        });
    }

    // Animate skill bars when resume page is loaded
    if ($('.resume-content').length) {
        animateSkillBars();
    }

    // Dark mode toggle (optional feature)
    const darkModeToggle = `
        <button id="darkModeToggle" class="btn" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
            <i class="fas fa-moon"></i>
        </button>
    `;
    $('body').append(darkModeToggle);

    $('#darkModeToggle').click(function() {
        $('body').toggleClass('dark-mode');
        const icon = $(this).find('i');
        icon.toggleClass('fa-moon fa-sun');
        
        if ($('body').hasClass('dark-mode')) {
            // Store preference
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        $('body').addClass('dark-mode');
        $('#darkModeToggle i').removeClass('fa-moon').addClass('fa-sun');
    }

    // Add dark mode CSS dynamically
    const darkModeCSS = `
        <style>
            body.dark-mode {
                background-color: #121212;
                color: #e0e0e0;
            }
            
            body.dark-mode .detail-item,
            body.dark-mode .hobby,
            body.dark-mode #contactForm input,
            body.dark-mode #contactForm textarea,
            body.dark-mode .certifications li,
            body.dark-mode .project {
                background-color: #1e1e1e;
                color: #e0e0e0;
            }
            
            body.dark-mode h2 {
                color: #e0e0e0;
            }
        </style>
    `;
    $('head').append(darkModeCSS);
});