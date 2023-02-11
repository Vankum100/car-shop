export let questions: Array<Object> = [
    {
        type: 'input',
        name: 'model',
        message: 'Enter Car Model'
    },
    {
        type: 'number',
        name: 'year',
        message: 'Enter Production Year'
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter Car Color'
    },
    {
        type: 'number',
        name: 'price',
        message: 'Enter Price of Car'
    },
    {
        type: 'number',
        name: 'doors',
        message: 'Enter Number of Doors'
    },
    {
        type: 'number',
        name: 'seats',
        message: 'Enter Number of Seats'
    }
]
export let getIdQuestions: Array<Object> = [
    {
        type: 'input',
        name: 'id',
        message: 'Enter the Car ID'
    }
]
export let updateCarQuestions: Array<Object> = [
    {
        type: 'input',
        name: 'id',
        message: 'Enter the Car ID'
    },
    ...questions
]
