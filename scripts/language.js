// Function to open the language modal
document.getElementById('open-language-modal').onclick = function() {
  document.getElementById('language-modal').style.display = 'block';
};

// Function to set the language and close the modal
function setLanguage(language) {
  // Remove the active class from all language elements
  document.querySelectorAll('[data-lang]').forEach(element => {
    element.classList.remove('active');
  });

  // Add the active class only to elements with the selected language
  document.querySelectorAll(`[data-lang="${language}"]`).forEach(element => {
    element.classList.add('active');
  });

  // Close the modal after selection
  document.getElementById('language-modal').style.display = 'none';
}

// Set default language on page load
document.addEventListener("DOMContentLoaded", function() {
  setLanguage('en'); // Default to Portuguese
});
