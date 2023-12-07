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

document.getElementById('btncapcontact').addEventListener( 'click', function(){
    var targetposition = document.getElementById('subsol').offsetTop;
    window.scrollTo({
        top: targetposition,
        behavior: 'smooth'
    });
});

function test() {
    var numeInput = getElementById ('textnume');
    var prenumeInput = getElementById ('textprenume');

    numeInput.value = "Irimia";
    prenumeInput.value = "Petrut";

    nume.readOnly = false;
    prenume.readOnly = false;
}