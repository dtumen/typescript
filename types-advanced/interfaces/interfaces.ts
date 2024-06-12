// 1. Объявление interface:
interface User { // => без "=" !
    name: string
    age: number
    scores: number[]
}

let user4: User = {
    name: 'John',
    age: 30,
    scores: [25, 30, 44]
}

// 2. Intersection interfaces with "extends":
interface Book {
    id: number
    title: string
    author: string
    pages: number
}

interface Student {
    studentID: number
}

interface BookHasStudent extends Student, Book {
    dateReturn: string
}

const book: BookHasStudent = {
    id: 28,
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    pages: 480,
    studentID: 1124,
    dateReturn: '25.06.2022',
}