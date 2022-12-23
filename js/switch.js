const ms = document.getElementsByClassName("ms-grid");
const ps = document.getElementsByClassName("page-scroller");
const wave = document.getElementsByClassName("wave");
const footer = document.getElementsByClassName("footer")[0];
const toggle_switch = document.getElementsByClassName("switch");
const mb = document.getElementsByClassName("ms-button");

function toggle() {
    document.getElementById("switch").classList.toggle('toggle-on');
    footer.classList.toggle('footer-light');
    for (var i = 0; i < ms.length; i++) {
        ms[i].classList.toggle("ms-grid-toggle")
        //Do something
    }
    for (var l = 0; l < ps.length; l++) {
        ps[l].classList.toggle("page-scroller-light")
        //Do something
    }
    for (var j = 0; j < wave.length; j++) {
        wave[j].classList.toggle("hide-wave")
        //Do something
    }
    for (var k = 0; k < mb.length; k++) {
        mb[k].classList.toggle("ms-button-visible")
        //Do something
    }
}

let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (matched)
    toggle()