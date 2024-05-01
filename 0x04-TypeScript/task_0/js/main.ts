interface Student{
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}


const student1: Student = {
                  firstName: "Amr",
                  lastName: "Alnas",
                  age: 20,
                  location: "Alexandria"
};

const student2: Student = {
                  firstName: "Hassan",
                  lastName: "Alaa",
                  age: 20,
                  location: "Alexandria"
};

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
table.id = "myTable";
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = tbody.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();

  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});

table.appendChild(tbody);
