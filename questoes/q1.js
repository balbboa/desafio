const networksList = document.querySelector('.header__networks-list')

const youtube = document.createElement('a')
youtube.href = "https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ"
youtube.target = "_blank"
youtube.innerHTML = `<i class="icon icon-youtube-header icon--small icon--hover-youtube"></i>`

networksList.append(youtubeLink)
