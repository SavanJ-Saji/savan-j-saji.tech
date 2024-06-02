$w.onReady(function () {
    // TODO: wrte your page related code here... 
    automaticTime();

});

function automaticTime() {
    const today = new Date();
    const options = {
        day: "numeric",
        month: "short",
        year: "numeric"
    };

    $w("#currentDate").text = today.toLocaleDateString("en-GB", options);
    $w("#currentTime").text = today.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    setTimeout(automaticTime, 1000);
}
