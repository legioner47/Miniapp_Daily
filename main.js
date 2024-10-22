// Инициализация Telegram WebApp API
Telegram.WebApp.ready();

// Получаем элемент textarea и кнопку сохранения
const note = document.getElementById('note');
const saveButton = document.getElementById('saveButton');

// Функция для загрузки сохраненной заметки
function loadNote() {
    const savedNote = localStorage.getItem('telegramNote');
    if (savedNote) {
        note.value = savedNote;
    }
}

// Функция для сохранения заметки
function saveNote() {
    const noteContent = note.value;
    localStorage.setItem('telegramNote', noteContent);
    Telegram.WebApp.showAlert('Заметка сохранена!');
}

// Загрузка заметки при открытии приложения
loadNote();

// Обработка события нажатия на кнопку сохранения
saveButton.addEventListener('click', saveNote);
