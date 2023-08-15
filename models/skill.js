const skills = [
    {id: 1234, skill: 'HTML', acquired: true},
    {id: 4567, skill: 'CSS', acquired: true},
    {id: 8910, skill: 'JavaScript', acquired: true},
    {id: 1112, skill: 'Python', acquired: false},
    {id: 1314, skill: 'Django', acquired: false}
]

module.exports = {
    getAll
}

function getAll() {
    return skills
}