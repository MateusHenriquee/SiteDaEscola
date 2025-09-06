document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const contentSections = document.querySelectorAll('.course-info-section');

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
    }

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            showSection(targetId);
        });
    });

    // Código para a barra de pesquisa
    const searchInput = document.querySelector('.search-bar input');
    const studentsList = document.querySelector('.students-list');
    const studentItems = studentsList.querySelectorAll('li');

    searchInput.addEventListener('keyup', function(event) {
        const searchText = event.target.value.toLowerCase();
        
        showSection('alunos-section');
        
        studentItems.forEach(item => {
            const studentName = item.textContent.toLowerCase();
            if (studentName.includes(searchText)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
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

    // Fechar modal ao clicar fora da caixa
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