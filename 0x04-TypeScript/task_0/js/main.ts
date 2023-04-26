export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Gideon',
    lastName: 'Rex',
    age: 25,
    location: 'Nigeria'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 30,
    location: 'Kenya'
};

const student3: Student = {
    firstName: 'Emma',
    lastName: 'Johnson',
    age: 16,
    location: 'Awka'
};

const styleSheet = `
table,
td {
    border: 1px solid #333;
}

body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
}

thead,
tfoot {
    background-color: #333;
    color: #fff;
}
`


const studentsList: Array<Student> = [student1, student2, student3]

function renderTable(students: Array<Student>): void {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');
    const headRow = document.createElement('tr');
    
    headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
    tableHead.insertAdjacentElement('beforeend', headRow);

    for (const student of students) {
        const {firstName, location} = student;
        const bodyRow = document.createElement('tr');
        bodyRow.insertAdjacentHTML('beforeend', `<td>${firstName}</td>`);
        bodyRow.insertAdjacentHTML('beforeend', `<td>${location}</td>`);
        tableBody.insertAdjacentElement('beforeend', bodyRow);
    };
    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);

}

renderTable(studentsList);
const stylesheet = document.createElement('style');
stylesheet.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', stylesheet);