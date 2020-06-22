*Подобное задание уже было в курсе по абстракциям с помощью данных. Теперь мы делаем то же самое, но используя объекты и методы. Нормализацию дробей делать не нужно.*

rational.js
-----------

Реализуйте и экспортируйте функцию по умолчанию, которая создает рациональное число. Рациональное число должно быть представлено объектом со следующими методами:

-   Геттер `getNumer` - возвращает числитель
-   Геттер `getDenom` - возвращает знаменатель
-   Геттер `toString` - возвращает строковое представление числа
-   `add` - складывает переданные дроби и возвращает новое рациональное число (не мутирует текущее!)

```
import make from './rational.js';

const rat1 = make(3, 9);
rat1.getNumer(); // 3
rat1.getDenom(); // 9

const rat2 = make(10, 3);

// Формула сложения: a / b + c / d = (a * d + b * c) / b * d
const rat3 = rat1.add(rat2);
rat3.toString(); // '99/27'
```