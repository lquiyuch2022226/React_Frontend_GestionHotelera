export const validateLastName = (lastName) => {
    const regex = /^\S{3,10}$/

    return regex.test(lastName)
}

export const validateLastNameMessage = 'El Last Name debe de contener entre 3 y 10 caracteres, sin espacios'