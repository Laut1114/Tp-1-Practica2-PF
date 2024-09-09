const db = '../assets/data/db.json';

const select = document.getElementById('info');

let temasInteres = [];

async function getData() {
    try {
        const r = await fetch(db);
        temasInteres = await r.json();
    } catch (error) {
        console.log(error);
    }
};

function main() {
    getData().then(() => {    
        temasInteres.forEach((info) => {
            const option = document.createElement('option');
            option.value = info.tema;
            option.textContent  = `${info.tema}`;
            select.appendChild(option);
        })
    });
}

function submitForm(event) {
    event.preventDefault();

    const form = document.querySelector('form');

    const formData = {
        usuario: form.user.value,
        contraseña: form.contra.value,
        email: form.email.value,
        direcion: form.direccion.value,
        tel: form.telefono.value,
        tema: form.info.value
    }

    console.log(formData);
}

main();
