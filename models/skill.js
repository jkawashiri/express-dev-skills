const skills = [
    {id: 1234, skill: 'HTML', acquired: true},
    {id: 4567, skill: 'CSS', acquired: true},
    {id: 8910, skill: 'JavaScript', acquired: true},
    {id: 1112, skill: 'Python', acquired: false},
    {id: 1314, skill: 'Django', acquired: false}
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}