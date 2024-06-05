/* eslint-disable @typescript-eslint/no-unused-vars */
interface MajorCredits {
		major?: string;
		credits: number;
};

interface MinorCredits {
		minor?: string;
		credits: number;
};

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
		return {
				credits: subject1.credits + subject2.credits,
		};
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
		return {
				credits: subject1.credits + subject2.credits,
		};
}
