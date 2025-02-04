// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Change Language and redirect to the Home section in the selected language
function changeLanguage(event) {
    const language = event.target.value; // Get the selected language
    
    // If the selected language is English or Bangla, redirect to the corresponding page and section
    if (language === 'english') {
        // Redirect to the English page at the Home section
        window.location.href = 'english.html#home';
    } else if (language === 'bangla') {
        // Redirect to the Bangla page at the Home section
        window.location.href = 'bangla.html#home';
    }
}
