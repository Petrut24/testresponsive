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