document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in class to body after the page loads
    document.body.classList.add('fade-in');
    
    // Handle link clicks for smooth page transitions
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only if it's not the current page
            if (!this.classList.contains('active')) {
                e.preventDefault();
                const href = this.getAttribute('href');
                
                // Fade out
                document.body.classList.remove('fade-in');
                document.body.classList.add('fade-out');
                
                // Navigate after transition completes
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
});
