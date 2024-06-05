interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 18,
	location: 'USA'
};

const student2: Student = {
	firstName: 'Jane',
	lastName: 'Doe',
	age: 20,
	location: 'UK'
};

const studentList: Student[] = [student1, student2];

const theTable: HTMLTableElement = document.createElement('table');

for (const student of studentList) {
	const row: HTMLTableRowElement = theTable.insertRow();
	const cell1: HTMLTableCellElement = row.insertCell();
	const cell2: HTMLTableCellElement = row.insertCell();
	cell1.textContent = student.firstName;
	cell2.textContent = student.location;
}
