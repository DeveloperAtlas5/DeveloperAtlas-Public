const messageButton = document.querySelector('#messageButton')
const messageText = document.querySelector('#messageText')

messageButton.addEventListener('click', () => {
  messageText.textContent = 'You clicked the button.'
})
