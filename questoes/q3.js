function createSelectAndTextArea() {
  const fieldset = document.querySelector('form#conversion-from-new-model')[0]

  const categorySelect = document.createElement('select')
  categorySelect.style.width = '100%'
  categorySelect.style.padding = '.9375rem .75rem'
  categorySelect.style.borderRadius = '0.25rem'
  categorySelect.style.backgroundColor = 'white'

  const category = ['SUV', 'Sedan', 'Hatch', 'Pickup']
  category.forEach(category => {
    const option = document.createElement('option')
    option.text = category
    categorySelect.add(option)
  })

  const textArea = document.createElement('textarea')
  textArea.style.width = '100%'
  textArea.style.padding = '.9375rem .75rem'
  textArea.style.borderRadius = '0.25rem'
  textArea.style.marginTop = '10px'
  textArea.placeholder = 'Mensagem'

  fieldset.append(categorySelect)
  fieldset.append(textArea)
}

createSelectAndTextArea()
