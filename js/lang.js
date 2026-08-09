// English translations. French stays authoritative in the HTML and is
// captured at runtime, so only the English copy needs to be maintained here.
const translations = {
  fr: {
    'theme.dark': 'Mode sombre',
    'theme.light': 'Mode clair',
  },
  en: {
    'meta.title': 'Lilian Naretto — DevSecOps Engineer',
    'meta.description': "Lilian Naretto, DevSecOps IT engineer — infrastructure, automation and security (Terraform, Ansible, Docker, GitLab CI/CD).",

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',

    'hero.available': 'Available for new opportunities',
    'cta.learnMore': 'Learn more',
    'cta.contact': 'Contact me',

    'about.eyebrow': 'Who I am',
    'about.heading': 'About',
    'about.lead': "As a <strong>DevOps</strong> engineer, I design, automate and optimize reliable, high-performing IT infrastructure. Passionate about modernizing technical environments, I bring automation, continuous integration (CI/CD) and security practices together to ensure fast, stable and secure deployments.",
    'about.p2': "With hands-on experience building complex infrastructure using tools such as <strong>Terraform, Ansible, PowerShell DSC, GitLab CI/CD</strong>, as well as <strong>Docker</strong> and <strong>Proxmox</strong>, I master the full application lifecycle, from design through to production deployment.",
    'about.p3': "If you're looking for a DevOps engineer driven by automation and continuous improvement, I'd be glad to work with you to build and grow sustainable, efficient systems.",
    'about.strength1.title': 'Rigor',
    'about.strength1.desc': 'High standards of quality, security and performance.',
    'about.strength2.title': 'Team spirit',
    'about.strength2.desc': 'Active collaboration and regular project progress updates.',
    'about.strength3.title': 'Problem solving',
    'about.strength3.desc': 'Ability to solve complex technical problems.',
    'about.link.experience': 'My journey',
    'about.link.portfolio': 'My projects',
    'about.card.roleLabel': 'Current role',
    'about.card.roleValue': 'DevSecOps IT Engineer &middot; Thales',
    'about.card.locationLabel': 'Location',
    'about.card.availabilityLabel': 'Availability',
    'about.card.availabilityValue': 'Open to new opportunities',
    'about.card.stackLabel': 'Key stack',
    'about.card.cv': 'My CV',

    'skills.heading': 'Technical',
    'skills.comments': 'My professional and personal projects have given me solid skills across a wide range of languages and tools. I adapt quickly and pick up new technologies with ease.',
    'skills.cat1': 'Infrastructure &amp; Automation',
    'skills.cat2': 'Virtualization &amp; CI/CD',
    'skills.cat3': 'Languages &amp; Development',

    'exp.comments': 'My professional experience has let me apply what I learned during my studies and grow more autonomous on infrastructure projects with increasing responsibility.',
    'exp.education': 'Education',
    'exp.edu.school': 'Engineering School',
    'exp.edu1.desc': 'Computer Science - Cybersecurity track.',
    'exp.edu2.title': "Bachelor's in Computer Science",
    'exp.edu2.desc': "Bachelor's degree obtained through a dual-degree program.",
    'exp.edu3.desc': 'Integrated preparatory class.',
    'exp.edu4.title': 'Baccalauréat, Science track',
    'exp.edu4.desc': 'ISN specialization (Computer Science and Digital Technology).',
    'exp.workHistory': 'Professional Experience',
    'exp.current': 'Current',

    'exp.job1.title': 'DevSecOps IT Engineer',
    'exp.job1.dates': '08/01/2024 - Present',
    'exp.job1.b1': 'IT infrastructure automation.',
    'exp.job1.b2': 'Infrastructure deployment using various tools: PowerShell DSC, Terraform, Ansible, Bash, GitLab, etc.',
    'exp.job1.b3': 'Responsible for deploying Active Directory, DFS, RADIUS, antivirus, databases, etc.',
    'exp.job1.b4': 'Deployment of 50+ VMs via Terraform on vSphere.',
    'exp.job1.b5': 'Responsible for the smooth operation of the production infrastructure.',
    'exp.job1.b6': 'Definition and evolution of the reference architecture.',
    'exp.job1.b7': 'Automated deployment via GitLab and CI/CD pipelines to ensure fast, stable production releases.',

    'exp.job2.title': 'Founder',
    'exp.job2.b1': 'Founder and director of Otteran, a software development company.',
    'exp.job2.b2': 'Flagship project: OtterVault, a platform to inventory IT assets and detect their security vulnerabilities.',
    'exp.job2.b3': 'Application development using the Django framework.',
    'exp.job2.b4': 'Management of the PostgreSQL database.',
    'exp.job2.b5': 'Design of an API to streamline vulnerability reporting through an intuitive interface.',
    'exp.job2.b6': 'Responsible for every aspect of the business: design, development, finance, client relations.',
    'exp.job2.b7': 'One-person company, fully self-managed.',

    'exp.job3.title': 'DevSecOps Engineer | Cybersecurity (12 months)',
    'exp.job3.b1': 'Continued development and rollout of the Minotaur project within a team, leveraging several internal and external tools: Cyberwatch, Nexus, etc.',
    'exp.job3.b2': 'Implementation of a process for managing and remediating detected vulnerabilities.',
    'exp.job3.b3': 'Use of DevSecOps tools, hardening implementation and penetration testing on Minotaur.',
    'exp.job3.b4': 'Continuous deployment of the application via tools such as Jenkins, Nginx, Gunicorn, etc., with code analysis through SonarQube and Nexus IQ.',
    'exp.job3.b5': 'Full setup of the PostgreSQL database.',
    'exp.job3.b6': 'Automation of data collection (Cyberwatch, PDF, HTML, XML, CSV).',
    'exp.job3.b7': 'Biweekly presentations to the team to share project progress.',
    'exp.job3.b8': "Setup of a dedicated AD FS for the team and integration of Minotaur into Idemia's Active Directory.",

    'exp.job4.title': 'DevSecOps Intern | Cybersecurity (6 months)',
    'exp.job4.b1': 'Independently designed a solution (codename: Minotaur) built with Django to catalog the software and hardware components of ongoing projects, enabling security audits of deployed systems.',

    'portfolio.heading': 'Projects',
    'portfolio.comments': 'My personal projects reflect my passion for computing: every new technology I learn becomes a hands-on build, a chance to put my knowledge into practice and take on new challenges. You can find all of my work on my <a href="https://github.com/Naretto95/">GitHub</a> profile, also reachable via the icon at the bottom of the page.',
    'portfolio.card1.desc': 'Complete deployment of a personal HomeLab.',
    'portfolio.card2.title': 'Virtual CPU Core - Python / C++',
    'portfolio.card2.desc': 'Design of a virtual CPU core in C, paired with a compiler built in Python.',
    'portfolio.card3.title': 'Cryptography - Flask',
    'portfolio.card3.desc': 'Full website built with the Flask framework as part of a cryptography study project.',
    'portfolio.card4.desc': 'Full website built with the Django framework for detecting vulnerabilities across various assets.',
    'portfolio.viewGithub': 'View on GitHub <i class="bx bx-right-arrow-alt"></i>',
    'portfolio.viewSite': 'Visit site <i class="bx bx-right-arrow-alt"></i>',

    'contact.location': 'Location:',
    'contact.phone': 'Phone:',
    'contact.form.name': 'Name',
    'contact.form.subject': 'Subject',
    'contact.form.send': 'Send',

    'theme.dark': 'Dark mode',
    'theme.light': 'Light mode',
    'theme.ariaLabel': 'Toggle dark mode',
  }
};

(function () {
  const STORAGE_KEY = 'site-lang';
  const textNodes = [...document.querySelectorAll('[data-i18n]')];
  const placeholderNodes = [...document.querySelectorAll('[data-i18n-placeholder]')];
  const ariaNodes = [...document.querySelectorAll('[data-i18n-aria]')];
  const contentNodes = [...document.querySelectorAll('[data-i18n-content]')];
  const typedEl = document.querySelector('.typed[data-typed-items]');

  const original = { text: {}, placeholder: {}, aria: {}, content: {}, typed: null };

  textNodes.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!(key in original.text)) original.text[key] = el.innerHTML;
  });
  placeholderNodes.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    original.placeholder[key] = el.getAttribute('placeholder');
  });
  ariaNodes.forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    original.aria[key] = el.getAttribute('aria-label');
  });
  contentNodes.forEach(el => {
    const key = el.getAttribute('data-i18n-content');
    original.content[key] = el.getAttribute('content');
  });
  if (typedEl) original.typed = typedEl.getAttribute('data-typed-items');

  function applyLang(lang) {
    textNodes.forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.innerHTML = lang === 'en' && translations.en[key] ? translations.en[key] : original.text[key];
    });
    placeholderNodes.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', lang === 'en' && translations.en[key] ? translations.en[key] : original.placeholder[key]);
    });
    ariaNodes.forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', lang === 'en' && translations.en[key] ? translations.en[key] : original.aria[key]);
    });
    contentNodes.forEach(el => {
      const key = el.getAttribute('data-i18n-content');
      el.setAttribute('content', lang === 'en' && translations.en[key] ? translations.en[key] : original.content[key]);
    });
    if (typedEl) {
      const enItems = typedEl.getAttribute('data-typed-items-en');
      typedEl.setAttribute('data-typed-items', lang === 'en' && enItems ? enItems : original.typed);
    }

    document.documentElement.lang = lang;

    const langLabel = document.getElementById('lang-label');
    if (langLabel) langLabel.textContent = lang === 'en' ? 'Français' : 'English';

    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: lang } }));
  }

  function t(key) {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'fr';
    if (lang === 'en' && translations.en[key]) return translations.en[key];
    return original.text[key] || original.aria[key] || translations.fr[key] || key;
  }

  const initialLang = localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'fr';
  applyLang(initialLang);

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      const nextLang = document.documentElement.lang === 'en' ? 'fr' : 'en';
      localStorage.setItem(STORAGE_KEY, nextLang);
      applyLang(nextLang);
    });
  }

  window.i18n = { t: t, getLang: function () { return document.documentElement.lang === 'en' ? 'en' : 'fr'; } };
})();
