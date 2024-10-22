// Инициализация Telegram WebApp API
Telegram.WebApp.ready();
console.log('WebApp API загружен:', Telegram.WebApp.initData);

// Получаем элементы страницы
const rateDiv = document.getElementById('rate');
const likeButton = document.getElementById('likeButton');
const dislikeButton = document.getElementById('dislikeButton');

// Функция для получения курса валют
async function getExchangeRate() {
    try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/d2d80c6b64e3aa2dfa0da11e/latest/USD');
        const data = await response.json();
        console.log('Ответ от API:', data);  // Отладка для проверки, что возвращает API

        // Проверим, есть ли данные о курсе RUB
        if (data && data.conversion_rates && data.conversion_rates.RUB) {
            const usdToRub = data.conversion_rates.RUB;
            rateDiv.textContent = `1 USD = ${usdToRub} RUB`;
        } else {
            rateDiv.textContent = 'Не удалось найти курс для RUB.';
        }
    } catch (error) {
        console.error('Ошибка:', error);  // Отладка ошибок
        rateDiv.textContent = 'Не удалось загрузить курс валют.';
    }
}

// Обработка нажатий на кнопки
likeButton.addEventListener('click', () => {
    Telegram.WebApp.showAlert('Тогда бегом менять валюту!');
});

dislikeButton.addEventListener('click', () => {
    Telegram.WebApp.showAlert('Заходи завтра');
});

// Запрашиваем курс при загрузке приложения
getExchangeRate();
