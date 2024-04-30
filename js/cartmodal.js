// Ambil elemen modal dan tombol keranjang
const cartButton = document.querySelector('#cartButton');
const cartModal = document.querySelector('#cartModal');
const closeButton = cartModal.querySelector('#closeCartModal');

// Fungsi untuk menampilkan modal saat tombol keranjang diklik
cartButton.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

// Fungsi untuk menutup modal saat tombol tutup diklik
closeButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Fungsi untuk menutup modal saat klik di luar modal
window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});
