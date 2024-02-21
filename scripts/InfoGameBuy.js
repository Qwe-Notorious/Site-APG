// Создание функции
Iformation_BuyGame()

function Iformation_BuyGame() {
    // Находим элементы на страцине 
    var modal = document.getElementById('popo');
    var bntLernMore = document.getElementsByClassName('game');
    var span = document.getElementsByClassName('close-1')[0];


    for (var i = 0; i < bntLernMore.length; i++) {
        bntLernMore[i].addEventListener('click', function() {
          openModalWindow();
        })
      }

    function openModalWindow() {
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