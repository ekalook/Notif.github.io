const button = document.getElementById('button')
const simples = document.getElementById('simples')


const messages = [
    'message One',
    'message Two', 
    'message Three', 
    'message Four', 
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())


function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('simple')
    notif.classList.add(type ? type : getRandomType())


    notif.innerText = message ? message : getRandomMessage()

    simples.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)
    ]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)
    ]
}
