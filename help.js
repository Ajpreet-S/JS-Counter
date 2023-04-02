const myModal = document.getElementById('helpmodal');
const myInput = document.getElementById('helpbutton');

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})