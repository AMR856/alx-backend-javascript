interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  [index: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

let myFunction: printTeacherFunction;
myFunction = function (firstName: string, lastName: string): string {
  return firstName[0] + ". " + lastName;
};
export default myFunction;

export interface IsStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export interface IsStudentClassConstructor {
  new (firstName: string, lastName: string): IsStudentClass;
}

export class StudentClass implements IsStudentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return `${this._firstName}`;
  }
}
