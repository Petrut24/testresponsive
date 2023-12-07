/* cand se navigheaza in agina se schimba fundalul headarului*/
document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("capul")
    window.addEventListener("scroll" , function() {
        if (window.scrollY > 10) {
            header.style.backgroundColor = "#f0f8ff";
        } else {
            header.style.backgroundColor = "#5F9EA0"
        }
    })
})

/*se duce pana la zona subsol apasand pe butonul contact*/
document.getElementById('btncapcontact').addEventListener( 'click', function(){
    var targetposition = document.getElementById('subsol').offsetTop;
    window.scrollTo({
        top: targetposition,
        behavior: 'smooth'
    });
});

/*mapa interativa*/
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Aici este un marker!');

    