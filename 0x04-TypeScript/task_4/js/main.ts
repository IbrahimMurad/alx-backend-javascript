/* eslint-disable @typescript-eslint/triple-slash-reference */
///<reference path="subjects/Cpp.ts" />
///<reference path="subjects/React.ts" />
///<reference path="subjects/Java.ts" />

export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const react: Subjects.React = new Subjects.React();
export const java: Subjects.Java = new Subjects.Java();

export const cTeacher: Subjects.Teacher = {
	firstName: 'Guillaume',
	lastName: 'Salva',
	experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
