// GoAds - AI Vendor Reputation & Marketing System
// Interactive Application Scripts

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Drawer Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            mobileDrawer.classList.toggle('open');
            mobileToggle.classList.toggle('active');
            
            // Animate burger to cross
            const spans = mobileToggle.querySelectorAll('span');
            if (mobileToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close drawer when a link is clicked
        drawerLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
                mobileToggle.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // 2. Smooth Scrolling & Active Section Highlighting
    const navLinks = document.querySelectorAll('.nav-link, .drawer-link');
    const sections = document.querySelectorAll('section');
    const navbar = document.getElementById('navbar');

    // Navbar shadow on scroll
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Active link tracking
        let current = '';
        const navHeight = navbar ? navbar.offsetHeight : 88;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 30;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll offset
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    e.preventDefault();
                    const navHeight = navbar ? navbar.offsetHeight : 88;
                    const targetPosition = targetSection.offsetTop - navHeight + 5;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// 3. Interactive AI Review Sentiment Demo Switcher
const reviewData = {
    positive: {
        name: "Rahul Verma",
        stars: "★★★★★",
        text: '"Dr. Sharma was extremely patient and the clinic staff was welcoming. Best healthcare experience in Jhansi!"',
        reply: '<strong>🤖 AI Auto-Reply:</strong> "Thank you so much for your kind words, Rahul! We\'re thrilled to hear that Dr. Sharma and our team provided you with exceptional care. Wishing you good health always!"'
    },
    neutral: {
        name: "Amit Saxena",
        stars: "★★★☆☆",
        text: '"Treatment was good and doctors are certified, but waiting time was almost 45 minutes even with a pre-booked appointment."',
        reply: '<strong>🤖 AI Auto-Reply:</strong> "Hello Amit, thank you for visiting us and sharing your honest feedback. We\'re glad the treatment was satisfactory, and we are actively streamlining our clinic queue to minimize waiting times. We appreciate your patience!"'
    },
    negative: {
        name: "Priya Singh",
        stars: "★☆☆☆☆",
        text: '"Billing counter staff was quite abrupt and did not provide clear medicine dosage instructions at checkout."',
        reply: '<strong>🤖 AI Auto-Reply:</strong> "Dear Priya, we sincerely apologize for this distressing experience. Patient courtesy and clear medical instructions are our highest priority. Our clinic manager will connect with you directly today at your registered number to resolve this immediately."'
    }
};

function switchReviewDemo(type) {
    const data = reviewData[type];
    if (!data) return;

    // Update buttons active class
    const buttons = document.querySelectorAll('.demo-tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const activeBtn = document.getElementById(`tab-${type}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Update text content with subtle animation
    const nameEl = document.getElementById('demo-reviewer-name');
    const starsEl = document.getElementById('demo-stars');
    const textEl = document.getElementById('demo-customer-text');
    const replyEl = document.getElementById('demo-ai-reply-text');

    if (nameEl && starsEl && textEl && replyEl) {
        nameEl.textContent = data.name;
        starsEl.textContent = data.stars;
        textEl.textContent = data.text;
        replyEl.innerHTML = data.reply;
    }
}

// 4. Interactive Industry Post Category Switcher
const industryData = {
    doctor: {
        title: "🩺 Today's Post: Seasonal Viral Fever Awareness",
        caption: '"Stay hydrated and monitor early symptoms before taking OTC antibiotics. Protect your family with certified medical advice. Book a consultation today!"',
        tags: "#HealthAwareness #DoctorTips #PreventativeCare #GoAdsHealthcare"
    },
    clinic: {
        title: "🏥 Today's Post: Multi-Specialty Clinic & OPD Consultations",
        caption: '"Comprehensive family healthcare under one roof. Consult our experienced specialist doctors with zero queue waiting time. Book your priority OPD slot today!"',
        tags: "#ClinicCare #FamilyHealth #SpecialistDoctor #OPDConsultation #HealthCheckup #GoAds"
    },
    pathology: {
        title: "🔬 Today's Post: Fasting Blood Sugar & Lipid Profile Check",
        caption: '"Early detection saves lives. 60% of lifestyle conditions show zero early symptoms. Get your preventative lab health package at home this Sunday!"',
        tags: "#PathologyLab #HealthScreening #BloodTest #WellnessCheck #GoAds"
    },
    pharmacy: {
        title: "💊 Today's Post: Safe Medicine Storage & Monsoon Tips",
        caption: '"Keep your vital medications away from humidity and heat. Check expiration dates regularly and consult our licensed pharmacist for genuine medicines."',
        tags: "#PharmacyCare #MedicineSafety #HealthEducation #LocalChemist #GoAds"
    },
    ambulance: {
        title: "🚑 Today's Post: 24/7 Rapid Emergency Response & Golden Hour",
        caption: '"In medical emergencies, every minute matters. Save our direct emergency helpline on your phone for rapid ALS/BLS ambulance response across the city."',
        tags: "#EmergencyAmbulance #24x7Support #GoldenHour #HealthcareSupport #GoAds"
    },
    retail: {
        title: "🛍️ Today's Post: Weekend In-Store Special Deals",
        caption: '"Visit our store this weekend for exclusive deals across fresh arrivals! Show this post at the billing counter to claim your instant 10% voucher."',
        tags: "#WeekendOffers #LocalRetail #ShopLocal #SpecialDiscount #GoAdsMarketing"
    }
};

function switchIndustryDemo(category) {
    const data = industryData[category];
    if (!data) return;

    // Update chip active class
    const chips = document.querySelectorAll('.industry-chip');
    chips.forEach(chip => chip.classList.remove('active'));

    event.target.classList.add('active');

    // Update preview box
    const titleEl = document.getElementById('industry-title');
    const captionEl = document.getElementById('industry-caption');
    const tagsEl = document.getElementById('industry-tags');

    if (titleEl && captionEl && tagsEl) {
        titleEl.textContent = data.title;
        captionEl.textContent = data.caption;
        tagsEl.textContent = data.tags;
    }
}

// 5. Coming Soon on Google Play Modal Logic
function openComingSoonModal(e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('coming-soon-modal');
    if (modal) {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
}

function closeComingSoonModal() {
    const modal = document.getElementById('coming-soon-modal');
    if (modal) {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

function handlePreRegSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('pre-reg-input');
    const formContainer = document.getElementById('modal-form-container');
    const successState = document.getElementById('modal-success-state');

    if (input && input.value.trim() !== '') {
        if (formContainer && successState) {
            formContainer.style.display = 'none';
            successState.style.display = 'block';
        }
    }
}

// Attach listener for ESC and backdrop click
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeComingSoonModal();
    }
});

document.addEventListener('click', (e) => {
    const modal = document.getElementById('coming-soon-modal');
    if (modal && e.target === modal) {
        closeComingSoonModal();
    }
});

