/*
Файл “log.js” должен посчитать общую сумму значений свойства “count” для каждого из типов и
вывести в консоль браузера три строки в формате “count{0}={1}”, где {0} – тип объекта, {1} – сумма значений свойства “count” для данного типа.
Для подсчета суммы значений “count” не использовать напрямую свойство “count”. Получать значение через функцию объекта (getCount1, …)
*/

var firstSum = 0;
var secondSum = 0;
var thirdSum = 0;

for (var i = 0; i < 5; i++) {
	if (array[i].getCount1 != undefined){
		firstSum += array[i].getCount1();
	}
	else if (array[i].getCount2 != undefined){
		secondSum += array[i].getCount2();
	}
	else {
		thirdSum += array[i].getCount3();
	}
}
console.log("count1 = %d", firstSum);
console.log("count2 = %d", secondSum);
console.log("count3 = %d", thirdSum);

