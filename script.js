const projectData = {
    bulsuspace: {
        title: 'Bulsu Space : Academic Community Social Platform',
        subtitle: 'Campus community and collaboration showcase (Capstone Project)',
        techStackDetails: 'React.js, Node.js, Firebase, JavaScript, HTML, CSS, FCM',
        repo: 'https://github.com/zildian-tablan/BulSU-Space',
        liveDemo: '#projects',
        images: [
            'Bulsuspace/Bulsuspace1.png',
            'Bulsuspace/Bulsuspace2.png',
            'Bulsuspace/Bulsuspace3.png',
            'Bulsuspace/Bulsuspace4.png',
            'Bulsuspace/Bulsuspace5.png',
            'Bulsuspace/Bulsuspace6.png',
            'Bulsuspace/Bulsuspace7.png',
            'Bulsuspace/Bulsuspace8.png',
            'Bulsuspace/Bulsuspace9.png',
        ]
    },
    cgt: {
        title: 'Core Gear Tech',
        subtitle: 'E-commerce accessory storefront concept',
        techStackDetails: 'PHP, MySQL, HTML, CSS, JavaScript',
        repo: 'https://github.com/zildian-tablan/CoreGearTech',
        liveDemo: 'https://coregeartech.freehosting.dev/',
        images: [
            'cgt/cgt1.png',
            'cgt/cgt2.png',
            'cgt/cgt3.png',
            'cgt/cgt4.png',
            'cgt/cgt5.png',
            'cgt/cgt6.png',
            'cgt/cgt7.png',
            'cgt/cgt8.png',
            'cgt/cgt9.png',
            'cgt/cgt10.png',
            'cgt/cgt11.png',
            'cgt/cgt12.png',
            'cgt/cgt13.png',
            'cgt/cgt14.png',
            'cgt/cgt15.png',
            'cgt/cgt16.png',
            'cgt/cgt17.png',
            'cgt/cgt18.png',
            'cgt/cgt19.png',
            'cgt/cgt20.png',
            'cgt/cgt21.png',
            'cgt/cgt22.png',
            'cgt/cgt23.png',
            'cgt/cgt24.png',
            'cgt/cgt25.png',
            'cgt/cgt26.png',
            'cgt/cgt27.png',
            'cgt/cgt28.png',
            'cgt/cgt29.png',
        ]
    },
    runebound: {
        title: 'RuneBound',
        subtitle: 'Game concept with action-first design',
        techStackDetails: 'Unity, C#',
        repo: 'https://github.com/zildian-tablan/Rune-Bound',
        liveDemo: 'https://zil30.itch.io/rune-bound',
        images: [
            'runebound/runebound1.png',
            'runebound/runebound2.png',
            'runebound/runebound3.png',
            'runebound/runebound4.png',
            'runebound/runebound5.png',
            'runebound/runebound6.png',
            'runebound/runebound7.png',
            'runebound/runebound8.png',
            'runebound/runebound9.png',
            'runebound/runebound10.png',
            'runebound/runebound11.png',
            'runebound/runebound12.png',
            'runebound/runebound13.png',
            'runebound/runebound14.png',
            'runebound/runebound15.png',
        ]
    },
    elevatingIQ: {
        title: 'Elevating IQ',
        subtitle: 'Interactive educational learning experience',
        techStackDetails: 'Java',
        repo: 'https://github.com/zildian-tablan/Elevating-IQ',
        liveDemo: '#projects',
        images: [
            'elevatingIQ/elevatingIQ1.png',
            'elevatingIQ/elevatingIQ2.png',
            'elevatingIQ/elevatingIQ3.png',
            'elevatingIQ/elevatingIQ4.png',
            'elevatingIQ/elevatingIQ5.png',
            'elevatingIQ/elevatingIQ6.png',
            'elevatingIQ/elevatingIQ7.png',
            'elevatingIQ/elevatingIQ8.png',
        ]
    },
    titancruise: {
        title: 'Titan Cruise Booking System',
        subtitle: 'Cruise booking and trip discovery system',
        techStackDetails: 'Java',
        repo: 'https://github.com/zildian-tablan/TITAN-Cruise',
        liveDemo: '#projects',
        images: [
            'TitanCruise/TitanCruise1.png',
            'TitanCruise/TitanCruise2.png',
            'TitanCruise/TitanCruise3.png',
            'TitanCruise/TitanCruise4.png',
            'TitanCruise/TitanCruise5.png',
            'TitanCruise/TitanCruise6.png',
            'TitanCruise/TitanCruise7.png',
            'TitanCruise/TitanCruise8.png',
            'TitanCruise/TitanCruise9.png',
            'TitanCruise/TitanCruise10.png',
            'TitanCruise/TitanCruise11.png',
            'TitanCruise/TitanCruise12.png',
            'TitanCruise/TitanCruise13.png',
            'TitanCruise/TitanCruise14.png',
            'TitanCruise/TitanCruise15.png',
        ]
    },
};

document.querySelectorAll('[data-project]').forEach(button => {
    button.addEventListener('click', () => {
        const data = projectData[button.dataset.project];

        if (!data) return;

        document.getElementById('projectModalTitle').textContent = data.title;
        document.getElementById('projectModalSubtitle').textContent = data.subtitle;

        const modalTechStack = document.getElementById('projectModalTechStack');
        const isBulsuSpace = button.dataset.project === 'bulsuspace';
        modalTechStack.innerHTML = `
            <span class="project-modal-label">Tech Stack</span>
            <p>${data.techStackDetails}</p>
            ${isBulsuSpace ? '<p class="project-modal-note">I can’t share a public link for this project due to privacy purposes.</p>' : ''}
        `;

        const modalActions = document.getElementById('projectModalActions');
        const showLiveDemo = button.dataset.project === 'cgt' || button.dataset.project === 'runebound';
        modalActions.innerHTML = `
            <a class="project-modal-link" href="${data.repo}" target="_blank" rel="noopener">Repo</a>
            ${showLiveDemo ? `<a class="project-modal-link" href="${data.liveDemo}" target="_blank" rel="noopener">Live demo</a>` : ''}
        `;

        const carouselInner = document.getElementById('projectCarouselInner');
        carouselInner.innerHTML = data.images.map((image, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${image}" class="d-block w-100" alt="${data.title} preview ${index + 1}">
            </div>
        `).join('');

        const modal = new bootstrap.Modal(document.getElementById('projectModal'));
        modal.show();
    });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.getElementById('currentYear').textContent = new Date().getFullYear();
