
const input = document.getElementById('input');

function addingEventListener(){
    function clickAlert(){
        alert('I was touched')
    }
    input.addEventListener('click',clickAlert )
}
addingEventListener()
