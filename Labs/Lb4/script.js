// Build the ruled task rows in the left-hand checklist.
document.querySelectorAll(".task-list").forEach((list) => {
    const count = Number(list.dataset.rows);
    const sectionName = list.dataset.label || "Task";

    for (let index = 1; index <= count; index += 1) {
        const row = document.createElement("div");
        row.className = "task-line";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("aria-label", `${sectionName}, item ${index} completed`);

        const text = document.createElement("input");
        text.type = "text";
        text.className = "task-text";
        text.autocomplete = "off";
        text.setAttribute("aria-label", `${sectionName}, item ${index}`);

        row.append(checkbox, text);
        list.appendChild(row);
    }
});
