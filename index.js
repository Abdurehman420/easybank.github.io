const open = document.getElementById('open');
const close = document.getElementById('close');

const sidebar = document.querySelector('.sidebar');






open.addEventListener('click' , () =>{
    sidebar.classList.add('showsidebar');
    open.classList.add('remove');
    close.classList.add('show');


})
close.addEventListener('click' , () =>{
    sidebar.classList.remove('showsidebar');
    open.classList.remove('remove');
    close.classList.remove('show');


})