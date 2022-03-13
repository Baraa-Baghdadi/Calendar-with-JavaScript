const continer = document.getElementsByClassName('continer')[0]
const input = document.getElementById('input-task') 
const upload = document.getElementsByClassName('btn')[0]
// preparing icons



// add new element when click on upload
upload.addEventListener('click',(eo) => {
    eo.preventDefault()
    const newTask = `      <div class="task">
<i class="fa-solid fa-star"></i>
<p class="mission">${input.value}</p>
<div class="two-icon">
  <i class="fa-solid fa-trash"></i>
  <i class="fa-solid fa-face-angry"></i>
</div>
</div>`
continer.innerHTML += newTask 
// empty form after click enter
input.value = ' '
})                          


// Delete task when click trash icons 
continer.addEventListener('click',(eo) => {
    if (eo.target.className =="fa-solid fa-trash") {
        eo.target.parentElement.parentElement.remove()
    }
    // put heart when click on angry
    else if (eo.target.className == 'fa-solid fa-face-angry') {
       eo.target.style.display = 'none'
       const heart = `<i class="fa-solid fa-heart"></i>`
       eo.target.parentElement.parentElement.getElementsByClassName('mission')[0].classList.add("add-line")                          
       eo.target.parentElement.innerHTML += heart 
    }
    // when click on heart
    else if (eo.target.className == 'fa-solid fa-heart') {
        eo.target.parentElement.parentElement.getElementsByClassName('mission')[0].classList.remove("add-line")
        eo.target.parentElement.getElementsByClassName('fa-solid fa-face-angry')[0].style.display = 'inline'
        eo.target.remove()
    }

    // When click on star
    else if (eo.target.className ==('fa-solid fa-star')) {
        eo.target.style.color = '#ffff009c'
        continer.prepend(eo.target.parentElement)  

    }
})

