const translations = {
    az: {
        navHome: "Ana Səhifə",
        navAbout: "Haqqımda",
        navSkills: "Bacarıqlar",
        navProjects: "Layihələr",
        navCerts: "Sertifikatlar",
        navContact: "Əlaqə",
        heroHi: "Salam, mən",
        aboutTitle: "Haqqımda",
        aboutBody: "Salam, mən Yusif Musazadə. Azərbaycan Dövlət Neft və Sənaye Universitetində Me" +
                "xatronika və Robototexnika mühəndisliyi üzrə təhsil alıram. Eyni zamanda kiber" +
                "təhlükəsizlik sahəsində ixtisaslaşıram, xüsusilə də veb tətbiqlərinin pentest " +
                "metodologiyası (XSS, SQLi, RCE, LFI, RFI, SSTI, SSRF, IDOR və s.) üzərində işl" +
                "əyirəm.Təcrübəmi real simulyasiyalar və süni intellektlə idarə olunan pilotsuz" +
                " uçuş aparatları(PUA) üzərində Webots və ROS 2 kimi texnologiyalarla inkişaf e" +
                "tdirirəm.Python əsaslı alqoritmlərlə AI davranışları modelləşdirir,təhlükəsizl" +
                "ik aspektlərini isə həm müdafiə,həm də hücum yönümlü testlərlə sınayıram.Məqsə" +
                "dim – texnologiyanın həm faydalı həm də təhlükəsiz tərəfini dərk edərək gələcə" +
                "yin mühəndisi və cybersecurity mütəxəssisi kimi fərqlənməkdir.Həm yaradıcı,həm" +
                " də texniki yanaşma ilə daim özümü yeniləyirəm və kompleks problemləri praktik" +
                "i yollarla həll etməyi sevirəm.",
        skillsTitle: "Bacarıqlar",
        projectsTitle: "Layihələr",
        project1Title: "Webots AI Drone",
        project1Desc: "AI əsaslı yol tapma simulyasiyası.",
        project2Title: "Bug Bounty Platform",
        project2Desc: "Boşluqları bildirmək sistemi.",
        project3Title: "ROS2 PID Drone",
        project3Desc: "Hədəf izləmə və sabit uçuş.",
        certsTitle: "Sertifikatlar",
        cert1: "Web Pentesting",
        cert1Org: "Kibertəhlükəsizlik Akademiyası",
        cert2: "ROS 2 İnkişafı",
        cert2Org: "Robotika İnstitutu",
        cert3: "AI və Maşın Öyrənməsi",
        cert3Org: "Texnologiya Universiteti",
        contactTitle: "Əlaqə",
        typedStrings: ["Kibertəhlükəsizlik Mütəxəssisi", "Robototexnika Mühəndisi", "Web Pentester", "AI Tədqiqatçısı"]
    },
    en: {
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navCerts: "Certificates",
        navContact: "Contact",
        heroHi: "Hello, I'm",
        aboutTitle: "About Me",
        aboutBody: "I'm Yusif Musazade — studying Robotics Engineering and gaining deep knowledge " +
                "in cybersecurity (especially Web Pentest). I build UAVs with ROS 2, Webots and" +
                " AI models, while also finding vulnerabilities like RCE, SQLi, XSS.",
        skillsTitle: "Skills",
        projectsTitle: "Projects",
        project1Title: "Webots AI Drone",
        project1Desc: "AI-based pathfinding simulation.",
        project2Title: "Bug Bounty Platform",
        project2Desc: "Vulnerability reporting system.",
        project3Title: "ROS2 PID Drone",
        project3Desc: "Target tracking and stable flight.",
        certsTitle: "Certificates",
        cert1: "Web Pentesting",
        cert1Org: "Cybersecurity Academy",
        cert2: "ROS 2 Development",
        cert2Org: "Robotics Institute",
        cert3: "AI & Machine Learning",
        cert3Org: "Tech University",
        contactTitle: "Contact",
        typedStrings: ["Cybersecurity Specialist", "Robotics Engineer", "Web Pentest Expert", "AI Researcher"]
    },
    ru: {
        navHome: "Главная",
        navAbout: "Обо мне",
        navSkills: "Навыки",
        navProjects: "Проекты",
        navCerts: "Сертификаты",
        navContact: "Контакты",
        heroHi: "Привет, я",
        aboutTitle: "Обо мне",
        aboutBody: "Я Юсиф Музазаде — изучаю робототехнику и получаю глубокие знания в области киб" +
                "ербезопасности (особенно Web Pentest). Строю БПЛА с ROS 2, Webots и моделями И" +
                "И, а также нахожу уязвимости типа RCE, SQLi, XSS.",
        skillsTitle: "Навыки",
        projectsTitle: "Проекты",
        project1Title: "Webots AI Дрон",
        project1Desc: "ИИ-симуляция поиска пути.",
        project2Title: "Bug Bounty Платформа",
        project2Desc: "Система отчетов об уязвимостях.",
        project3Title: "ROS2 PID Дрон",
        project3Desc: "Отслеживание целей и стабильный полет.",
        certsTitle: "Сертификаты",
        cert1: "Web Пентестинг",
        cert1Org: "Академия Кибербезопасности",
        cert2: "ROS 2 Разработка",
        cert2Org: "Институт Робототехники",
        cert3: "ИИ и Машинное Обучение",
        cert3Org: "Технический Университет",
        contactTitle: "Контакты",
        typedStrings: ["Специалист по Кибербезопасности", "Инженер-Робототехник", "Эксперт Web Пентеста", "Исследователь ИИ"]
    }
};

let currentLang = 'az';
let typed = null;
let isLightTheme = false;

// Language switching
function switchLanguage(lang) {
    currentLang = lang;

    // Update text content
    document
        .querySelectorAll('[data-i18n]')
        .forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

    // Update language buttons
    document
        .querySelectorAll('.lang-btn')
        .forEach(btn => {
            btn
                .classList
                .remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn
                    .classList
                    .add('active');
            }
        });

    // Restart typed effect
    restartTypedEffect();
}

// Typed.js restart function
function restartTypedEffect() {
    if (typed) {
        typed.destroy();
        typed = null;
    }

    const typedElement = document.getElementById('typed');
    if (typedElement) {
        typedElement.innerHTML = '';
    }

    setTimeout(() => {
        startTypedEffect();
    }, 100);
}

function startTypedEffect() {
    if (typed) {
        typed.destroy();
    }

    typed = new Typed('#typed', {
        strings: translations[currentLang].typedStrings,
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        smartBackspace: false,
        showCursor: true,
        cursorChar: '|'
    });
}

// DÜZƏLDILMIŞ PARTICLES FUNKSIYASI
let particlesInstance = null;

function initParticles() {
    // Əvvəlki instance-ı təmizlə
    if (particlesInstance) {
        try {
            if (window.pJSDom && window.pJSDom.length > 0) {
                window
                    .pJSDom[0]
                    .pJS
                    .fn
                    .vendors
                    .destroypJS();
                window.pJSDom = [];
            }
        } catch (e) {
            console.log('Particles təmizləmə xətası:', e);
        }
    }

    // Tema əsasında rəng seç
    const particleColor = isLightTheme
        ? "#374151"
        : "#00ffaa";
    const lineColor = isLightTheme
        ? "#6b7280"
        : "#00ffaa";

    // Yeni particles başlat
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: particleColor
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: {
                value: 0.6,
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: lineColor,
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 10,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 70,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 14
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });

    particlesInstance = true;
}

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

themeToggle.addEventListener('change', function () {
    const html = document.documentElement;
    const isDark = html
        .classList
        .contains('dark');

    if (isDark) {
        html
            .classList
            .remove('dark');
        html
            .classList
            .add('light');
        themeIcon
            .classList
            .remove('fa-moon');
        themeIcon
            .classList
            .add('fa-sun');
        isLightTheme = true;
    } else {
        html
            .classList
            .remove('light');
        html
            .classList
            .add('dark');
        themeIcon
            .classList
            .remove('fa-sun');
        themeIcon
            .classList
            .add('fa-moon');
        isLightTheme = false;
    }

    setTimeout(() => {
        initParticles();
    }, 300);
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('mobile-menu-overlay');

hamburger.addEventListener('click', () => {
    hamburger
        .classList
        .toggle('active');
    mobileMenu
        .classList
        .toggle('active');
    overlay
        .classList
        .toggle('opacity-100');
    overlay
        .classList
        .toggle('pointer-events-none');
});

overlay.addEventListener('click', () => {
    hamburger
        .classList
        .remove('active');
    mobileMenu
        .classList
        .remove('active');
    overlay
        .classList
        .add('pointer-events-none');
    overlay
        .classList
        .remove('opacity-100');
});

// Language button events
document
    .querySelectorAll('.lang-btn')
    .forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

// Tooltip functionality
document
    .querySelectorAll('.group')
    .forEach(item => {
        item.addEventListener('mouseenter', function () {
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateX(-50%) translateY(-5px)';
            }
        });

        item.addEventListener('mouseleave', function () {
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateX(-50%) translateY(0)';
            }
        });
    });

// Intersection Observer for animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry
                .target
                .classList
                .add('animate-fadeIn');
        }
    });
}, {threshold: 0.1});

document
    .querySelectorAll('section')
    .forEach(sec => {
        observer.observe(sec);
    });

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLang);
    startTypedEffect();

    // Particles-ı başlat (kicik gecikmə ilə)
    setTimeout(() => {
        initParticles();
    }, 0);
});
class CertificateGallery {
    constructor() {
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImg = document.getElementById('lightbox-img');
        this.closeBtn = document.getElementById('close-btn');
        this.certificates = document.querySelectorAll('.certificate-card');
        this.currentCard = null;

        this.init();
    }

    init() {
        this.certificates.forEach(card => {
            card.addEventListener('click', (e) => this.openLightbox(e, card));
        });

        this.closeBtn.addEventListener('click', () => this.closeLightbox());
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) this.closeLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeLightbox();
        });

        this.addParallaxEffect();
    }

    openLightbox(e, card) {
        e.preventDefault();
        this.currentCard = card;

        const img = card.querySelector('.certificate-img');
        const imgSrc = card.getAttribute('data-src') || img.src;

        const firstRect = img.getBoundingClientRect();

        this.lightboxImg.src = imgSrc;
        this.lightbox.classList.add('active');

        requestAnimationFrame(() => {
            const lastRect = this.lightboxImg.getBoundingClientRect();

            const deltaX = firstRect.left - lastRect.left;
            const deltaY = firstRect.top - lastRect.top;
            const deltaW = firstRect.width / lastRect.width;
            const deltaH = firstRect.height / lastRect.height;

            this.lightboxImg.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`;
            this.lightboxImg.style.transformOrigin = 'top left';

            requestAnimationFrame(() => {
                this.lightboxImg.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                this.lightboxImg.style.transform = 'translate(0, 0) scale(1, 1)';

                setTimeout(() => {
                    this.lightboxImg.style.transition = '';
                    this.lightboxImg.style.transform = '';
                    this.lightboxImg.style.transformOrigin = '';

                    // Məhdudlaşdır: yalnız 90vw və 90vh ölçüsündə aç
                    this.lightboxImg.style.maxWidth = '85vw';
                    this.lightboxImg.style.maxHeight = '85vh';
                    this.lightboxImg.style.width = 'auto';
                    this.lightboxImg.style.height = 'auto';
                }, 0);
            });
        });

        card.style.transform = 'scale(0.95)';
        card.style.opacity = '0.5';
    }

    closeLightbox() {
        if (!this.currentCard) return;

        const lightboxRect = this.lightboxImg.getBoundingClientRect();
        const cardImg = this.currentCard.querySelector('.certificate-img');
        const cardRect = cardImg.getBoundingClientRect();

        const deltaX = cardRect.left - lightboxRect.left;
        const deltaY = cardRect.top - lightboxRect.top;
        const deltaW = cardRect.width / lightboxRect.width;
        const deltaH = cardRect.height / lightboxRect.height;

        this.lightboxImg.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        this.lightboxImg.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`;
        this.lightboxImg.style.opacity = '0';

        setTimeout(() => {
            this.lightbox.classList.remove('active');
            this.lightboxImg.style.transition = '';
            this.lightboxImg.style.transform = '';
            this.lightboxImg.style.opacity = '';
        }, 500);

        this.currentCard.style.transform = '';
        this.currentCard.style.opacity = '';
        this.currentCard = null;
    }

    addParallaxEffect() {
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.certificate-card');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            cards.forEach((card, index) => {
                const speed = (index + 1) * 0.3;
                const xOffset = (x - 0.5) * speed;
                const yOffset = (y - 0.5) * speed;

                if (!card.classList.contains('lightbox-active')) {
                    card.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CertificateGallery();
});

document.documentElement.style.scrollBehavior = 'smooth';

