const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const fade = document.querySelectorAll('.hidden')
const none = document.querySelectorAll('.none')
const t_left = document.querySelectorAll('.t-left');
const t_right = document.querySelectorAll('.t-right');
const t_top = document.querySelectorAll('.t-top');
const t_bottom = document.querySelectorAll('.t-bottom');


setTimeout(() => {
    none.forEach((el) => observer.observe(el))
}, 2000);

fade.forEach((el) => observer.observe(el));
t_left.forEach((el) => observer.observe(el));
t_right.forEach((el) => observer.observe(el));
t_top.forEach((el) => observer.observe(el));
t_bottom.forEach((el) => observer.observe(el));

function toggleStart() {
    const content = document.getElementById('start');
    content.style.display = 'none';
}

const profile_page = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('profile');
        } else {
            entry.target.classList.remove('profile');
        }
    });
});

const res = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('res');
        } else {
            entry.target.classList.remove('res');
        }
    });
});

const del = document.querySelectorAll('.del');

setTimeout(() => {
    del.forEach((el) => res.observe(el))
}, 3000);

setTimeout(() => {
    del.forEach((el) => profile_page.observe(el))
}, 4000);