function toggleModal(event) {
  if (event.target.dataset.micromodalToggle) {
    document.querySelector('#palmeiras').classList.toggle('is-open')
  }
}

function createModal() {

  const modalTemplate = `
  <div class="modal micromodal-slide" id="palmeiras">
    <div onclick="toggleModal(event)" class="modal__overlay" tabindex="-1" data-micromodal-toggle="true">
      <div class="position-relative">
        <i class="modal__close text-white modal__overlay-close--form icon icon-close" data-micromodal-toggle="true"></i>
        <div>
          <div style="background-color: transparent;">
            <img
              width="100%"
              src="https://a.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F2029.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  `
  const modal = document.createElement('div')
  modal.innerHTML = modalTemplate.trim()

  const openModal = document.createElement('button')
  openModal.style.position = 'fixed'
  openModal.style.bottom = '1rem'
  openModal.style.left = '1rem'
  openModal.style.border = 'none'
  openModal.style.backgroundColor = 'transparent'
  openModal.style.width = '80px'
  openModal.innerHTML = `
    <img
      src="https://a.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F2029.png"
      width="100%"
      data-micromodal-toggle="true"
    />
  `.trim()
  openModal.onclick = toggleModal
  openModal.dataset.micromodalToggle = "true"

  document.body.append(modal, openModal)
}

createModal()
