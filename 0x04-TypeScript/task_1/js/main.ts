export interface Teacher {
    readonly firstName: string; // modifiable when a teacher is first initialized
    readonly lastName: string;
    fullTimeEmployee: boolean; // Always be defined
    yearsOfExperience?: number; // Optional attribute
    location: string;
    [index:string]: any; // Ability to add any attribute
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

// Interface for a function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}


interface IstudentsClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements IstudentsClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return `${this.firstName}`;
    }

}

const student = new StudentClass('Gideon', 'Obiasor');
console.log(student);
console.log(student.displayName());
console.log(student.workOnHomework());

const director1: Directors = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
    numberOfReports: 17,
  };

  console.log(printTeacher(director1.firstName, director1.lastName));
