/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
///<reference path="Subject.ts" />

namespace Subjects {
	export interface Teacher {
		experienceTeachingReact?: number;
	}
	export class React extends Subject {
		getRequirements(): string {
			return 'Here is the list of requirements for React';
		}
		getAvailableTeacher(): string {
			if (this.teacher.experienceTeachingReact !== undefined) {
				return `Available Teacher: ${this.teacher.firstName}`;
			} else {
				return 'No available teacher';
			}
		}
	}
}
