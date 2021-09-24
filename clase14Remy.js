let dolares = []
let clientes = []

divDolar = document.getElementById("divDolar")
divClientes = document.getElementById("divClientes")

document.getElementById("btn1").addEventListener("click", () => {
    fetch('https://criptoya.com/api/dolar')
    .then(response => response.json())
    .then(data => {
        for (let dolar in data) {
            if(dolar != "time") {
                divDolar.innerHTML += `
                <p id="${dolar}">${dolar} ${data[dolar]}</p>
            `
                dolares.push({tipo: dolar, valor: data[dolar]})
            }
        }
    })
    .catch(error => console.error(error))
})

console.log(dolares)


document.getElementById("btn2").addEventListener("click", () => {
//    fetch('usuarios.json')
    fetch ("usuarios.json", {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (cliente of data) {
            console.log(cliente._id)
            divClientes.innerHTML += `
                <div id="${cliente._id}"> 
                    <h2>Cliente/a N°: ${cliente.index} </h2>
                    <p>Nombre: ${cliente.name} </p>
                    <p>Edad: ${cliente.age} </p>
                    <p>Balance: ${cliente.balance} </p>
                </div>
            ` 
            clientes.push(cliente)
        }
        
    })
})

console.log(clientes)