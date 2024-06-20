class User1 {
    skills: string[];

    constructor(skills: string[]) {
        this.skills = skills;
    }

    addSkill(skill: string): void;
    addSkill(skill: string[]): void;
    addSkill(skill: string | string[]): void {
        if (typeof skill === 'string') {
            this.skills.push(skill);
        } else {
            this.skills.push(...skill);
        }
    }
}

const initSkills = ['javascript', 'html', 'typescript'];
const user5 = new User1(initSkills);

const severalSkills = ['redux', 'styled component', 'css'];
const oneSkill = 'react';

user5.addSkill(oneSkill);
user5.addSkill(severalSkills);