<div align="center">

<img src="assets/images/readme/portfolio-banner.png" alt="Pratik Vijay Shelar Portfolio Banner" width="100%" />

# Pratik Vijay Shelar Portfolio

### Web Developer Intern | Frontend-Focused MERN Developer | Final-Year CSE (AI) Student

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-Visit_Now-41ead4?style=for-the-badge&logo=netlify&logoColor=111111)](https://lively-starlight-dffa3f.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Pratik--Ghrcemp-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Pratik-Ghrcemp)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Pratik_Shelar-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pratik-shelar-6b66a8286/)
[![Instagram](https://img.shields.io/badge/Instagram-pratikshelar81-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/pratikshelar81/)
[![Email](https://img.shields.io/badge/Email-shelarpratik201%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:shelarpratik201@gmail.com)

</div>

---

## About The Portfolio

This repository contains my professional developer portfolio website, designed to present my academic background, Web Developer Intern experience, technical skills, MERN stack projects, certificates, achievements, blog notes, resume, and scorecard documents in one polished responsive experience.

The goal is simple: make the portfolio feel clean, modern, interactive, and recruiter-ready for Web Developer, Frontend, and MERN stack internship opportunities.

## JSON-Driven Architecture

The portfolio content is now stored in `data/portfolio.json`. The HTML file works as a lightweight single-page shell, and `js/render-portfolio.js` dynamically maps JSON sections, cards, links, project data, certificates, skills, blog posts, contact copy, footer content, accessibility labels, icons, and supporting UI text into the interface.

This structure makes the website easier to scale for student portfolio automation: a new student record can be added by changing the JSON payload while keeping the same reusable rendering layer and visual design.

| Requirement | Implementation |
| --- | --- |
| JSON Integration | Portfolio copy, navigation, sections, assets, links, contact form copy, footer, icons, accessibility labels, and UI settings live in `data/portfolio.json`. |
| Dynamic Rendering | `js/render-portfolio.js` fetches the JSON file and builds the visible website sections from that payload. |
| Lightweight HTML | `index.html` contains only the document shell, root containers, stylesheet/script links, and non-content placeholders. |
| Batch Automation Ready | The same renderer can be reused with another student JSON payload to produce a different portfolio without editing section markup. |

## GEMA Student Portfolio Automation Demo

The live portfolio now includes an **Automation** section that directly demonstrates the requested GEMA use case. It shows how a batch JSON payload can map fields such as `student_name`, `school_name`, `grade_section`, `participation_category`, `certificate_type`, `issue_date`, verification documents, parent/contact details, statistical data, education, certificates, and experience into reusable portfolio UI blocks.

The same structure can be adapted into WordPress through custom fields or plugin data sources, including LearnPress progress data, Gamify achievement records, student certificate pages, and bulk-generated club portfolio profiles.

## Live Preview

| Desktop Experience | Mobile Experience |
| --- | --- |
| <img src="assets/images/readme/desktop-preview.png" alt="Desktop preview of Pratik Shelar portfolio" width="100%" /> | <img src="assets/images/readme/mobile-preview.png" alt="Mobile preview of Pratik Shelar portfolio" width="100%" /> |

## Built With

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111)
![Three.js](https://img.shields.io/badge/Three.js-111111?style=for-the-badge&logo=threedotjs&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-538DD7?style=for-the-badge&logo=fontawesome&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white)

</div>

## Experience Highlights

| Feature | Details |
| --- | --- |
| Responsive UI | Desktop, tablet, and mobile layouts with dedicated responsive styling |
| Interactive Hero | Animated typing text, profile panel, project stats, and action buttons |
| Theme Toggle | Light and dark theme support with local storage persistence |
| Visual Effects | Three.js background, particles, reveal animations, and custom cursor |
| Project Showcase | Real screenshots, tech tags, GitHub links, and live project link |
| Experience Proof | Originedge Technology internship section with React, REST API, and Git workflow details |
| Academic Proof | Scorecard PDFs, institution images, certificates, and resume download |
| JSON Automation Demo | Batch-ready student portfolio mapping section for GEMA-style records |
| Contact Flow | Professional mail draft opens on Send Message with recruiter/interviewer details |

## Portfolio Sections

### About

<img src="assets/images/readme/about-section.png" alt="About section preview" width="100%" />

The about section introduces my developer profile, internship focus, student details, college information, interests, and strongest recruiter signals.

### Academics

<img src="assets/images/readme/academics-section.png" alt="Academics section preview" width="100%" />

| Education | Institution | Status |
| --- | --- | --- |
| B.Tech CSE (AI) | G.H. Raisoni College of Engineering and Management, Pune | Current CGPA 7.99/10 |
| HSC | SCSV Belwandi BK | Scorecard included |
| SSC | Shri Chhatrapati Shivaji Vidyalaya, Belwandi BK | Scorecard included |

### Automation

The automation section demonstrates how student records can be generated from JSON data while keeping the same UI template. It includes a workflow, supported field map, sample student records, and WordPress LMS readiness notes for LearnPress/Gamify-style integrations.

### Experience

The experience section highlights my ongoing Web Developer Intern work at Originedge Technology, including React.js components, REST API integration, frontend debugging, browser-state testing, Git/GitHub updates, and mentor feedback cycles.

### Development Journey

<img src="assets/images/readme/participation-section.png" alt="Development journey section preview" width="100%" />

This section presents practical learning areas such as internship tasks, web development, backend APIs, database work, MVC architecture, and C++ DSA practice.

### Achievements

<img src="assets/images/readme/achievements-section.png" alt="Achievements section preview" width="100%" />

- Solved 150+ DSA problems using C++.
- Built multiple frontend, CRUD, API, and full-stack projects.
- Added Web Developer Intern experience at Originedge Technology.
- Earned GitHub achievements such as Quickdraw, Pull Shark, and YOLO.
- Documented project work through screenshots, tech stacks, and repository links.

### Projects

<img src="assets/images/readme/projects-section.png" alt="Projects section preview" width="100%" />

### Certificates

<img src="assets/images/readme/certificates-section.png" alt="Certificates section preview" width="100%" />

### Skills

<img src="assets/images/readme/skills-section.png" alt="Skills section preview" width="100%" />

### Blog

<img src="assets/images/readme/blog-section.png" alt="Blog section preview" width="100%" />

### Testimonials

<img src="assets/images/readme/testimonials-section.png" alt="Testimonials section preview" width="100%" />

### Contact

<img src="assets/images/readme/contact-section.png" alt="Contact section preview" width="100%" />

The contact form is configured for a professional recruiter/interviewer flow. When someone submits the form, their name, email, and message are placed into a pre-filled email draft addressed to `shelarpratik201@gmail.com` with the subject `Portfolio Contact - Interview / Internship Opportunity`.

## Featured Projects

### Maintenance Ticket Management System

<img src="assets/images/projects/maintenance-ticket-management/dashboard.png" alt="Maintenance Ticket Management dashboard" width="100%" />

Role-based facility maintenance platform with Admin, Technician, and User dashboards, 10+ ticket workflows, JWT authentication, protected routes, Prisma schema design, and MySQL persistence.

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=111111)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-111111?style=flat-square&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-111111?style=flat-square&logo=jsonwebtokens&logoColor=white)

[![Source Code](https://img.shields.io/badge/Source_Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Pratik-Ghrcemp/maintenance-ticket-management-web-application)

### WanderLust Stays

<img src="assets/images/projects/wanderlust-stays/listings-feed.png" alt="WanderLust Stays listings feed" width="100%" />

Travel listing platform with authentication, property listings, owner actions, reviews, image upload flow, location map, and cloud deployment.

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-111111?style=flat-square&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=111111)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=111111)

[![Source Code](https://img.shields.io/badge/Source_Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Pratik-Ghrcemp/WanderLust-Stays)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Render-41ead4?style=for-the-badge&logo=render&logoColor=111111)](https://wanderlust-stays-i4o9.onrender.com)

### React Weather App

<img src="assets/images/projects/react-weather-app/sunny.png" alt="React Weather App sunny preview" width="100%" />

Weather search dashboard with live API data, temperature, humidity, feels-like value, min/max data, dynamic visuals, loading states, and error handling.

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=111111)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Material UI](https://img.shields.io/badge/Material_UI-007FFF?style=flat-square&logo=mui&logoColor=white)
![OpenWeather](https://img.shields.io/badge/OpenWeather_API-EB6E4B?style=flat-square&logoColor=white)

[![Source Code](https://img.shields.io/badge/Source_Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Pratik-Ghrcemp/react-weather-app)

### Mini WhatsApp CRUD Chat App

<img src="assets/images/projects/mini-whatsapp/code-output.png" alt="Mini WhatsApp CRUD app output" width="100%" />

Server-rendered CRUD chat application with Express.js routes, MongoDB persistence, Mongoose models, EJS views, method override, timestamps, and WhatsApp-style UI.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-111111?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat-square&logo=ejs&logoColor=111111)

[![GitHub Profile](https://img.shields.io/badge/GitHub-View_Profile-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Pratik-Ghrcemp)

### Currency Converter

<img src="assets/images/projects/currency-converter/app-preview.png" alt="Currency Converter app preview" width="100%" />

API-based currency converter with live exchange rates, country flags, swap logic, dark mode, responsive UI, and API error states.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111111)
![API](https://img.shields.io/badge/API-FF6C37?style=flat-square&logo=postman&logoColor=white)

[![Source Code](https://img.shields.io/badge/Source_Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Pratik-Ghrcemp/CurrencyConverter)

### Face Recognition Attendance System

Academic attendance system with face capture, recognition, student enrollment, Tkinter interface, and MySQL attendance records.

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Tkinter](https://img.shields.io/badge/Tkinter-UI-41ead4?style=flat-square)

[![GitHub Profile](https://img.shields.io/badge/GitHub-View_Profile-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Pratik-Ghrcemp)

## Skills Snapshot

| Category | Skills |
| --- | --- |
| Languages | C++, JavaScript, SQL, Java Basic, Python Basic |
| Frontend | HTML5, CSS3, React.js, Bootstrap, Material UI, Responsive Design |
| Backend | Node.js, Express.js, REST APIs, JWT, bcrypt |
| Databases | MongoDB, Mongoose, MySQL, Prisma |
| Core CS | DSA 150+, OOP, DBMS, MVC, Authentication, Authorization |
| Tools | Git, GitHub, VS Code, Postman, Render, Netlify, Vite |
| Soft Skills | Problem Solving, Debugging, Collaboration, Quick Learning, Ownership |

## Developer Metrics

| Area | Level |
| --- | --- |
| Frontend Development | 88% |
| Backend Development | 84% |
| Database Systems | 82% |
| DSA Practice | 78% |
| Current CGPA | 7.99 / 10 |
| DSA Problems | 150+ |
| GitHub Repositories | 15+ |
| Featured Projects | 6 |

## Repository Structure

```text
pratik-shelar-portfolio/
|-- index.html
|-- README.md
|-- .gitignore
|-- docs/
|-- data/
|   `-- portfolio.json
|-- css/
|   `-- style.css
|-- js/
|   |-- main.js
|   |-- animations.js
|   |-- render-portfolio.js
|   `-- components.js
`-- assets/
    |-- docs/
    |   |-- resume/
    |   `-- scorecards/
    `-- images/
        |-- certificates/
        |-- institutions/
        |-- profile/
        |-- projects/
        `-- readme/
```

## Run Locally

```bash
git clone https://github.com/Pratik-Ghrcemp/Pratik-Shelar-Portfolio.git
cd Pratik-Shelar-Portfolio
code .
```

Open `index.html` directly in a browser, or run it with the VS Code Live Server extension.

## Deployment

This is a static portfolio, so it can be deployed easily on:

- GitHub Pages
- Netlify
- Vercel
- Render Static Sites

Recommended settings:

| Setting | Value |
| --- | --- |
| Build command | Not required |
| Publish directory | Project root |
| Entry file | `index.html` |

## GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=Pratik-Ghrcemp&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=41ead4&icon_color=ffb703" alt="Pratik Shelar GitHub stats" />

<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Pratik-Ghrcemp&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=41ead4" alt="Pratik Shelar top languages" />

<img src="https://github-readme-streak-stats.herokuapp.com/?user=Pratik-Ghrcemp&theme=tokyonight&hide_border=true&background=0D1117&stroke=41ead4&ring=ffb703&fire=ffb703&currStreakLabel=41ead4" alt="Pratik Shelar GitHub streak" />

</div>

## Connect With Me

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-Live_Website-41ead4?style=for-the-badge&logo=netlify&logoColor=111111)](https://lively-starlight-dffa3f.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Pratik--Ghrcemp-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Pratik-Ghrcemp)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Pratik_Shelar-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pratik-shelar-6b66a8286/)
[![Instagram](https://img.shields.io/badge/Instagram-pratikshelar81-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/pratikshelar81/)
[![Email](https://img.shields.io/badge/Email-shelarpratik201%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:shelarpratik201@gmail.com)

</div>

## Author

**Pratik Vijay Shelar**  
Frontend-focused MERN Developer | Computer Engineering (AI) Student | DSA Learner

## License

Copyright 2026 Pratik Vijay Shelar. All rights reserved.

<div align="center">

### Build clean. Ship sharp. Let the work speak.

</div>
