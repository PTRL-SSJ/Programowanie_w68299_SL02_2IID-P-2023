// window.onload = function Data() {
//     let d = new Date().toLocaleTimeString();
//     document.getElementById("Data").innerHTML = d;
// }

// setTimeout(function() {
//     let d = new Date().toLocaleTimeString();
//     document.getElementById("Data").innerHTML = d;
//     window.location.reload(1);
//  }, 1000);

function pokazDate() {
    var d = new Date().toLocaleTimeString();
    document.getElementById("Data").innerHTML = d;
}

setInterval(pokazDate, 1000) // setTimeout does this once, after a second it reloads site and then displays the time. setInterval() does this every second till halt