const menuButtons = document.querySelectorAll(".main__menu-btn, .homebtn");
const langButton = document.getElementById('langBtn');

menuButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = button.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const targetTop = targetElement.offsetTop;

        window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
        });
    });
});

langButton.onclick = function () {
    langButton.textContent = "RU"
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll_anim');
        }
    });
});
observer.observe(document.querySelector('.about__bio-list'));

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('contacts_anim');
        }
    });
});
observer2.observe(document.querySelector('.contacts__links'));