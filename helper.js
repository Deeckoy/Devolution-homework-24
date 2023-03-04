const allButtons = document.querySelectorAll('button')

allButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    event.target.classList.add('active')
  })
})
