// Onload event
window.onload = function() {
    alert("Welcome to this webpage! It has loaded successfully.");
}

/* Not working Onload event! Not sure why

window.onload = () => {
    alert("Welcome to this webpage! It has loaded successfully.");
}
*/

// Confirm that user wants to unload
window.onbeforeunload = (event) => {
    return 1;
}