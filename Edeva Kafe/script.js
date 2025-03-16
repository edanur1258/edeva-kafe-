// Rezervasyon Formu ve İletişim Formu işlemleri
document.addEventListener('DOMContentLoaded', function () {
    // Rezervasyon formunu işleme
    const reservationForm = document.querySelector('#reservation form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Formun normal gönderilmesini engelle

            const date = document.querySelector('#date').value;
            const time = document.querySelector('#time').value;
            const people = document.querySelector('#people').value;

            if (date && time && people) {
                alert(`Rezervasyon başarıyla alındı!\nTarih: ${date}\nSaat: ${time}\nKişi Sayısı: ${people}`);
                reservationForm.reset(); // Formu sıfırla
            } else {
                alert('Lütfen tüm alanları doldurduğunuzdan emin olun.');
            }
        });
    }

    // İletişim formunu işleme
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Formun normal gönderilmesini engelle

       
