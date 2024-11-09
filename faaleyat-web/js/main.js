document.addEventListener('DOMContentLoaded', function() {
    const heroTextElements = document.querySelectorAll('.hero-text h1');

    heroTextElements.forEach(element => {
        const text = element.innerHTML;
        element.innerHTML = '';

        let index = 0;

        text.split(/(<[^>]+>| )/g).forEach((part) => {
            if (part.startsWith('<') && part.endsWith('>')) {
                element.innerHTML += part;
            } else {
                if (part.includes('EVENTS')) {
                    setTimeout(() => {
                        const eventsSpan = document.createElement('span');
                        eventsSpan.classList.add('highlight');
                        eventsSpan.innerHTML = 'EVENTS';
                        eventsSpan.style.color = '#220f4c';
                        element.appendChild(eventsSpan);

                        setTimeout(() => {
                            eventsSpan.style.color = '';
                        }, 300);
                    }, index * 30 + 100);
                } else {
                    part.split('').forEach((char) => {
                        const span = document.createElement('span');
                        span.innerHTML = char === ' ' ? '&nbsp;' : char;
                        span.style.setProperty('--char-index', index);
                        element.appendChild(span);
                        index++;
                    });
                }
            }
        });
    });

    const paragraph = document.querySelector('.hero-text p');
    setTimeout(() => {
        paragraph.style.opacity = '1';
        paragraph.style.transform = 'translateY(0)';
    }, 1500);

    const navbar = document.querySelector('.navbar-home');
    navbar.style.opacity = '0';
    navbar.style.transform = 'translateY(-20px)';
    navbar.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

    setTimeout(() => {
        navbar.style.opacity = '1';
        navbar.style.transform = 'translateY(0)';
    }, 400);

    const image = document.querySelector('.hero-image');
    image.style.opacity = '0';
    image.style.transform = 'scale(0)';
    image.style.borderRadius = '50%';

    setTimeout(() => {
        image.style.opacity = '1';
        image.style.transform = 'scale(1)';
        image.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

        let scale = 1;
        const pulseInterval = setInterval(() => {
            if (scale >= 1.05) {
                scale = 1;
            } else {
                scale += 0.007;
            }
            image.style.transform = `scale(${scale})`;
        }, 85);

        setTimeout(() => {
            clearInterval(pulseInterval);
            image.style.transform = 'scale(1)';
        }, 2000);
    }, 200);

    const heroButton = document.querySelector('.cta');
    heroButton.style.opacity = '0';
    heroButton.style.transition = 'opacity 0.5s ease-out, transform 0s ease-out';

    setTimeout(() => {
        heroButton.style.opacity = '1';
        heroButton.style.transform = 'translateY(0)';
    }, 2000);

    heroButton.addEventListener('mouseover', () => {
        heroButton.style.transform = 'scale(1.05)';
    });
    heroButton.addEventListener('mouseout', () => {
        heroButton.style.transform = 'scale(1)';
    });
});
