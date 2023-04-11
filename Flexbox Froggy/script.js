const buttonElement = document.querySelector('button')

function addCSS (){
    const textAreaElement = document.querySelector('textarea')
    const csss = textAreaElement.value
    const foreFront = document.querySelector('#forefront')
    foreFront.style.cssText = csss
    console.log(foreFront)
}


buttonElement.addEventListener('click', addCSS)