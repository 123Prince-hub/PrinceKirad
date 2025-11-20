// ===== Professional Search Functionality with Global Scanning =====

// Search Data Structure (Static Data)
const staticSearchData = [
    // Skills - Frontend
    {
        id: 'skill-html',
        category: 'Skills',
        title: 'HTML5',
        description: 'Modern semantic HTML markup for building accessible web applications',
        tags: ['Frontend', 'Web Development', 'Markup', 'Web', 'HTML'],
        icon: 'fab fa-html5',
        sectionId: 'skills'
    },
    {
        id: 'skill-css',
        category: 'Skills',
        title: 'CSS3',
        description: 'Advanced CSS including Flexbox, Grid, Animations, and modern design patterns',
        tags: ['Frontend', 'Styling', 'Web Development', 'Design', 'CSS'],
        icon: 'fab fa-css3-alt',
        sectionId: 'skills'
    },
    {
        id: 'skill-js',
        category: 'Skills',
        title: 'JavaScript',
        description: 'ES6+ JavaScript for interactive web applications and DOM manipulation',
        tags: ['Frontend', 'Programming', 'Web Development', 'JS', 'ECMAScript'],
        icon: 'fab fa-js',
        sectionId: 'skills'
    },
    {
        id: 'skill-react',
        category: 'Skills',
        title: 'React.js',
        description: 'Building modern, component-based user interfaces with React',
        tags: ['Frontend', 'Framework', 'JavaScript', 'UI', 'React', 'Components'],
        icon: 'fab fa-react',
        sectionId: 'skills'
    },

    // Skills - Backend
    {
        id: 'skill-python',
        category: 'Skills',
        title: 'Python',
        description: 'Full-stack Python development for web applications, AI, and automation',
        tags: ['Backend', 'Programming', 'AI', 'Machine Learning', 'Python', 'Development'],
        icon: 'fab fa-python',
        sectionId: 'skills'
    },
    {
        id: 'skill-django',
        category: 'Skills',
        title: 'Django',
        description: 'High-level Python web framework for rapid development',
        tags: ['Backend', 'Framework', 'Python', 'Web Development', 'Django'],
        icon: 'fas fa-server',
        sectionId: 'skills'
    },
    {
        id: 'skill-fastapi',
        category: 'Skills',
        title: 'FastAPI',
        description: 'Modern, fast Python framework for building APIs',
        tags: ['Backend', 'API', 'Python', 'Web Development', 'FastAPI', 'REST'],
        icon: 'fas fa-bolt',
        sectionId: 'skills'
    },

    // Skills - AI/ML
    {
        id: 'skill-genai',
        category: 'Skills',
        title: 'Generative AI',
        description: 'Building applications with GPT, LangChain, and other AI models',
        tags: ['AI', 'Machine Learning', 'GPT', 'LangChain', 'Generative', 'ChatGPT', 'LLM'],
        icon: 'fas fa-brain',
        sectionId: 'skills'
    },
    {
        id: 'skill-langchain',
        category: 'Skills',
        title: 'LangChain',
        description: 'Framework for developing applications powered by language models',
        tags: ['AI', 'Framework', 'Python', 'LLM', 'LangChain', 'NLP'],
        icon: 'fas fa-link',
        sectionId: 'skills'
    },
    {
        id: 'skill-tensorflow',
        category: 'Skills',
        title: 'TensorFlow',
        description: 'Machine learning and deep learning framework',
        tags: ['AI', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'Neural Networks'],
        icon: 'fas fa-project-diagram',
        sectionId: 'skills'
    },

    // Skills - Database
    {
        id: 'skill-sql',
        category: 'Skills',
        title: 'SQL',
        description: 'Database design and management with SQL',
        tags: ['Database', 'Backend', 'Data', 'SQL', 'Query'],
        icon: 'fas fa-database',
        sectionId: 'skills'
    },
    {
        id: 'skill-mongodb',
        category: 'Skills',
        title: 'MongoDB',
        description: 'NoSQL database for modern applications',
        tags: ['Database', 'NoSQL', 'Backend', 'MongoDB', 'Document'],
        icon: 'fas fa-database',
        sectionId: 'skills'
    },

    // Skills - Tools
    {
        id: 'skill-git',
        category: 'Skills',
        title: 'Git & GitHub',
        description: 'Version control and collaboration with Git',
        tags: ['Tools', 'Version Control', 'DevOps', 'Git', 'GitHub', 'Collaboration'],
        icon: 'fab fa-git-alt',
        sectionId: 'skills'
    },
    {
        id: 'skill-docker',
        category: 'Skills',
        title: 'Docker',
        description: 'Containerization for application deployment',
        tags: ['Tools', 'DevOps', 'Container', 'Docker', 'Deployment'],
        icon: 'fab fa-docker',
        sectionId: 'skills'
    },

    // Services
    {
        id: 'service-web',
        category: 'Services',
        title: 'Web Development',
        description: 'Custom website and web application development using modern technologies',
        tags: ['Web Development', 'Frontend', 'Backend', 'Full Stack', 'Website', 'Application'],
        icon: 'fas fa-code',
        sectionId: 'services'
    },
    {
        id: 'service-ai',
        category: 'Services',
        title: 'AI Solutions',
        description: 'Integrate AI and machine learning into your applications',
        tags: ['AI', 'Machine Learning', 'Automation', 'Integration', 'Solutions'],
        icon: 'fas fa-robot',
        sectionId: 'services'
    },
    {
        id: 'service-api',
        category: 'Services',
        title: 'API Development',
        description: 'RESTful API design and development for scalable applications',
        tags: ['API', 'Backend', 'Integration', 'REST', 'Development'],
        icon: 'fas fa-plug',
        sectionId: 'services'
    },
    {
        id: 'service-consulting',
        category: 'Services',
        title: 'Tech Consulting',
        description: 'Technical consultation for your projects and business needs',
        tags: ['Consulting', 'Strategy', 'Advisory', 'Technical', 'Business'],
        icon: 'fas fa-lightbulb',
        sectionId: 'services'
    }
];

// Global search data from DOM
let globalSearchData = [];

// Search State
let searchModal = null;
let searchInput = null;
let searchResults = null;
let searchOverlay = null;

// Initialize Search
function initializeSearch() {
    searchModal = document.getElementById('searchModal');
    searchInput = document.getElementById('searchInput');
    searchResults = document.getElementById('searchResults');
    searchOverlay = document.getElementById('searchOverlay');

    const searchBtn = document.getElementById('searchBtn');
    const searchClose = document.getElementById('searchClose');

    // Scan DOM for content
    scanDOMContent();

    // Event Listeners
    searchBtn.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);
    searchOverlay.addEventListener('click', closeSearch);
    searchInput.addEventListener('input', handleSearch);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K to open search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
        // Escape to close
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            closeSearch();
        }
    });
}

// Scan DOM for searchable content
function scanDOMContent() {
    globalSearchData = [...staticSearchData];

    // Scan Skills from .skill-item elements (skill bars)
    document.querySelectorAll('.skill-item').forEach((item, index) => {
        const skillName = item.querySelector('.skill-info span:first-child')?.textContent || '';
        const skillPercent = item.querySelector('.skill-info span:last-child')?.textContent || '';

        if (skillName) {
            const cleanName = skillName.trim();
            // Split combined skills like "Django & FastAPI" or "MongoDB & Mongoose"
            const skillNames = cleanName.split('&').map(s => s.trim()).filter(s => s);

            skillNames.forEach(name => {
                // Check if not already in static data
                if (!globalSearchData.some(item => item.title.toLowerCase() === name.toLowerCase())) {
                    // Extract keywords from skill name (e.g., "REST APIs & GraphQL" -> ["REST", "APIs", "GraphQL"])
                    const keywords = name.split(/[\s&(),]+/).filter(k => k.length > 1);

                    globalSearchData.push({
                        id: `skill-item-${index}-${name.replace(/\s+/g, '-')}`,
                        category: 'Skills',
                        title: name,
                        description: `Proficiency: ${skillPercent} - ${name} expertise`,
                        tags: ['Skill', 'Technology', ...keywords, name],
                        icon: 'fas fa-code',
                        sectionId: 'skills'
                    });
                }
            });
        }
    });

    // Scan Skills from tech icons
    document.querySelectorAll('.tech-icon').forEach((icon, index) => {
        const title = icon.querySelector('span')?.textContent || '';

        if (title && !globalSearchData.some(item => item.title.toLowerCase() === title.toLowerCase())) {
            globalSearchData.push({
                id: `tech-${index}`,
                category: 'Skills',
                title: title.trim(),
                description: `Proficient in ${title}`,
                tags: ['Technology', 'Skill', title],
                icon: icon.querySelector('i')?.className || 'fas fa-code',
                sectionId: 'skills'
            });
        }
    });

    // Scan Projects
    document.querySelectorAll('.project-card').forEach((card, index) => {
        const title = card.querySelector('h3')?.textContent || '';
        const description = card.querySelector('p')?.textContent || '';
        const tags = Array.from(card.querySelectorAll('.project-tech span')).map(t => t.textContent);

        if (title) {
            globalSearchData.push({
                id: `project-${index}`,
                category: 'Projects',
                title: title.trim(),
                description: description.trim(),
                tags: tags,
                icon: 'fas fa-project-diagram',
                sectionId: 'projects'
            });
        }
    });

    // Scan Experience/Timeline
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        const title = item.querySelector('h4')?.textContent || '';
        const company = item.querySelector('.company')?.textContent || '';
        const description = item.querySelector('p:last-child')?.textContent || '';

        if (title) {
            globalSearchData.push({
                id: `exp-${index}`,
                category: 'Experience',
                title: title.trim(),
                description: `${company} - ${description}`.trim(),
                tags: ['Experience', 'Work', company],
                icon: 'fas fa-briefcase',
                sectionId: 'experience'
            });
        }
    });

    // Scan Services
    document.querySelectorAll('.service-card').forEach((card, index) => {
        const title = card.querySelector('h3')?.textContent || '';
        const description = card.querySelector('p')?.textContent || '';

        if (title && !staticSearchData.some(item => item.title === title)) {
            globalSearchData.push({
                id: `service-scan-${index}`,
                category: 'Services',
                title: title.trim(),
                description: description.trim(),
                tags: ['Service', 'Offering'],
                icon: 'fas fa-cogs',
                sectionId: 'services'
            });
        }
    });

    console.log(`✨ Scanned ${globalSearchData.length} searchable items from DOM`);
}

function openSearch() {
    searchModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 100);
}

function closeSearch() {
    searchModal.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
    showEmptyState();
}

function showEmptyState() {
    searchResults.innerHTML = `
        <div class="search-empty">
            <i class="fas fa-search"></i>
            <p>Start typing to search...</p>
            <small style="color: var(--text-secondary); margin-top: 0.5rem; display: block;">
                Press <kbd class="search-kbd">Ctrl + K</kbd> to search anytime
            </small>
        </div>
    `;
}

// Partial word matching function
function partialMatch(text, query) {
    text = text.toLowerCase();
    query = query.toLowerCase();

    // Exact match
    if (text.includes(query)) return true;

    // Partial word match - split query into words
    const queryWords = query.split(' ').filter(w => w.length > 0);

    return queryWords.every(word => {
        // Check if any word in text starts with query word (partial)
        return text.split(' ').some(textWord =>
            textWord.startsWith(word) || textWord.includes(word)
        );
    });
}

// Calculate relevance score for sorting
function calculateRelevance(item, query) {
    let score = 0;
    const q = query.toLowerCase();

    // Exact title match (highest priority)
    if (item.title.toLowerCase() === q) score += 100;
    else if (item.title.toLowerCase().includes(q)) score += 50;
    else if (partialMatch(item.title, q)) score += 25;

    // Category match
    if (item.category.toLowerCase().includes(q)) score += 20;

    // Description match
    if (item.description.toLowerCase().includes(q)) score += 15;
    else if (partialMatch(item.description, q)) score += 8;

    // Tag matches
    item.tags.forEach(tag => {
        if (tag.toLowerCase() === q) score += 30;
        else if (tag.toLowerCase().includes(q)) score += 10;
        else if (partialMatch(tag, q)) score += 5;
    });

    return score;
}

function handleSearch(e) {
    const query = e.target.value.trim().toLowerCase();

    if (!query) {
        showEmptyState();
        return;
    }

    // Filter with partial matching
    const results = globalSearchData.filter(item => {
        const titleMatch = partialMatch(item.title, query);
        const descMatch = partialMatch(item.description, query);
        const tagMatch = item.tags.some(tag => partialMatch(tag, query));
        const categoryMatch = partialMatch(item.category, query);

        return titleMatch || descMatch || tagMatch || categoryMatch;
    });

    // Sort by relevance
    results.sort((a, b) => calculateRelevance(b, query) - calculateRelevance(a, query));

    displayResults(results, query);
}

function displayResults(results, query) {
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="search-empty">
                <i class="fas fa-search"></i>
                <p>No results found for "${query}"</p>
                <small style="color: var(--text-secondary); margin-top: 0.5rem;">Try searching for skills, projects, or services</small>
            </div>
        `;
        return;
    }

    // Group by category
    const grouped = {};
    results.forEach(item => {
        if (!grouped[item.category]) {
            grouped[item.category] = [];
        }
        grouped[item.category].push(item);
    });

    // Build HTML
    let html = '';
    Object.keys(grouped).forEach(category => {
        html += `<div class="search-category">${category} (${grouped[category].length})</div>`;

        grouped[category].forEach(item => {
            const highlightedTitle = highlightText(item.title, query);
            const highlightedDesc = highlightText(item.description, query);

            html += `
                <div class="search-item" onclick="navigateToItem('${item.sectionId}')">
                    <div class="search-item-header">
                        <div class="search-item-icon">
                            <i class="${item.icon}"></i>
                        </div>
                        <h4 class="search-item-title">${highlightedTitle}</h4>
                        <span class="search-item-badge">${item.category}</span>
                    </div>
                    <p class="search-item-description">${highlightedDesc}</p>
                    <div class="search-item-tags">
                        ${item.tags.slice(0, 5).map(tag => `<span class="search-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
        });
    });

    searchResults.innerHTML = html;
}

function highlightText(text, query) {
    // Highlight exact matches
    const words = query.toLowerCase().split(' ').filter(w => w.length > 0);
    let result = text;

    words.forEach(word => {
        const regex = new RegExp(`(${escapeRegex(word)}\\w*)`, 'gi');
        result = result.replace(regex, '<span class="search-highlight">$1</span>');
    });

    return result;
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function navigateToItem(sectionId) {
    closeSearch();

    // Smooth scroll to section
    const section = document.getElementById(sectionId);
    if (section) {
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSearch);

console.log('✨ Enhanced search with global scanning and partial matching loaded');

