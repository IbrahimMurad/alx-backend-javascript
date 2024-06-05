/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
///<reference path="Subject.ts" />

namespace Subjects {
	export interface Teacher {
		experienceTeachingC: number;
	}
	export class Cpp extends Subject {
		getRequirements(): string {
			return 'Here is the list of requirements for Cpp';
		}
		getAvailableTeacher(): string {
			if (this.teacher.experienceTeachingC > 0) {
				return `Available Teacher: ${this.teacher.firstName}`;
			} else {
				return 'No available teacher';
			}
		}
	}
}