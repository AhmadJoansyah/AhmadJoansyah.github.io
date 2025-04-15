document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi animasi AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false
    });

    // Fungsi untuk loading screen
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.classList.add('hidden');
    }, 1500);

    // Efek navbar aktif
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if(link.href === currentLocation) {
            link.classList.add('active');
        }
    });

    // Tambah event listener untuk gambar galeri
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            openImageModal(img.src, img.alt);
        });
    });

    // Fungsi untuk membuka modal gambar
    function openImageModal(src, alt) {
        const modal = document.createElement('div');
        modal.classList.add('image-modal');
        
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        
        const caption = document.createElement('p');
        caption.textContent = alt;
        
        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close-btn');
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modalContent.appendChild(closeBtn);
        modalContent.appendChild(img);
        modalContent.appendChild(caption);
        modal.appendChild(modalContent);
        
        document.body.appendChild(modal);
        
        // Tutup modal saat klik di luar gambar
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
    
    // Tambah style untuk modal gambar
    const style = document.createElement('style');
    style.innerHTML = `
        .image-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            max-width: 80%;
            max-height: 80%;
            position: relative;
        }
        
        .modal-content img {
            max-width: 100%;
            max-height: 80vh;
            display: block;
            border: 2px solid white;
            border-radius: 5px;
        }
        
        .modal-content p {
            color: white;
            text-align: center;
            margin-top: 10px;
        }
        
        .close-btn {
            position: absolute;
            top: -30px;
            right: 0;
            color: white;
            font-size: 30px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // Mengganti ID dengan class untuk fleksibilitas
    const gamesList = document.querySelector('.game-list');
    const fivemContent = document.querySelector('#fivem-content');

    // Fungsi tambahan bisa ditambahkan sesuai kebutuhan
});