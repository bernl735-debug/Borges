window.addEventListener('scroll', function() {
    const h1 = document.querySelector('h1');
    const span = document.querySelector('span');
    
    if (window.scrollY > 100) {
        h1.classList.add('scrolled');
        span.classList.add('scrolled');
    } else {
        h1.classList.remove('scrolled');
        span.classList.remove('scrolled');
    }
});