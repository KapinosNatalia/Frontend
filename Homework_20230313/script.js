// 1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). 
// Добавить созданные параграфы в div с классом numbers.
const numbers = document.querySelector('.numbers')
for (let i=100; i>=50; i-=10) {
    numbers.innerHTML += `
    <p>${i}</p>
    `
}

// 2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф 
// и добавляет его в div с классом strings_container. Строки взять произвольные.
const stringsArray = ['one','two','three','four','five','six','seven']
const stringsContainer = document.querySelector('.strings_container')
stringsArray.forEach(function(string){
    stringsContainer.innerHTML += `
    <p>${string}</p>
    `
})

// 3. Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - 
// и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, 
// фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.
const users = [
    {
        firstName:'Ivan',
        lastName:'Ivanov',
        age: 25
    },
    {
        firstName:'Petr',
        lastName:'Petrov',
        age: 17
    },
    {
        firstName:'Fedor',
        lastName:'Fedorov',
        age: 56
    },
    {
        firstName:'Semen',
        lastName:'Semenov',
        age: 35
    }
]
const usersContainer = document.querySelector('.users-container')
users.forEach(function(user){
    console.log(user)
    if (user.age >= 18) {
        usersContainer.innerHTML += `
        <div class="user">
            <p class="user-name">Name: ${user.firstName} ${user.lastName}</p>
            <p class="user-age">Age: ${user.age}</p>
        </div>
        `
    }
})



        