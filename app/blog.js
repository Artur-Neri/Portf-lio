const hamburguer = document.querySelector('.hamburguer-menu')
const icone = document.querySelector('.icone')
const menu = document.querySelector('.floating-menu')
const body = document.querySelector('body')

hamburguer.addEventListener('click', function() {
    icone.classList.toggle('fa-bars')
    icone.classList.toggle('fa-xmark')
    body.classList.toggle('disable-scroll')
    menu.classList.toggle('show')
})

// Filter for the Posts

const posts = document.querySelector('#posts')
const filters1 = document.querySelector('#filters')
const filters2 = document.querySelector('#filters2')
const categories = []
categories.push(filters1.children[0])
categories.push(filters1.children[1])
categories.push(filters2.children[0])
categories.push(filters2.children[1])
categories.push(filters2.children[2])

categories.forEach(category => {
    category.addEventListener('click', function(){
        if(category.dataset.filter==='all'){
            categories.forEach(item => {
                item.classList.add('selected')
                for(let i = 0; i < posts.children.length; i++){
                    posts.children[i].classList.remove('hidden')
                }
            })
        } else if (category.dataset.filter==='ptp'){
            categories.forEach(item => {
                item.classList.remove('selected')
            category.classList.add('selected')
            for(let i = 0; i < posts.children.length; i++){
                if(posts.children[i].classList.contains('ptp')){
                    posts.children[i].classList.remove('hidden') 
                } else {
                    posts.children[i].classList.add('hidden')
                }
            }
            })
        } else if (category.dataset.filter==='cc'){
            categories.forEach(item => {
                item.classList.remove('selected')
            category.classList.add('selected')
            for(let i = 0; i < posts.children.length; i++){
                if(posts.children[i].classList.contains('cc')){
                    posts.children[i].classList.remove('hidden') 
                } else {
                    posts.children[i].classList.add('hidden')
                }
            }
            })
        } else if (category.dataset.filter==='events'){
            categories.forEach(item => {
                item.classList.remove('selected')
            category.classList.add('selected')
            for(let i = 0; i < posts.children.length; i++){
                if(posts.children[i].classList.contains('events')){
                    posts.children[i].classList.remove('hidden') 
                } else {
                    posts.children[i].classList.add('hidden')
                }
            }
            })
        } else if (category.dataset.filter==='classes'){
            categories.forEach(item => {
                item.classList.remove('selected')
            category.classList.add('selected')
            for(let i = 0; i < posts.children.length; i++){
                if(posts.children[i].classList.contains('classes')){
                    posts.children[i].classList.remove('hidden') 
                } else {
                    posts.children[i].classList.add('hidden')
                }
            }
            })
        }
    })
})
