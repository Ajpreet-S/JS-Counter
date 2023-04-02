// Counter object
const counter = (() => {
    // Uses closures to make these properties private
    let _count = 0;
    let _color = 'silver';
    function _setColor() {
        if (_count < 0) {
            return _color = 'red';
        } else if (_count === 0) {
            return _color = 'silver';
        }
        return _color = 'green';
    }

    // _count and _color will only be accessible by these methods in the object below
    return {
        decrement: () => {
            --_count;
            _setColor();
        },
        reset: () => {
            _count = 0;
            _setColor();
        },
        increment: () => {
            ++_count;
            _setColor();
        },
        getCount: () => _count,
        getColor: () => _color,
    }
})();

// Click listeners for the 3 buttons
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const increment = document.getElementById('increment');
decrement.addEventListener('click', () => {
    counter.decrement();
});
reset.addEventListener('click', () => {
    counter.reset();
});
increment.addEventListener('click', () => {
    counter.increment();
});

// When any counter button is clicked, change the count displayed to the user
const pageTitle = document.getElementById('pagetitle');
const countDisplay = document.getElementById('countdisplay');
[decrement, reset, increment].forEach(button => {
    button.addEventListener('click', () => {
        countDisplay.innerText = counter.getCount();
        countDisplay.style.color = counter.getColor();
        pageTitle.innerText = 'Counter | ' + counter.getCount();
    })
})

// Decrement, reset, or increment the count using keys
document.addEventListener('keydown', (event) => {
    const pressedKey = event.key;
    switch (pressedKey) {
        case 'ArrowUp':
            for(let i = 0; i < 5; i++) {
                increment.click();
            }
            increment.focus();
            break;
        case 'ArrowRight':
            increment.click();
            increment.focus();
            break;
        case 'ArrowDown':
            for(let i = 0; i < 5; i++) {
                decrement.click();
            }
            decrement.focus();
            break;
        case 'ArrowLeft':
            decrement.click();
            decrement.focus();
            break;
        case 'Backspace':
        case ' ':
            reset.click();
            reset.focus();
    }
})
