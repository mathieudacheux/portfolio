// Changez la couleur des navLinks en fonction du click

document.querySelectorAll('.navLinks')[0].style.color = 'white';

document.querySelectorAll('.navLinks')[0].addEventListener('click', () => {
    document.querySelectorAll('.navLinks')[0].style.color = 'white';
    document.querySelectorAll('.navLinks')[1].style.color = null;
    document.querySelectorAll('.navLinks')[2].style.color = null;
})

document.querySelectorAll('.navLinks')[1].addEventListener('click', () => {
    document.querySelectorAll('.navLinks')[0].style.color = null;
    document.querySelectorAll('.navLinks')[1].style.color = 'white';
    document.querySelectorAll('.navLinks')[2].style.color = null;
})

document.querySelectorAll('.navLinks')[2].addEventListener('click', () => {
    document.querySelectorAll('.navLinks')[2].style.color = null;
    document.querySelectorAll('.navLinks')[1].style.color = null;
    document.querySelectorAll('.navLinks')[2].style.color = 'white';
})