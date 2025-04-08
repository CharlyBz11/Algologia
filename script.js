function showSection(id) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function zoomImage(img) {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeZoom() {
    document.getElementById('lightbox').style.display = 'none';
}
