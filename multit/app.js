let files = [],
button = document.querySelector('.top button'),
form = document.querySelector('form'),
container = document.querySelector('.container'),
text = document.querySelector('.inner'),
browse = document.querySelector('.select'),
input = document.querySelector('form input');


browse.addEventListener('click', () => input.click());
input.addEventListener('change', () => {
    let file = input.files;

    for (let i = 0; i < file.length; i++){
        if (files.every(e => e.name != file[i].name)) files.push(file[i])
    }

    form.reset();
    showImages();
})

const showImages = () => {
    let images = '';
    files.forEach((e, i) => {
        images += `<div class="image">
                <img src="${URL.createObjectURL(e)}" alt="image">
                <span onclick="delImages(${i})">&times;</span>
            </div>`
    })

    container.innerHTML = images;
}

const delImages = index => {
    files.splice(index, 1)
    showImages();
}

form.addEventListener('dragover', e => {
    e.preventDefault()

    form.classList.add('dragover')
    text.innerHTML = 'Glisez l\'image ici'
})

form.addEventListener('dragover', e => {
    e.preventDefault()

    form.classList.remove('dragover')
    text.innerHTML = 'Glisez l\'image ici ou <span class="select">browse</span>'
})