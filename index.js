// HTML elements
const countDisplay = document.getElementById('countdisplay');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const increment = document.getElementById('increment');


// Counter object
// Using closures to make _count private
const counter = (() => {
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
decrement.addEventListener('click', () => {
    counter.decrement();
});

reset.addEventListener('click', () => {
    counter.reset();
});

increment.addEventListener('click', () => {
    counter.increment();
});

[decrement, reset, increment].forEach(button => {
    button.addEventListener('click', () => {
        countDisplay.innerText = counter.getCount();
        countDisplay.style.color = counter.getColor();
    })
})

