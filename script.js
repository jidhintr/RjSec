document.addEventListener('DOMContentLoaded', () => {

    // Alert Banner Close Functionality
    const alertBanner = document.getElementById('alert-banner');
    const closeAlertBtn = document.getElementById('close-alert');

    if (closeAlertBtn) {
        closeAlertBtn.addEventListener('click', () => {
            alertBanner.style.display = 'none';
        });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Multi-language Support
    const translations = {
        en: {
            nav_home: "Home",
            nav_services: "Services",
            nav_gallery: "Gallery",
            nav_reviews: "Reviews",
            nav_contact: "Contact",
            nav_quote: "Get a Quote",
            hero_title: "Protect What Matters Most",
            hero_subtitle: "India's trusted partner for advanced CCTV surveillance and security systems. 24/7 monitoring for homes and businesses.",
            hero_cta_quote: "Get Free Quote",
            hero_cta_services: "Explore Services",
            services_title: "Our Expertise",
            services_subtitle: "Comprehensive security solutions tailored to your needs.",
            service_cctv_title: "HD CCTV Systems",
            service_cctv_desc: "Crystal clear 4K and 1080p cameras with night vision and motion detection.",
            service_wireless_title: "IP & Wireless Cameras",
            service_wireless_desc: "Flexible wireless solutions that connect directly to your smartphone.",
            service_access_title: "Access Control",
            service_access_desc: "Biometric and card-based entry systems for offices and apartments.",
            service_remote_title: "Remote Monitoring",
            service_remote_desc: "Watch live feeds from anywhere in the world via our secure mobile app.",
            gallery_title: "Recent Installations",
            gallery_subtitle: "Follow us on social media to see our latest work across India.",
            reviews_title: "Client Testimonials",
            reviews_subtitle: "See what our satisfied customers have to say.",
            btn_write_review: "Write a Review",
            quote_title: "Get a Free Quote Today",
            quote_subtitle: "Fill out the form and our security expert will call you back within 24 hours with a customized plan.",
            benefit_survey: "Free Site Survey",
            benefit_warranty: "1 Year Warranty",
            benefit_support: "24/7 Support",
            btn_submit_request: "Submit Request",
            contact_title: "Contact Us",
            contact_subtitle: "Visit our showroom or contact us for support.",
            footer_tagline: "Securing India, one camera at a time.",
            footer_privacy: "Privacy Policy"
        },
        ml: {
            nav_home: "ഹോം",
            nav_services: "സേവനങ്ങൾ",
            nav_gallery: "ഗാലറി",
            nav_reviews: "അഭിപ്രായങ്ങൾ",
            nav_contact: "ബന്ധപ്പെടുക",
            nav_quote: "ക്വോട്ട് നേടുക",
            hero_title: "നിങ്ങളുടെ സുരക്ഷ ഞങ്ങളുടെ ഉറപ്പ്",
            hero_subtitle: "ഇന്ത്യയിലെ വിശ്വസ്തരായ സിസിടിവി സുരക്ഷാ പങ്കാളി. വീടുകൾക്കും സ്ഥാപനങ്ങൾക്കും 24/7 നിരീക്ഷണം.",
            hero_cta_quote: "സൗജന്യ ക്വോട്ട്",
            hero_cta_services: "സേവനങ്ങൾ കാണുക",
            services_title: "ഞങ്ങളുടെ സേവനങ്ങൾ",
            services_subtitle: "നിങ്ങളുടെ ആവശ്യങ്ങൾക്കനുസരിച്ചുള്ള സുരക്ഷാ സംവിധാനങ്ങൾ.",
            service_cctv_title: "എച്ച്.ഡി സിസിടിവി",
            service_cctv_desc: "രാത്രി കാഴ്ചയും ചലന തിരിച്ചറിയലുമുള്ള 4K, 1080p ക്യാമറകൾ.",
            service_wireless_title: "വയർലെസ്സ് ക്യാമറകൾ",
            service_wireless_desc: "നിങ്ങളുടെ ഫോണുമായി നേരിട്ട് ബന്ധിപ്പിക്കാവുന്ന വയർലെസ്സ് സംവിധാനങ്ങൾ.",
            service_access_title: "ആക്സസ് കണ്ട്രോൾ",
            service_access_desc: "ഓഫീസുകൾക്കും അപ്പാർട്ട്മെന്റുകൾക്കുമായി ബയോമെട്രിക് എൻട്രി സിസ്റ്റം.",
            service_remote_title: "റിമോട്ട് നിരീക്ഷണം",
            service_remote_desc: "ലോകത്തെവിടെ നിന്നും മൊബൈൽ ആപ്പ് വഴി തത്സമയം കാണാം.",
            gallery_title: "പുതിയ ഇൻസ്റ്റാളേഷനുകൾ",
            gallery_subtitle: "ഞങ്ങളുടെ ഏറ്റവും പുതിയ വർക്കുകൾ സോഷ്യൽ മീഡിയയിൽ കാണുക.",
            reviews_title: "ഉപഭോക്തൃ അഭിപ്രായങ്ങൾ",
            reviews_subtitle: "ഞങ്ങളുടെ സംതൃപ്തരായ ഉപഭോക്താക്കൾ പറയുന്നത് കേൾക്കൂ.",
            btn_write_review: "അഭിപ്രായം എഴുതുക",
            quote_title: "സൗജന്യ ക്വോട്ട് നേടൂ",
            quote_subtitle: "ഫോം പൂരിപ്പിക്കൂ, 24 മണിക്കൂറിനുള്ളിൽ ഞങ്ങളുടെ വിദഗ്ദ്ധർ നിങ്ങളെ വിളിക്കും.",
            benefit_survey: "സൗജന്യ സൈറ്റ് സന്ദർശനം",
            benefit_warranty: "1 വർഷത്തെ വാറന്റി",
            benefit_support: "24/7 സഹായം",
            btn_submit_request: "അപേക്ഷ സമർപ്പിക്കുക",
            contact_title: "ബന്ധപ്പെടുക",
            contact_subtitle: "ഞങ്ങളുടെ ഷോറൂം സന്ദർശിക്കുക അല്ലെങ്കിൽ വിളിക്കുക.",
            footer_tagline: "ഇന്ത്യയെ സുരക്ഷിതമാക്കുന്നു, ഓരോ ക്യാമറയിലൂടെയും.",
            footer_privacy: "സ്വകാര്യതാ നയം"
        }
    };

    const langToggle = document.getElementById('language-toggle');
    let currentLang = 'en';

    function changeLanguage(lang) {
        currentLang = lang;
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update Toggle UI
        if (lang === 'en') {
            document.getElementById('lang-en').classList.add('active');
            document.getElementById('lang-ml').classList.remove('active');
        } else {
            document.getElementById('lang-en').classList.remove('active');
            document.getElementById('lang-ml').classList.add('active');
        }
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'ml' : 'en';
            changeLanguage(newLang);
        });
    }

    // Particle System (Glitter & Gravity)
    class ParticleSystem {
        constructor() {
            this.canvas = document.getElementById('particle-canvas');
            this.ctx = this.canvas.getContext('2d');
            this.particles = [];
            this.resize();

            // Configuration
            this.particleCount = 150;
            this.baseSpeed = 0.5;
            this.scrollSpeed = 0;
            this.lastScrollY = window.scrollY;

            // Mouse State
            this.mouse = { x: null, y: null, radius: 150 };

            this.init();
            this.animate();

            window.addEventListener('resize', () => this.resize());
            window.addEventListener('scroll', () => this.handleScroll());
            window.addEventListener('mousemove', (e) => {
                this.mouse.x = e.x;
                this.mouse.y = e.y;
            });
            // Reset mouse when leaving window
            window.addEventListener('mouseout', () => {
                this.mouse.x = null;
                this.mouse.y = null;
            });
        }

        resize() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }

        handleScroll() {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - this.lastScrollY;
            this.scrollSpeed = delta * 0.5; // Sensitivity
            this.lastScrollY = currentScrollY;

            // Decay scroll speed
            setTimeout(() => {
                this.scrollSpeed *= 0.9;
            }, 100);
        }

        init() {
            for (let i = 0; i < this.particleCount; i++) {
                this.particles.push(new Particle(this.canvas));
            }
        }

        animate() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.particles.forEach(particle => {
                particle.update(this.scrollSpeed, this.mouse);
                particle.draw(this.ctx);
            });

            // Friction for scroll effect
            this.scrollSpeed *= 0.95;
            if (Math.abs(this.scrollSpeed) < 0.1) this.scrollSpeed = 0;

            requestAnimationFrame(() => this.animate());
        }
    }

    class Particle {
        constructor(canvas) {
            this.canvas = canvas;
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 30) + 1;
            this.speedY = Math.random() * 0.5 + 0.2; // Natural upward float (Antigravity)
            this.opacity = Math.random();
            this.fadeSpeed = Math.random() * 0.02 + 0.005;
            this.fadeDir = 1;
        }

        update(scrollSpeed, mouse) {
            // Glitter Effect (Twinkle)
            this.opacity += this.fadeSpeed * this.fadeDir;
            if (this.opacity > 1 || this.opacity < 0.2) this.fadeDir *= -1;

            // Mouse Interaction (Gravity/Repulsion)
            if (mouse.x != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const maxDistance = mouse.radius;
                    const force = (maxDistance - distance) / maxDistance;
                    const directionX = forceDirectionX * force * this.density;
                    const directionY = forceDirectionY * force * this.density;

                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    // Return to natural flow if not affected by mouse
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 10;
                    }
                }
            }

            // Movement (Antigravity + Scroll Reaction)
            // Natural float up
            this.y -= this.speedY;

            // Scroll reaction (Gravity)
            this.y -= scrollSpeed;

            // Wrap around
            if (this.y < 0) {
                this.y = this.canvas.height;
                this.x = Math.random() * this.canvas.width;
                this.baseX = this.x; // Reset base position
            }
            if (this.y > this.canvas.height) {
                this.y = 0;
                this.x = Math.random() * this.canvas.width;
                this.baseX = this.x; // Reset base position
            }
        }

        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(100, 200, 255, ${this.opacity})`; // Blue-ish tint for cyber feel
            ctx.shadowBlur = 5;
            ctx.shadowColor = "white";
            ctx.fill();
        }
    }

    // Initialize Particle System
    if (document.getElementById('particle-canvas')) {
        new ParticleSystem();
    }

    // Quote Form Submission (Simulation)
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic Validation
            let isValid = true;
            const inputs = quoteForm.querySelectorAll('input, select, textarea');

            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });

            if (isValid) {
                // Construct Mailto Link
                const name = quoteForm.querySelector('input[type="text"]').value;
                const phone = quoteForm.querySelector('input[type="tel"]').value;
                const requirement = quoteForm.querySelector('select').value;
                const message = quoteForm.querySelector('textarea').value;

                const subject = `New Quote Request from ${name}`;
                const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0ARequirement: ${requirement}%0D%0AMessage: ${message}`;

                const mailtoLink = `mailto:jidhntr@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

                // Open Mail Client
                window.location.href = mailtoLink;

                // UI Feedback
                const btn = quoteForm.querySelector('button[type="submit"]');
                const originalText = btn.innerText;
                btn.innerText = 'Opening Email...';
                btn.disabled = true;

                setTimeout(() => {
                    alert('Please send the email from your client to complete the request.');
                    quoteForm.reset();
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, 1500);
            }
        });
    }
});
