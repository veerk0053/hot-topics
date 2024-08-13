// Function to load the requested partial
const loadContent = (url) => {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
};

// Function to select a partial
const selectContent = (event) => {
    event.preventDefault();
    const url = event.currentTarget.getAttribute('data-partial');
    loadContent(url);
};

// Register click events for navigation links
const links = document.querySelectorAll('.nav-bar a');
links.forEach(link => {
    link.addEventListener('click', selectContent);
});

// Load default content
loadContent('partials/home.html');
