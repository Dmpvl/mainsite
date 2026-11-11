
function createKey(label, span = 1, extraClass = "") {
    const key = document.createElement("button");

    key.className = `key ${extraClass}`;
    key.textContent = label;
    key.style.setProperty("--span", span);

    key.addEventListener("click", () => {
        key.classList.toggle("pressed");
    });

    return key;
}

function createRow(containerId, keys) {
    const container = document.getElementById(containerId);

    keys.forEach(([label, span = 1, extraClass = ""]) => {
        if (label === "") {
            const spacer = document.createElement("div");
            spacer.className = "spacer";
            spacer.style.gridColumn = `span ${span}`;
            container.appendChild(spacer);
        } else {
            container.appendChild(
                createKey(label, span, extraClass)
            );
        }
    });
}

// Function keys
createRow("function-row", [
    ["Esc", 1],
    ["", 1],
    ["F1"], ["F2"], ["F3"], ["F4"],
    ["", 1],
    ["F5"], ["F6"], ["F7"], ["F8"],
    ["", 1],
    ["F9"], ["F10"], ["F11"], ["F12"]
]);

// Number row
createRow("number-row", [
    ["`"], ["1"], ["2"], ["3"], ["4"], ["5"], ["6"],
    ["7"], ["8"], ["9"], ["0"], ["-"], ["="],
    ["←", 3]
]);

// QWERTY row
createRow("q-row", [
    ["Tab", 2],
    ["Q"], ["W"], ["E"], ["R"], ["T"],
    ["Y"], ["U"], ["I"], ["O"], ["P"],
    ["["], ["]"], ["\\", 2]
]);

// ASDF row
createRow("a-row", [
    ["Caps", 2],
    ["A"], ["S"], ["D"], ["F"], ["G"],
    ["H"], ["J"], ["K"], ["L"],
    [";"], ["'"],
    ["Enter", 2]
]);

// ZXCV row
createRow("z-row", [
    ["Shift", 3],
    ["Z"], ["X"], ["C"], ["V"], ["B"],
    ["N"], ["M"], [","], ["."], ["/"],
    ["Shift", 3]
]);

// Bottom row
createRow("bottom-row", [
    ["Ctrl", 2],
    ["Win", 2],
    ["Alt", 2],
    ["Space", 4],
    ["Alt", 2],
    ["Win", 1],
    ["Menu", 1],
    ["Ctrl", 2]
]);

// Navigation keys
createRow("nav-grid", [
    ["PrtSc"], ["ScrLk"], ["Pause"],
    ["Ins"], ["Home"], ["PgUp"],
    ["Del"], ["End"], ["PgDn"]
]);

// Arrow keys
createRow("arrow-grid", [
    ["", 1],
    ["↑", 1, "up"],
    ["", 1],
    ["←", 1, "left"],
    ["↓", 1, "down"],
    ["→", 1, "right"]
]);

// Numeric keypad
createRow("numpad", [
    ["Num"], ["/"], ["*"], ["-"],
    ["7"], ["8"], ["9"], ["+"],
    ["4"], ["5"], ["6"], ["", 1],
    ["1"], ["2"], ["3"], ["Enter", 1, "enter"],
    ["0", 2, "zero"], ["."], ["", 1]
]);
