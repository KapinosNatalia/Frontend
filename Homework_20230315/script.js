/*Создать кнопку и красный квадрат с размерами 200х200px. 
При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.*/
const buttonTask1 = document.querySelector('.task1-button')
const squareTask1 = document.querySelector('.task1-square')
buttonTask1.addEventListener('click',function(){
    squareTask1.classList.add('task1-square-changed')//toggle('task1-square-changed')
})

/* Создать кнопку и розовый квадрат с размерами 200х200px. 
При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата. */
const buttonTask2 = document.querySelector('.task2-button')
const squareTask2 = document.querySelector('.task2-square-pink')
buttonTask2.addEventListener('click',function(){
    squareTask2.classList.remove('task2-square-pink')
    squareTask2.classList.add('task2-square-blue')
    console.log(window.getComputedStyle(squareTask2).backgroundColor);
    console.log(squareTask2.style.backgroundColor);
})

/*Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.*/
const buttonTask3 = document.querySelector('.task3-button')
const squareTask3 = document.querySelector('.task3-square')
buttonTask3.addEventListener('click',function(){
    squareTask3.style.width = (parseInt(window.getComputedStyle(squareTask3).width)+20)+'px';
    squareTask3.style.height = (parseInt(window.getComputedStyle(squareTask3).height)+20)+'px';
})

/*Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный. */
const buttonTask4 = document.querySelector('.task4-button')
const divTask4 = document.querySelector('.task4-root')
buttonTask4.addEventListener('click',function(){
    pRoot = document.createElement('p')
    pRoot.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis perferendis amet tenetur nisi eum consequatur provident voluptas ratione beatae eligendi?'
    pRoot.style.backgroundColor = 'rgb(41, 70, 235)'
    divTask4.appendChild(pRoot)
})

/*Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий */
const buttonTask5 = document.querySelector('.task5-button')
const divTask5 = document.querySelector('.task5-root')
//pRoot = document.createElement('p')
//pRoot.classList.add('task5-green')
//pRoot.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis perferendis amet tenetur nisi eum consequatur provident voluptas ratione beatae eligendi?'
//buttonTask5.addEventListener('click',function(){  
//    divTask5.innerHTML += '' // без этой сроки добавляется только один параграф, то синего, то зеленого цвета. Новые параграфы не добавляются. Почему?)
//    //pRoot.style.backgroundColor = 'rgb(41, 70, 235)'
//    pRoot.classList.toggle('task5-green')
//    pRoot.classList.toggle('task5-blue')
//    divTask5.appendChild(pRoot)
//})
let currentClass = 'task5-green'
buttonTask5.addEventListener('click',function(){  
    pRoot = document.createElement('p')
    pRoot.classList.add(currentClass)
    pRoot.innerText = 'Lorem ipsum dolor sit amet'
    pRoot.classList.toggle('task5-green')
    pRoot.classList.toggle('task5-blue') 
    divTask5.appendChild(pRoot)
    currentClass = pRoot.classList[0]
})
