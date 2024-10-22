const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || '';
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "https://lh3.googleusercontent.com/pw/AP1GczNorvwbx2PFmNmd9ryFU0YVrsaJ6RRZXcZ1y0Fy0rFETq5GI2QRzp1yYF3N0_Lv4vF7CPaITevgngUQZF5a0TjF9Bs8TpszFxqmMIIbNsAQi1Q3_q3G=w2400";
    img.alt = "Delete Note";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage(); // Save the new note immediately
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

notesContainer.addEventListener("keyup", function(e) {
    if (e.target.classList.contains("input-box")) {
        updateStorage(); // Update storage when user types
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
