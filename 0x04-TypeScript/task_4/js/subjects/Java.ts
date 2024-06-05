/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
///<reference path="Subject.ts" />

namespace Subjects {
	export interface Teacher {
		experienceTeachingJava?: number;
	}
	export class Java extends Subject {
		getRequirements(): string {
			return 'Here is the list of requirements for Java';
		}
		getAvailableTeacher(): string {
			if (this.teacher.experienceTeachingJava !== undefined) {
				return `Available Teacher: ${this.teacher.firstName}`;
			} else {
				return 'No available teacher';
			}
		}
	}
}