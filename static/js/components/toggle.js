// Get the checkbox element



export function showElement(toggleElement, hideElement){
    toggleElement.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (this.checked) {
            console.log('Checkbox is checked');
            hideElement.style.display = 'none';
        } else {
            console.log('Checkbox is not checked');
            hideElement.style.display = 'block';
        }
    });
}


//const checkbox = document.getElementById('hiragana-box');



