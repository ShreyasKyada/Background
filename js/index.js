
function createElement() {
    const background = document.getElementsByClassName('background')[0];
    const span = document.createElement('span');
    let size = Math.random();
    let place = Math.random() * innerWidth;

    if ((place + 20 + size) < innerWidth) {
        span.style.height = 4 + size + 'px';
        span.style.width = 4 + size + 'px';
        span.style.left = place + 'px';
        span.classList.add('big-star');
        background.appendChild(span);
        setTimeout(() => {
            span.remove();
        }, 25000);

    }
}

setInterval(() => {
    createElement();
}, 2000);


function smallStars() {
    const background = document.getElementsByClassName('background')[0];
    const span = document.createElement('span');
    let size = Math.random() * 2;
    let place = Math.random() * innerWidth;

    if ((place + size) < innerWidth) {
        span.style.height = size + 'px';
        span.style.width = size + 'px';
        span.style.left = place + 'px';
        span.classList.add('small-star');
        background.appendChild(span);
        setTimeout(() => {
            span.remove();
        }, 10000);
    }
}

setInterval(() => {
    smallStars();
}, 50);

function mediumStars() {
    const background = document.getElementsByClassName('background')[0];
    const span = document.createElement('span');
    let size = Math.random();
    let place = Math.random() * innerWidth;

    if ((place + size) < innerWidth) {
        span.style.height = 2 + size + 'px';
        span.style.width = 2 + size + 'px';
        span.style.left = place + 'px';
        span.classList.add('medium-star');
        background.appendChild(span);
        setTimeout(() => {
            span.remove();
        }, 15000);
    }
}

setInterval(() => {
    mediumStars();
}, 100);
