function setTextSize(size) {
    // Remove selected class from all text size options
    document.querySelectorAll('.settings-option:first-child .settings-item').forEach(item => {
        item.classList.remove('selected');
    });

    // Add selected class to clicked option
    event.target.classList.add('selected');

    // Apply text size
    const content = document.querySelector('.content');
    if (size === 'small') {
        content.style.fontSize = '0.8rem';
    } else if (size === 'standard') {
        content.style.fontSize = '1rem';
    } else if (size === 'large') {
        content.style.fontSize = '1.2rem';
    }
}

function setColorMode(mode) {
    // Remove selected class from all color options
    document.querySelectorAll('.settings-option:last-child .settings-item').forEach(item => {
        item.classList.remove('selected');
    });

    // Add selected class to clicked option
    event.target.classList.add('selected');

    // Apply color mode by toggling class on body
    if (mode === 'light') {
        document.body.classList.add('light-mode');
    } else if (mode === 'dark') {
        document.body.classList.remove('light-mode');
    }
}
