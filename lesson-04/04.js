/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
    const newGetDoubleStr = [];

    for (let i = 0; i < str.length; i++) {
        newGetDoubleStr.push(str[i]); // Добавляем текущий символ
        newGetDoubleStr.push(str[i]); // Добавляем текущий символ снова
    }

    return newGetDoubleStr.join(''); // Объединяем массив в строку
}
