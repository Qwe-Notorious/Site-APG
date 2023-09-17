// Создание функции
Iformatiom_Charactes()

function Iformatiom_Charactes() {
    // Находим элементы на страцине 
    var modal = document.getElementById('popo');
    var bntLernMore= document.getElementById('bnt_Lern_more');
    var span = document.getElementsByClassName('close')[0];

    bntLernMore.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


}