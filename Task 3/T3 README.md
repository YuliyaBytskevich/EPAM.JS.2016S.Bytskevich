<h2>Task 3</h2>

![required layout](https://cloud.githubusercontent.com/assets/8768089/17976878/fe1f1992-6af7-11e6-8577-ffaaadc4babe.png)

Создать страницу, содержащую два контейнера: контейнер для заполнения (поле) и контейнер для кнопок. Для всех кнопок курсор мыши должен быть установлен в “pointer”.

При нажатии на кнопку <Generate> поле должно заполняться небольшими блоками. Количество: не менее 50, размер: примерно 50px*50px. Каждый блок должен отображать случайное число от 1 до 100.

При нажатии на кнопку <Set color> блоки должны заполнятся цветом в зависимости от содержащегося в них числа: для значений более 75 – красный (#f44336), более 50 – оранжевый (#ff9800), более 25 – зеленый (#4caf50).

При нажатии на кнопку <Reset> поле должно очищаться, т.е. должны удалятся все блоки в нем.
Если при нажатии на кнопку <Generate> поле уже заполнено, то необходимо сначала очистить его, а затем заполнить заново.

Не обязательное задание (*):
Запретить выполнять следующие действия:
1)	Нажимать кнопку <Generate> если поле заполнено. Должно быть визуально видно, что кнопка недоступна и курсор мыши не должен быть “pointer”.
2)	Нажимать кнопку <Set color> если поле не заполнено или блоки уже заполнены цветом
3)	Нажимать кнопку <Reset> если поле не заполнено