window.onscroll = function() { catchScroll() };

function catchScroll() {
    if (document.body.scrollTop >= 5) {
        var navbars = document.getElementsByClassName("navbar");
        for (var i = 0; i < navbars.length; i++) navbars[i].setAttribute("class", "navbar scrolled");
    }
    if (document.body.scrollTop < 5) {
        var navbars = document.getElementsByClassName("navbar");
        for (var i = 0; i < navbars.length; i++) navbars[i].setAttribute("class", "navbar");
    }
}

document.getElementsByClassName("navbar")[0].onclick = function() { openMenu() };

function openMenu() {
    if (document.getElementsByClassName("inner-container")[0].style.display == "") {
        document.getElementsByClassName("inner-container")[0].style.display = "block";
    } else {
        document.getElementsByClassName("inner-container")[0].style.display = "";
    }
}

window.setInterval (changePart, 5000);

function changePart() {
    var parts = document.getElementsByClassName("part");
    var displayStyles = [];
    for (var i = 0; i < parts.length; i++) {
        displayStyles.push(window.getComputedStyle(parts[i], null).getPropertyValue("display"));
    }
    for (var i = 0; i < parts.length; i++) {
        if (displayStyles[i] == "flex") {
            parts[i].style.display = "none";
            if (i == 3) {
                var next = 0;
            } else var next = i + 1;
            parts[next].style.display = "flex";
            switch (next) {
                case 0:
                    parts[next].style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('img/stand-for-min.jpg')";
                    break;
                case 1:
                    parts[next].style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('img/development-min.jpg')";
                    break;
                case 2:
                    parts[next].style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('img/marketing-min.jpg')";
                    break;
                case 3:
                    parts[next].style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('img/agentur-entwicklerraum-min.jpg')";
                    break;
            };
        }
    }
}
