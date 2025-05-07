// Обработчик для открытия попапа
document.getElementById('openPopup').addEventListener('click', function() {
  document.getElementById('overlay').classList.remove('hidden');
  document.getElementById('popup').classList.remove('hidden');
  
  // Отдаем фокус текстовому полю, что приводит к открытию клавиатуры на мобильных устройствах
  document.getElementById('popupInput').focus();
});