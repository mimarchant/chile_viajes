const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('input-name');
  const subject = document.getElementById('input-subject');
  const message = document.getElementById('input-message');

  if (name.value === '' || subject.value === '' || message.value === '') {
    alert('Por favor llena todos los campos');
    return;
  }

  alert('Mensaje enviado correctamente');
});
