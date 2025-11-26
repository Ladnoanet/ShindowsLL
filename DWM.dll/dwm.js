let appisrun = false;
let a_window = document.querySelector(".THEWINDOW");
let windowHeader = a_window.querySelector(".window-header");
let a_window_title = document.getElementById("a_windowtitle");
let winmain = document.getElementById("a_windowframe");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

function openwindow(app) {
    if (!appisrun) {
        STARTPANEL.classList.remove('start-yes');
        STARTPANEL.classList.add('start-not');
        SEARCHPANEL.classList.remove('search-yes');
        SEARCHPANEL.classList.add('search-not');
        appisrun = true;

        a_window.style.minWidth = "550px";
        a_window.style.width = "auto";
        a_window.style.left = "50%";
        a_window.style.top = "50%";
        a_window.style.transform = "translate(-50%, -50%)";

        a_window.style.display = "flex";
        a_window.style.animation = "openwindows 0.2s ease forwards";

        a_window_title.textContent = app;
        if (app == 'Стор') {
            winmain.src = 'https://ladnoanet.github.io/ShStore';
        } else if (app == 'Тимс') {
            winmain.src = 'https://ladnoanet.github.io/Teams';
        } else {
            winmain.src = 'DWM.dll/apps/' + app + '.html';
        }
    }
}

function closeawindow() {
    if (appisrun) {
        appisrun = false;
        a_window.style.animation = "closewindows 0.2s ease forwards";

        setTimeout(() => {
            a_window.style.display = "none";
        }, 210);
    }
}

windowHeader.addEventListener("mousedown", (e) => {
    isDragging = true;
    const rect = a_window.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    a_window.style.transition = "none";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    a_window.style.transform = "none";
    a_window.style.left = e.clientX - offsetX + "px";
    a_window.style.top = e.clientY - offsetY + "px";
});

document.addEventListener("mouseup", () => {
    if (isDragging) {
        isDragging = false;
        a_window.style.transition = "";
    }
});

function openalert(id) {
    if (id == "sys") {
        document.getElementById("alertmessage").textContent = "Ну бля, сорри, хз, этот файл с Шиндовс f.0 так нужен, что прости уж"
        document.getElementById("alertwindow-bcg").style.display = "flex";
        document.getElementById("alertwindow-bcg").style.animation = "opalertwin 0.2s ease forwards";
        setTimeout(() => {
            document.getElementById("alertwindow-bcg").style.animation = "none";
        }, 210);
    } else if (id == "kids") {
        document.getElementById("alertmessage").textContent = "АГА БЛЯТЬ!!! ПАПОЧКА ДЕТИ??? 🤨🤨🤨🤨"
        document.getElementById("alertwindow-bcg").style.display = "flex";
        document.getElementById("alertwindow-bcg").style.animation = "opalertwin 0.2s ease forwards";
        setTimeout(() => {
            document.getElementById("alertwindow-bcg").style.animation = "none";
        }, 210);
    };
};

function closealert() {
    document.getElementById("alertwindow-bcg").style.animation = "clalertwin 0.2s ease forwards";
    setTimeout(() => {
         document.getElementById("alertwindow-bcg").style.display = "none";
    }, 210);
}