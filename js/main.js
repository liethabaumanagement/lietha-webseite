// js/main.js
// Importiert alle Daten-Module und steuert die Interaktivität der Seite.

// Daten aus separaten Modulen importieren
import { referenceProjects } from './data/projects.js';
import { heroImages } from './data/hero-images.js';
import { referenceImages } from './data/reference-images.js';
import { teamImages } from './data/team-images.js';

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // --- DATEN für Service Modal (bleibt hier, da klein und statisch) ---
    const serviceData = {
        planung: {
            title: 'Beratung & Planung',
            icon: '<svg class="w-12 h-12 lbm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>',
            content: `<p>Eine solide Basis ist der Schlüssel zum Erfolg. Wir begleiten Sie von der ersten Idee bis zum fertigen Bauprojekt und stellen sicher, dass alle Aspekte Ihres Vorhabens sorgfältig durchdacht und geplant sind.</p><ul><li>Machbar&shy;keits&shy;studien und Grund&shy;stücks&shy;analysen</li><li>Entwicklung von Nutzungs&shy;konzepten</li><li>Detaillierte Kosten- und Termin&shy;planung</li><li>Zustands&shy;analysen bestehender Bauten</li><li>Einholung von Bau&shy;bewilligungen</li></ul>`
        },
        bauleitung: {
            title: 'Bauleitung & Realisierung',
            icon: '<svg class="w-12 h-12 lbm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2 1M4 7l2-1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>',
            content: `<p>Wir sind Ihre Augen und Ohren auf der Baustelle. Mit Präzision und Engagement steuern wir alle Prozesse, koordinieren die beteiligten Unternehmen und garantieren eine termin&shy;gerechte Umsetzung in höchster Qualität.</p><ul><li>Aus&shy;schreibung und Vergabe von Bau&shy;leistungen</li><li>Koordination aller Hand&shy;werker und Lieferanten</li><li>Kontinuierliche Qualitäts-, Kosten- und Termin&shy;kontrolle</li><li>Führung von Bau&shy;sitzungen und Protokollierung</li><li>Mängel&shy;management und Bau&shy;abnahme</li></ul>`
        },
        entwicklung: {
            title: 'Projektentwicklung',
            icon: '<svg class="w-12 h-12 lbm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
            content: `<p>Wir erkennen und schaffen Werte. Ob ungenutztes Grundstück oder sanierungs&shy;bedürftige Immobilie – wir analysieren das Potenzial, entwickeln zukunfts&shy;fähige Konzepte und schaffen die Grundlage für eine erfolgreiche Investition.</p><ul><li>Standort- und Markt&shy;analyse</li><li>Wirtschaftlich&shy;keits&shy;berechnungen</li><li>Entwicklung von Bebauungs- und Vermarktungs&shy;konzepten</li><li>Begleitung bei Investoren- und Käufer&shy;suche</li></ul>`
        },
        spezial: {
            title: 'Spezialleistungen',
            icon: '<svg class="w-12 h-12 lbm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>',
            content: `<p>Manche Aufgaben erfordern spezielles Know-how. Wir bieten Ihnen unsere Expertise für komplexe Frage&shy;stellungen rund um Ihre Immobilie – von der strategischen Beratung bis zur detaillierten Analyse.</p><ul><li>Bauherren&shy;beratung und -vertretung</li><li>Erstellung von Expertisen und Gutachten</li><li>Bau&shy;ökonomische Beratung und Kosten&shy;optimierung</li><li>Entwicklung von Immobilien&shy;strategien</li></ul>`
        }
    };
    
    // --- FUNKTIONEN ZUR INITIALISIERUNG ---
    
    function initializeMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        }
    }

    function initializeScrollAnimations() {
        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-in-up').forEach(el => fadeInObserver.observe(el));
    }

    /**
     * Erstellt robuste Picture-Quellen für Team-Bilder.
     * @param {object} imgObj - Das Bildobjekt (z.B. member.serious)
     * @param {string} type - Der Typ (z.B. 'serious' oder 'smiling')
     * @returns {string} - Das HTML für das <picture>-Element.
     */
    function createPictureSources(imgObj, type) {
        // FALLBACK: Wenn imgObj oder basename fehlt, einen Placeholder rendern.
        if (!imgObj || !imgObj.basename) {
            console.warn(`Missing image object or basename for type: ${type}`);
            return `<img src="https://placehold.co/280x350/e0e0e0/666666?text=Bild+fehlt" alt="Bild fehlt" class="${type}">`;
        }
        
        const base = `./images/team/${imgObj.basename}`;
        const formats = [
            { ext: 'avif', mime: 'image/avif' }
            // Zukünftige Formate (z.B. webp) könnten hier hinzugefügt werden
            // { ext: 'webp', mime: 'image/webp' }
        ];
        
        // Fallback auf .avif (da es das einzige optimierte Format ist)
        const fallbackSrc = `${base}.avif`;
        const altText = imgObj.alt || 'Team-Mitglied'; // Fallback für Alt-Text

        console.log(`Creating picture sources for ${imgObj.basename}, type: ${type}`);
        return `
            <picture class="${type}">
                ${formats.map(f => `<source srcset="${base}.${f.ext}" type="${f.mime}">`).join('')}
                <img src="${fallbackSrc}" alt="${altText}" onerror="this.onerror=null;this.src='https://placehold.co/280x350/e0e0e0/666666?text=Bild+fehlt';">
            </picture>
        `;
    }

    function renderTeamCards() {
        console.log('Starting to render team cards...');
        const teamContainer = document.querySelector('#team-container');
        if (!teamContainer) {
            console.error('Team container not found');
            console.log('Available team containers:', document.querySelectorAll('[id*="team"]'));
            return;
        }

        // Überprüfen, ob teamImages vorhanden und ein Array ist
        if (!teamImages || !Array.isArray(teamImages)) {
            console.error('Team images data is missing or not an array.');
            teamContainer.innerHTML = '<p>Team-Daten konnten nicht geladen werden.</p>'; // Feedback für den Benutzer
            return;
        }

        console.log('Team container found:', teamContainer);
        console.log('Number of team members:', teamImages.length);
        teamContainer.innerHTML = '';
        teamImages.forEach((member, idx) => {
            console.log(`Creating card for team member: ${member.name}`);
            const card = createTeamCard(member, idx);
            teamContainer.appendChild(card);
        });

        // Add the job card at the end
        const jobCard = document.createElement('a');
        jobCard.href = '#kontakt';
        jobCard.className = 'team-card job-card fade-in-up';
        jobCard.style.transitionDelay = `${0.1 + teamImages.length * 0.1}s`;
        jobCard.innerHTML = `
            <div class="team-static-info">
                <h4>Du?</h4>
                <p>Der/Die Neue</p>
            </div>
            <div class="team-image-container">
                <div class="job-card-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
                <div class="team-hover-info">
                    <h4 class="font-bold">Werde Teil des Teams</h4>
                    <p class="text-sm text-gray-200 mb-2">Wir suchen Verstärkung!</p>
                    <span class="block text-sm underline">Jetzt bewerben</span>
                </div>
            </div>
        `;
        teamContainer.appendChild(jobCard);
    }

    function createTeamCard(member, idx) {
        console.log(`Creating team card for ${member.name} at index ${idx}`);
        const card = document.createElement('div');
        card.className = 'team-card fade-in-up';
        card.style.transitionDelay = `${0.1 + idx * 0.1}s`;

        try {
            // Sicherstellen, dass member-Daten vorhanden sind, bevor auf sie zugegriffen wird
            const memberName = member.name || 'N/A';
            const memberRole = member.role || 'Team-Mitglied';
            const memberFullName = member.fullName || memberName;
            const memberJob = member.job || memberRole;
            const memberEmail = member.email || 'info@l-b-m.ch';
            const memberPhone = member.phone || '081 252 46 46';
            const memberPhoneLink = memberPhone.replace(/\D/g, '');

            card.innerHTML = `
                <div class="team-static-info">
                    <h4>${memberName}</h4>
                    <p>${memberRole}</p>
                </div>
                <div class="team-image-container">
                    <div class="team-image-wrapper">
                        ${createPictureSources(member.serious, 'serious')}
                        ${createPictureSources(member.smiling, 'smiling')}
                        <div class="team-hover-info">
                            <h4 class="font-bold">${memberFullName}</h4>
                            <p class="text-sm text-gray-200 mb-2">${memberJob}</p>
                            <a href="mailto:${memberEmail}" class="block text-sm hover:text-white underline">${memberEmail}</a>
                            <a href="tel:+41${memberPhoneLink}" class="block text-sm hover:text-white underline">${memberPhone}</a>
                        </div>
                    </div>
                </div>
            `;
            console.log(`Successfully created card for ${member.name}`);
        } catch (error) {
            console.error(`Error creating card for ${member.name}:`, error);
            // Selbst wenn ein Fehler auftritt, wird die leere Karte zurückgegeben,
            // um die Ausführung nicht zu blockieren, aber wir fügen einen Fehler-Fallback hinzu.
            card.innerHTML = `<div class="team-static-info"><h4>Fehler</h4><p>Karte konnte nicht geladen werden.</p></div>`;
        }
        return card;
    }

    function initializeServiceModal(data) {
        const serviceModal = document.getElementById('service-modal');
        if (serviceModal) {
            const modalCloseBtn = document.getElementById('modal-close-btn');
            const modalOverlay = document.getElementById('modal-overlay');
            const modalIconContainer = document.getElementById('modal-icon-container');
            const modalTitle = document.getElementById('modal-title');
            const modalBody = document.getElementById('modal-body');
            const openModalButtons = document.querySelectorAll('.btn-details');

            const openModal = (service) => {
                const serviceInfo = data[service];
                if (!serviceInfo) return;
                modalIconContainer.innerHTML = serviceInfo.icon;
                modalTitle.textContent = serviceInfo.title;
                modalBody.innerHTML = serviceInfo.content;
                document.body.classList.add('modal-open');
                serviceModal.classList.add('is-open');
            };
            const closeModal = () => {
                document.body.classList.remove('modal-open');
                serviceModal.classList.remove('is-open');
            };
            openModalButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const service = button.dataset.service;
                    openModal(service);
                });
            });
            // Sicherstellen, dass die Elemente existieren, bevor Listener hinzugefügt werden
            if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
            if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
        }
    }

    function initializeReferences(projects) {
        const projectListContainer = document.getElementById('project-list');
        if (!projectListContainer) return;
        
        // Sicherstellen, dass projects vorhanden und ein Array ist
        if (!projects || !Array.isArray(projects)) {
            console.error('Projects data is missing or not an array.');
            projectListContainer.innerHTML = '<p class="text-white">Referenzliste konnte nicht geladen werden.</p>';
            return;
        }

        let autoScrollInterval = null;

        const renderProjectList = () => {
            projectListContainer.innerHTML = '';
            const sortedProjects = [...projects].sort((a, b) => b.year - a.year);
            sortedProjects.forEach(project => {
                const item = document.createElement('div');
                item.className = 'project-list-item';
                // Fallback für fehlende Projektdaten
                item.innerHTML = `<h4>${project.name || 'Projekt'}, ${project.location || 'Ort'}</h4><p>${project.year || 'N/A'} &ndash; ${project.service || 'Leistung'}</p>`;
                projectListContainer.appendChild(item);
            });
        };
        
        const startAutoScroll = () => {
            stopAutoScroll();
            autoScrollInterval = setInterval(() => {
                const container = projectListContainer;
                // Sicherstellen, dass der Container noch existiert
                if (!container) {
                    stopAutoScroll();
                    return;
                }
                if (container.scrollTop >= (container.scrollHeight - container.clientHeight)) {
                    container.scrollTop = 0;
                } else {
                    container.scrollTop += 1;
                }
            }, 50);
        };

        const stopAutoScroll = () => clearInterval(autoScrollInterval);

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(startAutoScroll, 2000);
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        scrollObserver.observe(projectListContainer);
        projectListContainer.addEventListener('mouseenter', stopAutoScroll);
        projectListContainer.addEventListener('mouseleave', startAutoScroll);
        projectListContainer.addEventListener('wheel', stopAutoScroll, { passive: true });
        projectListContainer.addEventListener('touchstart', stopAutoScroll, { passive: true });

        // Initial render
        renderProjectList();
    }

    function setupSlideshow(containerSelector, imageArray, intervalDuration) {
        if (!containerSelector) {
            console.error('setupSlideshow: Missing containerSelector');
            return;
        }

        const container = document.querySelector(containerSelector);
        if (!container) {
            console.log(`Slideshow setup skipped for ${containerSelector}: Container not found.`);
            return;
        }
        
        if (!Array.isArray(imageArray) || imageArray.length === 0) {
            console.log(`Slideshow setup skipped for ${containerSelector}: No images.`);
            container.innerHTML = '<p style="color: white; padding: 1rem; text-align: center;">Bildergalerie konnte nicht geladen werden.</p>';
            return;
        }

        container.innerHTML = '';
        const transitionDuration = 1500;

        imageArray.forEach((img, index) => {
            // Sicherstellen, dass img ein gültiges Objekt ist
            if (!img || !img.basename) {
                console.warn('Skipping invalid image in slideshow:', img);
                return; // Überspringt dieses Bild
            }

            const pictureElement = document.createElement('picture');
            const sourceAvif = document.createElement('source');
            const imgElement = document.createElement('img');
            
            // Determine the correct folder based on the container
            const folder = containerSelector === '.hero-slideshow' ? 'hero' : 'references';
            const basePath = `./images/${folder}/${img.basename}`;
            
            // AVIF format
            sourceAvif.srcset = `${basePath}.avif`;
            sourceAvif.type = 'image/avif';
            
            // Final <img> fallback
            imgElement.src = `${basePath}.avif`;
            imgElement.alt = img.alt || 'Slideshow-Bild'; // Fallback für Alt-Text
            imgElement.className = 'slide-image';
            imgElement.loading = 'lazy';
            
            pictureElement.appendChild(sourceAvif);
            pictureElement.appendChild(imgElement);
            
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.appendChild(pictureElement);
            slide.setAttribute('role', 'img');
            slide.setAttribute('aria-label', img.alt || 'Slideshow-Bild');
            const animationIndex = (index % 8) + 1;
            slide.dataset.animationName = `kenburns-${animationIndex}`;
            container.appendChild(slide);
        });

        const slides = container.querySelectorAll('.slide');
        if (slides.length <= 1) {
            if (slides.length === 1) {
                slides[0].classList.add('active');
                slides[0].style.animation = `${slides[0].dataset.animationName} 15s linear infinite`;
            }
            return;
        }

        let currentSlideIndex = 0;
        const playSlide = (slideIndex) => {
            const slide = slides[slideIndex];
            if (!slide) return; // ZusätzlicheSicherheitsprüfung
            const animationDuration = (intervalDuration + transitionDuration) / 1000;
            slide.style.animation = `${slide.dataset.animationName} ${animationDuration}s linear 1 forwards`;
            slide.classList.add('active');
        };
        
        playSlide(currentSlideIndex);

        const advanceSlide = () => {
            const oldSlide = slides[currentSlideIndex];
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            playSlide(currentSlideIndex);
            if (oldSlide) {
                oldSlide.classList.remove('active');
                setTimeout(() => {
                    oldSlide.style.animation = '';
                }, transitionDuration);
            }
        };

        if (container.slideshowInterval) clearInterval(container.slideshowInterval);
        container.slideshowInterval = setInterval(advanceSlide, intervalDuration);
    }

    // --- SEITE INITIALISIEREN ---
    function init() {
        console.log('Initializing page...');
        document.body.classList.add('js-loaded');
        initializeMobileMenu();
        initializeScrollAnimations();
        
        // Initialize team cards
        console.log('About to render team cards...');
        renderTeamCards();
        
        initializeServiceModal(serviceData);
        initializeReferences(referenceProjects);
        
        // Slideshows getrennt mit den importierten Daten initialisieren
        setupSlideshow('.hero-slideshow', heroImages, 6000);
        setupSlideshow('#reference-slideshow-container', referenceImages, 5000);
    }

    // Start initialization
    init();
});
