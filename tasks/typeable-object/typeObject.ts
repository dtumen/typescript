// Протипизировать json:

let info: {
    officeId: number
    isOpened: boolean
    contacts: {
        phone: string
        email: string
        address: {
            city: string
        }
    }
} = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
}

// Решение 2. С использованием type:

type AddressType = {
    city: string
}

type ContactsType = {
    phone: string
    email: string
    address: AddressType
}

type InfoType = {
    officeId: number
    isOpened: boolean
    contacts: ContactsType
}

let newInfo: InfoType = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
}