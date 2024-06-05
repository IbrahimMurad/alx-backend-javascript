/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable @typescript-eslint/no-namespace */
///<reference path="Teacher.ts" />
namespace Subjects {
	export class Subject {
		teacher: Subjects.Teacher;

		set setTeacher(teacher: Subjects.Teacher) {
			this.teacher = teacher;
		}
	}
}