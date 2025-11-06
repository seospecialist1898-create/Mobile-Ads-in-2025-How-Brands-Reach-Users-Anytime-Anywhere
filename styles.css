/* styles.css */
:root {
    --primary-blue: #2C3E50; /* Deep Blue */
    --accent-gold: #F39C12; /* Vibrant Gold */
    --secondary-teal: #3498DB; /* Teal */
    --bg-offwhite: #ECF0F1; /* Off-White */
    --text-charcoal: #34495E; /* Charcoal */
    --white: #FFFFFF;
    --shadow-soft: 0 6px 25px rgba(44, 62, 80, 0.1);
    --border-radius: 16px;
    --transition-smooth: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.7;
    color: var(--text-charcoal);
    background: var(--bg-offwhite);
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 15px;
}

/* Header */
.site-header {
    background: var(--white);
    box-shadow: var(--shadow-soft);
}

.header-top {
    padding: 1rem 0;
}

.logo-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-blue);
}

.main-nav ul {
    display: flex;
    list-style: none;
    gap: 2.5rem;
}

.main-nav a {
    text-decoration: none;
    color: var(--text-charcoal);
    font-weight: 500;
    transition: var(--transition-smooth);
}

.main-nav a:hover {
    color: var(--accent-gold);
}

.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.menu-toggle span {
    width: 25px;
    height: 3px;
    background: var(--primary-blue);
    margin: 4px 0;
    transition: var(--transition-smooth);
}

.hero-banner {
    background: linear-gradient(135deg, var(--secondary-teal), var(--accent-gold));
    color: var(--white);
    padding: 5rem 0;
    position: relative;
    overflow: hidden;
}

.hero-banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
}

.hero-text {
    flex: 1;
    padding-right: 2rem;
}

.hero-text h1 {
    font-size: 3.2rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.hero-text p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.95;
}

.hero-cta {
    display: inline-block;
    background: var(--white);
    color: var(--secondary-teal);
    padding: 14px 28px;
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition-smooth);
}

.hero-cta:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-soft);
}

.hero-visual {
    flex: 1;
    text-align: center;
}

.phone-mockup {
    width: 250px;
    height: 500px;
    margin: 0 auto;
    background: var(--white);
    border-radius: 30px;
    position: relative;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
}

.screen {
    position: absolute;
    top: 20px;
    left: 10px;
    right: 10px;
    bottom: 20px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 20px;
}

/* Main Sections */
.site-main section {
    padding: 5rem 0;
}

h2 {
    font-size: 2.8rem;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--primary-blue);
    position: relative;
}

h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--accent-gold);
    margin: 1rem auto;
    border-radius: 2px;
}

.content-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    align-items: start;
}

.text-block p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
}

blockquote {
    font-style: italic;
    padding: 2rem;
    background: var(--white);
    border-left: 5px solid var(--accent-gold);
    margin: 2rem 0;
    color: var(--secondary-teal);
}

.sidebar-intro {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-soft);
}

.sidebar-intro h3 {
    color: var(--primary-blue);
    margin-bottom: 1rem;
}

.sidebar-intro ul {
    list-style: none;
}

.sidebar-intro li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #ecf0f1;
}

/* Trends Carousel */
.trends-carousel {
    position: relative;
    overflow: hidden;
    border-radius: var(--border-radius);
    background: var(--white);
    box-shadow: var(--shadow-soft);
}

.trend-slide {
    display: none;
    padding: 3rem;
    text-align: center;
    min-height: 300px;
    opacity: 0;
    transform: translateX(100%);
    transition: var(--transition-smooth);
}

.trend-slide.active {
    display: block;
    opacity: 1;
    transform: translateX(0);
}

.trend-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.trend-slide h3 {
    color: var(--secondary-teal);
    margin-bottom: 1rem;
}

.carousel-nav {
    text-align: center;
    margin-top: 1rem;
}

.carousel-nav button {
    background: var(--secondary-teal);
    color: var(--white);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 0.5rem;
    cursor: pointer;
    transition: var(--transition-smooth);
}

.carousel-nav button:hover {
    background: var(--accent-gold);
}

.insights-panel {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    margin-top: 3rem;
    text-align: center;
    box-shadow: var(--shadow-soft);
}

/* Mechanisms */
.mech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.mech-card {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-soft);
    text-align: center;
    transition: var(--transition-smooth);
}

.mech-card:hover {
    transform: translateY(-10px);
}

.formats-table {
    width: 100%;
    margin: 2rem 0;
    border-collapse: collapse;
    background: var(--white);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-soft);
}

.formats-table caption {
    font-weight: bold;
    padding: 1rem;
    background: var(--primary-blue);
    color: var(--white);
}

.formats-table th, .formats-table td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #bdc3c7;
}

.formats-table th {
    background: var(--secondary-teal);
    color: var(--white);
}

/* Strategies */
.strategy-steps {
    counter-reset: step-counter;
    list-style: none;
    margin: 2rem 0;
}

.strategy-steps li {
    counter-increment: step-counter;
    position: relative;
    padding-left: 3rem;
    margin-bottom: 2rem;
}

.strategy-steps h3::before {
    content: counter(step-counter);
    position: absolute;
    left: 0;
    top: 0;
    background: var(--accent-gold);
    color: var(--white);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.cases-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.case {
    background: var(--white);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-soft);
    text-align: center;
}

/* Platforms */
.platforms-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.platform {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-soft);
    text-align: center;
}

.platform a {
    color: var(--secondary-teal);
    text-decoration: none;
    font-weight: 600;
}

/* Best Practices */
.practice-list {
    list-style: none;
    max-width: 800px;
    margin: 2rem auto;
}

.practice-list li {
    background: var(--white);
    margin-bottom: 1rem;
    padding: 1.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-soft);
    display: flex;
    align-items: center;
}

.practice-list strong {
    color: var(--primary-blue);
    min-width: 150px;
}

.tip-box {
    background: var(--accent-gold);
    color: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    text-align: center;
    margin: 2rem auto;
    max-width: 600px;
}

/* Policies */
.policy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.policy-item {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-soft);
    text-align: center;
}

/* Measuring */
.metrics-visual {
    text-align: center;
    margin: 2rem 0;
}

/* FAQ */
.faq-items {
    max-width: 900px;
    margin: 2rem auto;
}

.faq-item {
    background: var(--white);
    margin-bottom: 1.5rem;
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-soft);
    cursor: pointer;
    transition: var(--transition-smooth);
}

.faq-item:hover {
    transform: scale(1.02);
}

.faq-item h3 {
    color: var(--secondary-teal);
    margin-bottom: 1rem;
}

/* Conclusion */
.conclusion-section {
    background: var(--primary-blue);
    color: var(--white);
    text-align: center;
    padding: 4rem 0;
}

.final-cta {
    display: inline-block;
    background: var(--accent-gold);
    color: var(--white);
    padding: 16px 32px;
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 700;
    margin-top: 2rem;
    transition: var(--transition-smooth);
}

.final-cta:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(243, 156, 18, 0.4);
}

/* Footer */
.site-footer {
    background: var(--text-charcoal);
    color: var(--white);
    text-align: center;
    padding: 2rem 0;
}

.site-footer a {
    color: var(--accent-gold);
    text-decoration: none;
}

/* Responsive */
@media (max-width: 768px) {
    .menu-toggle {
        display: flex;
    }

    .main-nav ul {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--white);
        flex-direction: column;
        padding: 1rem;
        box-shadow: var(--shadow-soft);
    }

    .main-nav ul.active {
        display: flex;
    }

    .hero-banner {
        padding: 3rem 0;
        text-align: center;
    }

    .hero-text h1 {
        font-size: 2.2rem;
    }

    .content-wrapper {
        grid-template-columns: 1fr;
    }

    .mech-grid, .platforms-grid, .policy-grid {
        grid-template-columns: 1fr;
    }

    .formats-table {
        font-size: 0.9rem;
    }

    .trends-carousel {
        padding: 1rem;
    }

    .trend-slide {
        padding: 2rem 1rem;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 10px;
    }

    h2 {
        font-size: 2.2rem;
    }
}
