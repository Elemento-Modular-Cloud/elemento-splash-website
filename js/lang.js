const langitems_en = document.querySelectorAll("[lang=en]");
const langitems_it = document.querySelectorAll("[lang=it]");

function makeVisible(items) {
    items.forEach(item => {
        item.classList.remove("lang-disable")
    });
}

function makeInvisible(items) {
    items.forEach(item => {
        item.classList.add("lang-disable")
    });
}

function useEN() {
    makeInvisible(langitems_it);
    makeVisible(langitems_en);
}

function useIT() {
    makeInvisible(langitems_en);
    makeVisible(langitems_it);
}

var userLang = navigator.language || navigator.userLanguage;
console.log(userLang)
userLang.includes("it") ? useIT() : useEN();

console.log(langitems_it);