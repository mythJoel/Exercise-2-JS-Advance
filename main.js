let records = [];

function updateRecord() {
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    
    if (firstName && lastName && age) {
        records.push({ firstName, middleName, lastName, age });
        renderTable();
        clearInputs();
    }
}

function clearInputs() {
    document.getElementById("firstName").value = "";
    document.getElementById("middleName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
}

function renderTable() {
    const tableBody = document.getElementById("recordsTable");
    tableBody.innerHTML = "";
    records.forEach((record, index) => {
        tableBody.innerHTML += `<tr>
            <td>${record.firstName}</td>
            <td>${record.middleName}</td>
            <td>${record.lastName}</td>
            <td>${record.age}</td>
            <td>
                <button onclick="deleteRecord(${index})">Delete</button>
                <button onclick="editRecord(${index})">Edit</button>
            </td>
        </tr>`;
    });
}

function deleteRecord(index) {
    records.splice(index, 1);
    renderTable();
}

function editRecord(index) {
    document.getElementById("firstName").value = records[index].firstName;
    document.getElementById("middleName").value = records[index].middleName;
    document.getElementById("lastName").value = records[index].lastName;
    document.getElementById("age").value = records[index].age;
    deleteRecord(index);
}

function clearRecords() {
    records = [];
    renderTable();
}

function sortRecords() {
    const sortBy = document.getElementById("sortBy").value;
    const sortOrder = document.getElementById("sortOrder").value;
    records.sort((a, b) => {
        if (sortOrder === "asc") {
            return a[sortBy].localeCompare(b[sortBy]);
        } else {
            return b[sortBy].localeCompare(a[sortBy]);
        }
    });
    renderTable();
}

function saveToLocalStorage() {
    localStorage.setItem("records", JSON.stringify(records));
}