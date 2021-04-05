const whatsApp = document.querySelectorAll('.header-mobile__whatsapp-link')

whatsApp.forEach(data => {

  const newLink = data.cloneNode(true)
  newLink.href = data.dataset.link
  newLink.target = '_blank'

  data.parentNode.replaceChild(newLink, data)
})
