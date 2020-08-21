const textArea = document.querySelector("textarea");
const sentenceFirst = document.getElementById("sentence-first");
const wordFirst = document.getElementById("word-first");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const alternating = document.getElementById("alternating");
const invertedAlternating = document.getElementById("inverted-alternating");
const rot13 = document.getElementById("rot13");
const copyClipboard = document.getElementById("copyClipboard");

sentenceFirst.addEventListener("click", (e) => {
    e.preventDefault();

    let my_string = textArea.value.toLowerCase();
    my_string = my_string.split("");
    my_string[0] = my_string[0].toUpperCase();
    my_string = my_string.join("");
    textArea.value = my_string;
})

wordFirst.addEventListener("click", (e) => {
    e.preventDefault();

    let my_string = textArea.value.toLowerCase();
    my_string = my_string.split(" ");
    for (let i = 0; i < my_string.length; i++) {
        my_string[i] = my_string[i].split("");
        my_string[i][0] = my_string[i][0].toUpperCase();
        my_string[i] = my_string[i].join("")
    }

    my_string = my_string.join(" ");
    textArea.value = my_string;
})

uppercase.addEventListener("click", (e) => {
    e.preventDefault();

    let my_string = textArea.value.toLowerCase();
    my_string = my_string.toLocaleUpperCase();
    textArea.value = my_string;
})

lowercase.addEventListener("click", (e) => {
    e.preventDefault();

    let my_string = textArea.value.toLowerCase();
    textArea.value = my_string;
})

alternating.addEventListener("click", (e) => {
    e.preventDefault();

    let my_string = textArea.value.toLowerCase();
    my_string = my_string.split("");
    for (let i = 0; i < my_string.length; i++){
        if (i % 2 == 0){
            my_string[i] = my_string[i].toUpperCase();
        }
    }
    my_string = my_string.join("");
    textArea.value = my_string;
})

invertedAlternating.addEventListener("click", (e) => {
    e.preventDefault();

    let my_string = textArea.value.toLowerCase();
    my_string = my_string.split("");
    for (let i = 0; i < my_string.length; i++){
        if (i % 2 == 1){
            my_string[i] = my_string[i].toUpperCase();
        }
    }
    my_string = my_string.join("");
    textArea.value = my_string;
})

rot13.addEventListener("click", (e) => {
    e.preventDefault();

    let alfa = "abcdefghijklmnopqrstuvwxyz";

    let alfaStart = alfa.slice(0, Math.trunc(alfa.length / 2));
    let alfaEnd = alfa.slice(Math.trunc(alfa.length / 2), alfa.length);

    let my_string = textArea.value.toLowerCase();
    my_string = my_string.split("");

    for (let i = 0; i < my_string.length; i++){
        if (alfaStart.includes(my_string[i])){
            let index = alfaStart.indexOf(my_string[i]);
            my_string[i] = alfaEnd[index];
        } else if (alfaEnd.includes(my_string[i])){
            let index = alfaEnd.indexOf(my_string[i]);
            my_string[i] = alfaStart[index];
        };
    };
    
    my_string = my_string.join("");
    
    textArea.value = my_string;
})

copyClipboard.addEventListener("click", (e) => {
    e.preventDefault();

    textArea.select();
    document.execCommand("copy");
})