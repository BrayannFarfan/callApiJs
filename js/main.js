const container = document.getElementById('container')
const url = 'https://jsonplaceholder.typicode.com/users'; 



function getData(){
    fetch(url)
    .then(response => response.json())
    .then(json => { 
        printData(json)
    })
}

function printData(json){
    json.forEach(user => {
        const address = user.address
        const div = document.createElement('div')
        div.classList.add("item")
        div.innerHTML = `
            <p class="name">${user.name}</p>
            <p class="email">${user.email}</p>
            <p class="city">${address.city}</p>
            <span class="street">${address.street}</span>
            <span class="suite">${address.suite}</span>
        `
        container.appendChild(div)
    });
}

getData()