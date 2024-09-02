const a = prompt('выберите первый товар ')
const b = prompt('выберите второй товар ')
const c = prompt('выберите третий товар ')

const listText = []

listText.push(a)
listText.push(b)
listText.push(c)

const ul = document.querySelector('ul')
listText.forEach((product,index) => {
    const list = document.createElement('li')
    list.innerText = product
    list.classList.add(`color${index}`)
    ul.append(list)
    list.onclick = () => {
        list.innerText = 'купленно'
        list.classList.add('green')
    }
})

// const fruits = ['apple','banana','orange','mango']
// const list = document.querySelector('.list')
// list.append (fruits[0])


// fruits.forEach((el,index) => {
//     const text = document.createElement('p')
//     text.innerText = el
//     text.classList.add(`color${index}` )
//     list.append(text)

//     text.onclick = () =>{
//        text.innerText = (`вы выбрали ${el} `)
//     }
// })
