// 1:
type UserT = {
    name: string
    age: number
    skills: string[]
}

const user3: UserT = {
    name: 'John',
    age: 28,
    skills: ['js', 'html']
}

// 2. Intersection:
type RoleT = {
    id: number
}

type UserWithRole = UserT & RoleT;

let newUser: UserWithRole = {
    id: 1,
    name: 'John',
    age: 29,
    skills: ['css', 'react'],
}

// 3:
type MonitorType = {
    name: string
    year: number
}

type ManufacturerType = {
    name: "Logitech"
    id: number
}

type MonitorWithManufacturerType = MonitorType & ManufacturerType

const monitor: MonitorWithManufacturerType = {
    name: "Logitech",
    id: 2,
    year: 1995,
}