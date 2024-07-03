interface IUser5 {
    name: string
    age?: number
    email: string
}

type partial = Partial<IUser5>

