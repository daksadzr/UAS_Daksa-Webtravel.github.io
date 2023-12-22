var currentTime = new Date();
var hours = currentTime.getHours();

function getGreeting() {
    if (hours >= 5 && hours < 11) {
        return 'Selamat Pagi!';
    } else if (hours >= 11 && hours < 17) {
        return 'Selamat Siang!';
    } else if (hours >= 17 && hours < 19) {
        return 'Selamat Sore!';
    } else {
        return 'Selamat Malam!';
    }
}

var greeting = getGreeting();
document.getElementById('greeting').innerText = greeting;

var customerElement = document.createElement('h3');
customerElement.innerText = 'Customer Terbaik';

// jam

function updateJam() {
    var sekarang = new Date();
    var jam = sekarang.getHours();
    var menit = sekarang.getMinutes();
    var detik = sekarang.getSeconds();

    // Format waktu agar selalu dua digit (00:00:00)
    jam = (jam < 10) ? "0" + jam : jam;
    menit = (menit < 10) ? "0" + menit : menit;
    detik = (detik < 10) ? "0" + detik : detik;

    var waktuString = jam + ":" + menit + ":" + detik;

    // Menampilkan waktu di elemen dengan id "jam"
    document.getElementById("jam").innerHTML = waktuString;
}

// Memanggil fungsi updateJam setiap detik
setInterval(updateJam, 1000);

// Memanggil fungsi updateJam saat halaman dimuat untuk pertama kali
updateJam();

// Tanggal

document.addEventListener('DOMContentLoaded', function () {
    updateTanggal();
    setInterval(updateTanggal, 1000); // Update setiap detik
});

function updateTanggal() {
    let tanggalContainer = document.getElementById('tanggalUpdate');
    let sekarang = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formatTanggal = new Intl.DateTimeFormat('id-ID', options).format(sekarang);

    tanggalContainer.textContent = formatTanggal;
}
