// Hamburguer and floating menu
const hamburguer = document.querySelector('.hamburguer-menu')
const icone = document.querySelector('.icone')
const menu = document.querySelector('.floating-menu')

hamburguer.addEventListener('click', function() {
    icone.classList.toggle('fa-bars')
    icone.classList.toggle('fa-xmark')
    menu.classList.toggle('show')
})

// Portfolio filter
const categorias = document.querySelector('.categorias')
const projects = []
projects.push(document.querySelector('.projects').children[0])
projects.push(document.querySelector('.projects').children[1])
projects.push(document.querySelector('.projects').children[2])
projects.push(document.querySelector('.projects').children[3])


for(let i = 0; i < categorias.children.length; i++){
    categorias.children[i].addEventListener('click', function() {
        if (categorias.children[i].classList.contains('selected')){
        } else {
            categorias.children[0].classList.remove('selected')
            categorias.children[1].classList.remove('selected')
            categorias.children[2].classList.remove('selected')
            categorias.children[i].classList.add('selected')
        }
        if (categorias.children[1].classList.contains('selected')){
            projects.forEach(project => {
                if(project.dataset.type!='games'){
                    project.classList.add('hidden')
                } else {
                    project.classList.remove('hidden')
                }
            })
        } else if (categorias.children[2].classList.contains('selected')) {
            projects.forEach(project => {
                if(project.dataset.type!='services'){
                    project.classList.add('hidden')
                } else {
                    project.classList.remove('hidden')
                }
            })
        } else {
            projects.forEach(project => {
                project.classList.remove('hidden')
            })
        }
    })
}