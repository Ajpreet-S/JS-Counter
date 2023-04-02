// Clicking the help button will now trigger the modal
const myModal = document.getElementById('helpmodal');
const myInput = document.getElementById('helpbutton');
myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})

// Pressing 'Escape' will open up the modal
document.addEventListener('keydown', (event) => {
    // Get the pressed key
    const pressedKey = event.key;

    // If the pressed key is not Escape, don't do anything
    if (pressedKey !== 'Escape') return;

    // Open the modal by clicking the help button in the navbar
    myInput.click();
});
