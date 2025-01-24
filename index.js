const openPopupButton = document.getElementById('openPopup');

const closePopupButton = document.getElementById('closePopup');

const popup = document.getElementById('popup');

const overlay = document.getElementById('overlay');

//Abre o Pop-Up
openPopupButton.addEventListener('click', () => {
  popup.style.display = 'block';
  overlay.style.display = 'block';
});

//fecha o Pop-Up
closePopupButton.addEventListener('click', () =>  {
  popup.style.display ='none';
  overlay.style.display = 'none';
});

//Fecha o pop-up ao clicar no fundo escurecido
overlay.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none'
});