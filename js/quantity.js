// Seleksi semua kartu produk
document.querySelectorAll('.card').forEach(productCard => {
    // Temukan tombol-tombol tambah dan kurang serta tampilan jumlah di dalam kartu
    const decreaseBtn = productCard.querySelector('.decrease-btn');
    const increaseBtn = productCard.querySelector('.increase-btn');
    const quantityDisplay = productCard.querySelector('.quantity-display');
    
    // Inisialisasi jumlah produk
    let quantity = parseInt(quantityDisplay.textContent, 10);
    
    // Fungsi untuk mengurangi jumlah produk
    const decreaseQuantity = () => {
        if (quantity > 0) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    };

    // Fungsi untuk menambah jumlah produk
    const increaseQuantity = () => {
        quantity++;
        quantityDisplay.textContent = quantity;
    };
    
    // Tambahkan event listener ke tombol kurang dan tambah
    decreaseBtn.addEventListener('click', decreaseQuantity);
    increaseBtn.addEventListener('click', increaseQuantity);
});