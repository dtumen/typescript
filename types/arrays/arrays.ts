
const skills = ['Dev', 'DevOps', 'Testing'];

for (let skill of skills) {
    console.log(skill.toLowerCase()); // typeof skill === 'string'
}

skills
    .filter((s: string) => s !== 'Dev')