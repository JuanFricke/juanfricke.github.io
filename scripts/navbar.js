// Função para carregar o conteúdo de um arquivo HTML
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o arquivo:', error));
}

// Carregar o arquivo navbar.html dentro do elemento com id "navbar"
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('templates/navbar.html', 'navbar');
});
