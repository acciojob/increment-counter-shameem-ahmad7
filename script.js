const counterElement = document.getElementById('counter');
        const incrementBtn = document.getElementById('incrementBtn');

        let counterValue = 0;

        incrementBtn.addEventListener('click', function() {
            alert(`Current value: ${counterValue}`);
            counterValue++;
            counterElement.textContent = counterValue;
        });
