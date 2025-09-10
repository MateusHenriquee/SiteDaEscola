document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const contentSections = document.querySelectorAll('.course-info-section');
    const searchInput = document.querySelector('.search-bar input');

    function showSection(targetId) {
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
        });
        const targetSection = document.getElementById(targetId);
        const targetLink = document.querySelector(`.sidebar-link[data-target="${targetId}"]`);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        if (targetLink) {
            targetLink.classList.add('active');
        }
        const existingNoResults = document.getElementById('no-results-section');
        if (existingNoResults) {
            existingNoResults.remove();
        }
    }

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            showSection(targetId);
        });
    });

    // Código para a barra de pesquisa aprimorada
    searchInput.addEventListener('keyup', function(event) {
        const searchText = event.target.value.toLowerCase();
        
        const existingNoResults = document.getElementById('no-results-section');
        if (existingNoResults) {
            existingNoResults.remove();
        }

        if (searchText.trim() === '') {
            showSection('home-section');
            return;
        }

        let found = false;
        
        contentSections.forEach(section => {
            const sectionText = section.textContent.toLowerCase();
            if (sectionText.includes(searchText)) {
                section.classList.add('active');
                found = true;
            } else {
                section.classList.remove('active');
            }
        });

        if (!found) {
            const noResults = document.createElement('div');
            noResults.id = 'no-results-section';
            noResults.className = 'course-info-section active';
            noResults.innerHTML = '<h3>Nenhum Resultado Encontrado</h3><p>Sua pesquisa não retornou nenhum resultado nas seções do site.</p>';
            
            const mainContent = document.querySelector('main.content');
            mainContent.appendChild(noResults);
        }
    });

    // Código para os modais de login e registro
    const loginBtn = document.querySelector('.login');
    const registerBtn = document.querySelector('.register');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeBtns = document.querySelectorAll('.close-btn');

    loginBtn.addEventListener('click', () => {
        loginModal.classList.add('show');
    });

    registerBtn.addEventListener('click', () => {
        registerModal.classList.add('show');
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            loginModal.classList.remove('show');
            registerModal.classList.remove('show');
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.classList.remove('show');
        }
        if (event.target === registerModal) {
            registerModal.classList.remove('show');
        }
    });

    showSection('home-section');
});