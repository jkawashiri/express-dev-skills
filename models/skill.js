const skills = [
    {id: 1234, skill: 'HTML', acquired: true},
    {id: 4567, skill: 'CSS', acquired: true},
    {id: 8910, skill: 'JavaScript', acquired: true},
    {id: 1112, skill: 'Python', acquired: false},
    {id: 1314, skill: 'Django', acquired: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 10000
    skill.acquired = false
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function update(id, updatedSkill) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    Object.assign(skill, updatedSkill)
}