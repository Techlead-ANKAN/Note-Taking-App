let container = document.getElementsByClassName("notes_container")[0];
console.log(container.children);
let add_btn = document.getElementsByClassName("add_notes")[0];

let i = 0;

add_btn.addEventListener("click", function() {
    if (container.children[i].childElementCount <= 4) {
        let note_box = document.createElement("textarea");
        container.children[i].insertBefore(note_box, add_btn);
    }

    if (container.children[i].childElementCount == 5) {
        let note_row = document.createElement("div");
        note_row.className = "note_row";
        container.appendChild(note_row);
        i++;
        container.children[i].appendChild(add_btn);
    }
})

