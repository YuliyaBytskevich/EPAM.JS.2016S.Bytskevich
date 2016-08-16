/* 
Файл “init.js” должен создать массив, состоящий из 5 элементов типа Object:
Тип каждого из элементов массива определяется случайным образом (1, 2, 3).
Каждый элемент должен содержать свойство “count”, значение которого определяется случайным образом (от 1 до 10).
Также каждый элемент, в зависимости от его типа, должен содержать метод.
Для типа 1 метод должен называться “getCount1”, для типа 2 – “getCount2”, для типа 3 – “getCount3”.
Не допускается добавлять никаких других свойств и методов, кроме вышеуказанных.
При добавлении элемента в массив необходимо записывать в консоль браузера информацию о нем в формате “type={0}, count={1}”.
*/
 
 var array = [];
 var fromOneToThree;
 
 function gettingCount(){
	return this.count; 
 }
 
 for (var i = 0; i < 5; i++) {
	array[i] = { 
		count: random(1, 10)
	}
	fromOneToThree = random(1, 3);	
	switch (fromOneToThree)	{
		case 1:
			array[i].getCount1 = gettingCount;
			break
		case 2:
			array[i].getCount2 = gettingCount;
			break
		case 3:
			array[i].getCount3 = gettingCount;
	}
	console.log("type = %d, count = %d", fromOneToThree, array[i].count);
 }
 
 