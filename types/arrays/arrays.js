"use strict";
const skills = ['Dev', 'DevOps', 'Testing'];
for (let skill of skills) {
    console.log(skill.toLowerCase()); // typeof skill === 'string'
}
skills
    .filter((s) => s !== 'Dev');
