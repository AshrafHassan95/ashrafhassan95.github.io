const projectsData = [
    {
        number: "01",
        title: "PEDMS-LLM Metadata Extraction System",
        image: "images/Project 1.png",
        description: "Built an advanced metadata extraction system for PETRONAS Carigali using LLM-powered document intelligence. Implemented Azure Document Intelligence for OCR and page classification, combined with Azure OpenAI for intelligent data extraction from engineering drawings and technical reports. Developed an MCP server architecture for local web deployment, enabling real-time processing and extraction of structured metadata from unstructured PDF documents.",
        link: null
    },
    {
        number: "02",
        title: "ETL Automation Pipeline – PEDMS Project",
        image: "images/Project 2.png",
        description: "Developed an end-to-end ETL automation pipeline for PETRONAS Carigali to process engineering drawings and convert unstructured PDFs into structured datasets. Implemented Azure Document Intelligence to detect, cluster, and extract key metadata. Automated the transformation workflow (JSON → CSV → Excel) with Python and Pandas, delivering analysis-ready datasets for enterprise integration.",
        link: null
    },
    {
        number: "03",
        title: "Financial Web Application",
        image: "images/Project 3.png",
        description: "Built a full-featured financial web application using Laravel, Tailwind CSS, MySQL, and Livewire to manage cooperative loans and repayments. Implemented dynamic loan creation with auto-calculated terms, AJAX-powered customer search, and a responsive admin dashboard with role-based access. Leveraged modern reactive UI components with Alpine.js.",
        link: null
    },
    {
        number: "04",
        title: "Automated Data Pipeline with Apache Airflow",
        image: "images/Project 4.png",
        description: "Designed and implemented a robust data pipeline using Apache Airflow, an open-source workflow automation tool. The goal was to automate and streamline the process of collecting, processing, and visualizing data from multiple sources, providing timely insights for decision-makers.",
        link: "https://github.com/AshrafHassan95/Data-Engineering-Projects/tree/main/Automated-Data-Pipeline-Airflow"
    },
    {
        number: "05",
        title: "Twitter Sentiment Analysis with Spark",
        image: "images/Project 5.png",
        description: "Conducted sentiment analysis on Twitter data using Apache Spark, a powerful big data processing framework. Analyzed tweets to determine public sentiment about a particular topic or event, providing valuable insights for decision-making and brand management.",
        link: "https://github.com/AshrafHassan95/Data-Engineering-Projects/tree/main/Twitter-Sentiment-Analysis-Spark"
    },
    {
        number: "06",
        title: "Data Exploration with SQL",
        image: "images/Project 6.png",
        description: "Wrote a set of SQL queries to analyze COVID-19 data from the PortfolioProject database, focusing on cases, vaccinations, and population statistics. These queries enable extraction and manipulation of data to understand infection rates, mortality percentages, vaccination coverage, and more.",
        link: "https://github.com/AshrafHassan95/PortfolioProjects/tree/main/Covid-Data-Exploration-SQL"
    },
    {
        number: "07",
        title: "Data Cleaning with SQL",
        image: "images/Project 7.png",
        description: "Focused on preparing datasets for analysis by addressing issues such as missing data, date standardization, and column parsing. These SQL queries enable efficient preprocessing and cleaning of data for further analysis or visualization.",
        link: "https://github.com/AshrafHassan95/PortfolioProjects/tree/main/Data-Cleaning-SQL"
    }
];

function createProjectCards() {
    const grid = document.getElementById('projectsGrid');
    projectsData.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-number">${project.number}</div>
            <h3>${project.title}</h3>
        `;
        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });
}

function openModal(index) {
    const project = projectsData[index];
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <div class="project-tag">Project ${project.number}</div>
        </div>
        <div class="modal-body">
            <div class="modal-image" style="background-image: url('${project.image}')"></div>
            <p>${project.description}</p>
            ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer">View Project →</a>` : ''}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openAboutModal() {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>About Me</h2>
        </div>
        <div class="modal-body">
            <div class="modal-image" style="background-image: url('images/Main.jpg')"></div>
            <p>Data Engineer at AEM Energy Solutions Sdn. Bhd. | PETRONAS Carigali Sdn Bhd</p>
            <p>Specializing in ETL pipelines, Azure cloud solutions, and data automation. Passionate about building intelligent data systems that transform raw information into actionable insights.</p>
            <a href="Ahmad Ashraf bin Hassan (Resume_2026).pdf" target="_blank">Download CV →</a>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();

    document.getElementById('modalClose').addEventListener('click', closeModal);

    document.getElementById('projectModal').addEventListener('click', (e) => {
        if (e.target.id === 'projectModal') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    document.getElementById('aboutLink').addEventListener('click', (e) => {
        e.preventDefault();
        openAboutModal();
    });
});
