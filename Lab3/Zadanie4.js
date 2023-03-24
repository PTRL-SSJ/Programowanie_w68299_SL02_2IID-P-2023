window.onload = function Data() {
    let d = new Date().toLocaleTimeString();
    document.getElementById("Data").innerHTML = d;
}

setTimeout(function() {
    let d = new Date().toLocaleTimeString();
    document.getElementById("Data").innerHTML = d;
    window.location.reload(1);
 }, 1000);