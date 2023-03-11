//1. Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
function min(num1, num2) {
    if (num1 > num2) {
        return num2;
    } else if (num1 < num2) {
        return num1;
    } else {
        return num1;
    }
}
console.log(min(25,6));
console.log(min(6,25));
console.log(min(6,6));

//2. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
function odd(num1,num2){
    let min;
    let max;
    if (num1 < num2) {
        min = num1;
        max = num2;
    } else if (num1 > num2) {
        min = num2;
        max = num1;
    } else {
        console.log('Числа равны');
        return;
    }
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
odd(5, 20);
odd(20, 5);
odd(5, 5);

//3. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число 
//в указанной степени. Значение степени должно быть указано по умолчанию 2.
function power(num, power = 2) {
    let result = 1;
    for (let i = 1; i <= power; i++) {
        result = result * num;
    }
    return result;
}
console.log(power(2));
console.log(power(2, 1));
console.log(power(2, 4));

//4. Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
function get_sum(n) {
    let sum = 0;
    for (let i=1; i<=n; i++) {
        sum += i; 
    }
    return sum;
}
console.log(get_sum(4));
console.log(get_sum(6));

//5. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. 
//Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
function get_sum_even_odd(n, m){
    let sum_even = 0;
    let sum_odd = 0;
    const min = Math.min(n,m);
    const max = Math.max(n,m);
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            sum_even += i;
        } else {
            sum_odd += i;
        }
    }
    console.log(`Сумма четных: ${sum_even} ; сумма нечетных: ${sum_odd}`);
}
get_sum_even_odd(10, 6)

//6. Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. 
//Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.
//Пример: [ 'one', 'two', 'three' ] => 'three'
function get_longest_element(array_string) {
    let longest_element = '';
    if (array_string.length === 0) {
        return null;
    } else {
        for (let i = 0; i < array_string.length; i++) {
            if (longest_element.length < array_string[i].length) {
                longest_element = array_string[i];
            }
        }
    }
    return longest_element;
}
console.log(get_longest_element([ 'one', 'two', 'three' ] ));
console.log(get_longest_element([ 'one', '12345', 'two', 'three' ] ));
console.log(get_longest_element([ 'one', 'three', 'two', '12345' ] ));