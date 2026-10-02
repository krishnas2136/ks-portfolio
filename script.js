// Portfolio Data Object
const portfolioData = {
    name: "Krishna S",
    headline: "Software Developer",
    email: "krishnasujala880@gmail.com",
    github: "https://github.com/krishnas2136",
    linkedin: "https://www.linkedin.com/in/krishna-s-016b45281",
    
    about: "I am a dedicated 3rd-year B.Tech Computer Science Engineering student at Indus University (2024–2028) with hands-on corporate software development experience. Specializing in Artificial Intelligence, AWS serverless cloud architecture, and web development, I bridge backend logic with intelligent cloud integration. Beyond software development, I actively participate in hackathons and bring creative expression through singing, drawing, and acting.",

    skills: [
        { 
            category: "Programming Languages", 
            items: ["Python", "Java", "C++", "C", "HTML5", "CSS3", "JavaScript"] 
        },
        { 
            category: "AI, Data Science & Machine Learning", 
            items: ["Artificial Intelligence", "Machine Learning", "Prompt Engineering", "ChatGPT & AI Tools", "Data Analysis with AI"] 
        },
        { 
            category: "Cloud & Backend Infrastructure", 
            items: ["AWS Lambda", "Amazon Lex V2", "RESTful APIs", "Serverless Architecture", "SQLite"] 
        },
        { 
            category: "Web & Productivity Tools", 
            items: ["Bootstrap 5", "PyQt GUI", "Advanced Excel with AI (96% Score)", "Tinkercad Hardware Simulation"] 
        }
    ],

    projects: [
        {
            title: "AWS Lex & Lambda Conversational AI Bot",
            description: "Developed a full serverless conversational bot using Amazon Lex V2 and Python AWS Lambda hooks for real-time slot validation and automated intent handling.",
            tags: ["Python", "AWS Lambda", "Amazon Lex V2", "Serverless"]
        },
        {
            title: "Interactive Numerology Web Application",
            description: "Designed and implemented an interactive web application featuring custom algorithm logic for numerology calculations and responsive frontend UI.",
            tags: ["HTML5", "CSS3", "JavaScript", "Web Development"]
        }
    ],

    experience: [
        {
            role: "AI Software Developer Intern",
            organization: "Cloud Ladder Technologies",
            period: "June 22, 2026 – August 31, 2026",
            details: "Worked on corporate software development tasks, serverless cloud functions, and AI-driven workflow integrations with professional dedication."
        },
        {
            role: "Artificial Intelligence Intern",
            organization: "InTrainz",
            period: "August 1, 2025 – October 1, 2025",
            details: "Participated in hands-on AI model development, data preprocessing, and algorithm implementation with high performance."
        }
    ],

    certifications: [
        {
            title: "AI Software Developer Internship Certificate",
            issuer: "Cloud Ladder Technologies",
            date: "August 2026",
            image: "certificates/cloud-ladder-cert.png"
        },
        {
            title: "Top Lyria Artist – Google Student Ambassador Program",
            issuer: "Google",
            date: "June 16, 2026",
            details: "Awarded for creating original musical experiences using Google Lyria AI.",
            image: "certificates/google-lyria-cert.png"
        },
        {
            title: "AI Tools & ChatGPT Workshop Completion",
            issuer: "be10x",
            date: "June 7, 2026",
            image: "certificates/be10x-cert.png"
        },
        {
            title: "Advanced Excel with AI (Top Performer - 96%)",
            issuer: "Internshala Trainings / IITM Pravartak",
            date: "December 2025",
            image: "certificates/internshala-excel-cert.png"
        },
        {
            title: "Artificial Intelligence Internship Certificate",
            issuer: "InTrainz",
            date: "October 2025",
            image: "certificates/intrainz-cert.png"
        },
        {
            title: "Programming in Python with AI (Top Performer - 93%)",
            issuer: "Internshala Trainings",
            date: "August 2025",
            image: "certificates/python-ai-cert.png"
        },
        {
            title: "Data Science & Machine Learning Upskilling Course",
            issuer: "My Job Grow",
            date: "January 2025",
            image: "certificates/ds-ml-cert.png"
        }
    ],

    education: [
        {
            degree: "Bachelor of Technology in Computer Science & Engineering",
            institution: "Indus University (Indus Institute of Technology and Engineering)",
            period: "2024 - 2028",
            score: "Currently in 3rd Year"
        },
        {
            degree: "Class 12th (Senior Secondary - PCM with CS)",
            institution: "Kendriya Vidyalaya (KV) Dantiwada",
            period: "Passed 2024",
            score: "Score: 89%"
        },
        {
            degree: "Class 10th (Secondary School)",
            institution: "Kendriya Vidyalaya (KV) Bhuj",
            period: "Passed 2022",
            score: "Score: 85%"
        }
    ]
};

// Global Function to Open Certificate Modal Popup
function openCertificateModal(title, imageSrc, fullLink) {
    document.getElementById("certificateModalLabel").textContent = title;
    
    const imgElement = document.getElementById("modalCertificateImg");
    if (imageSrc && !imageSrc.endsWith('.pdf')) {
        imgElement.src = imageSrc;
        imgElement.style.display = "inline-block";
    } else {
        imgElement.style.display = "none";
    }

    const downloadBtn = document.getElementById("modalDownloadBtn");
    downloadBtn.href = fullLink || imageSrc || "#";

    // Trigger Bootstrap Modal instance
    const certModalEl = document.getElementById('certificateModal');
    if (certModalEl) {
        const certModal = new bootstrap.Modal(certModalEl);
        certModal.show();
    }
}

// Render Functions on DOM Load
document.addEventListener("DOMContentLoaded", () => {
    // Populate About Me
    const aboutElem = document.getElementById("about-text");
    if (aboutElem) aboutElem.textContent = portfolioData.about;

    // Populate Skills
    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer) {
        skillsContainer.innerHTML = portfolioData.skills.map(skillGroup => `
            <div class="col-md-6">
                <div class="card h-100 shadow-sm p-4 rounded-4">
                    <h5 class="fw-bold text-primary mb-3">${skillGroup.category}</h5>
                    <div>
                        ${skillGroup.items.map(item => `<span class="skill-badge">${item}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Populate Projects
    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer) {
        projectsContainer.innerHTML = portfolioData.projects.map(project => `
            <div class="col-md-6">
                <div class="card h-100 shadow-sm rounded-4 p-3">
                    <div class="card-body">
                        <h5 class="card-title fw-bold text-dark">${project.title}</h5>
                        <p class="card-text text-secondary mb-3">${project.description}</p>
                        <div>
                            ${project.tags.map(tag => `<span class="badge bg-secondary me-1 mb-1">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Populate Experience
    const expContainer = document.getElementById("experience-container");
    if (expContainer) {
        expContainer.innerHTML = portfolioData.experience.map(exp => `
            <div class="mb-3 p-3 bg-white rounded-4 shadow-sm border-start border-primary border-4 card">
                <h6 class="fw-bold mb-1 text-dark">${exp.role}</h6>
                <p class="text-primary mb-1 fw-semibold">${exp.organization}</p>
                <small class="text-muted d-block mb-2"><i class="bi bi-calendar3 me-1"></i>${exp.period}</small>
                <p class="small text-secondary mb-0">${exp.details}</p>
            </div>
        `).join('');
    }

    // Populate Certifications
    const certContainer = document.getElementById("certifications-container");
    if (certContainer) {
        certContainer.innerHTML = portfolioData.certifications.map(cert => `
            <div class="mb-3 p-3 bg-white rounded-4 shadow-sm border-start border-success border-4 card">
                <div class="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <div>
                        <h6 class="fw-bold mb-1 text-dark">${cert.title}</h6>
                        <p class="text-success mb-0 fw-semibold">${cert.issuer} ${cert.date ? `(${cert.date})` : ''}</p>
                        ${cert.details ? `<small class="text-secondary d-block mt-1">${cert.details}</small>` : ''}
                    </div>
                    ${cert.image || cert.link ? `
                        <button class="btn btn-outline-primary btn-sm rounded-3 mt-1" 
                                onclick="openCertificateModal('${cert.title}', '${cert.image || ''}', '${cert.link || cert.image || ''}')">
                            <i class="bi bi-eye-fill me-1"></i> View Certificate
                        </button>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }

    // Populate Education
    const eduContainer = document.getElementById("education-container");
    if (eduContainer) {
        eduContainer.innerHTML = portfolioData.education.map(edu => `
            <div class="col-md-4">
                <div class="card h-100 p-3 shadow-sm rounded-4 border-top border-primary border-4">
                    <h6 class="fw-bold mb-2 text-dark">${edu.degree}</h6>
                    <p class="text-secondary mb-1 small">${edu.institution}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="badge bg-light text-dark border">${edu.period}</span>
                        <span class="badge bg-primary">${edu.score}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Safe Formspree event handler check
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            // Formspree natively submits the form
        });
    }
});