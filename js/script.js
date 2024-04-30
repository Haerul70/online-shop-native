// Mendapatkan referensi elemen-elemen dari DOM
let toggleSidebar = document.querySelector('#menu-toggle');
let navigasi = document.querySelector('#sidebar');
// Atur event listener untuk toggle sidebar
toggleSidebar.addEventListener('click', function() {
    toggleSidebar.classList.toggle('bi-x');
    navigasi.classList.toggle('open');
});
