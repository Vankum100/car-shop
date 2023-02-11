import axios from 'axios'
import chalk from 'chalk'
import * as ora from 'ora'

const url: string = "http://localhost:3001"
const formatter = (obj: any) => Object.assign(obj, {
    year: Number(obj.year),
    price: Number(obj.price),
    doors: Number(obj.doors),
    seats: Number(obj.seats),
})
export const addCar = (answers: any) => {
    (async () => {
        try {
            const spinner = ora('Adding Car ...').start();
            await axios.post(`${url}/cars`,formatter(answers));
            spinner.stop()
            console.log(chalk.magentaBright('New Car added'))
        } catch (error) {
            console.log(error)
        }
    })()
}
export const getCar = (id: string) => {
    ( async ()=>{
        try {
            const spinner = ora('Fetching Car ...').start();
            const { data: obj } = await axios.get(`${url}/cars/${id}/`)
            spinner.clear()
            spinner.stop()

            console.log(chalk.blue('==============='))
            console.log(chalk.greenBright(`id: ${obj._id} \nModel: ${obj.model} \nYear: ${obj.year} \nColor: ${obj.color} \nPrice: ${obj.price} \nSeats: ${obj.seats} \nDoors: ${obj.doors}`))

        } catch (error) {
            console.log(error)
        }
    })()
}

export const updateCar= (Car: any) => {
    (async () => {
        try {
            const spinner = ora('Updating Car ...').start();
            await axios.put(`${url}/cars/${Car.id}` , formatter(Car));
            spinner.stop()
            console.log(chalk.cyanBright('Car updated'))
        } catch (error) {
            console.log(error)
        }
    })()
}
export const deleteCar= (id: string) => {
    (async () => {
        try {
            const spinner = ora('Deleting Car ...').start();
            await axios.delete(`${url}/cars/${id}`);
            spinner.stop()
            console.log(chalk.bgMagentaBright('Car deleted'))
        } catch (error) {
            console.log(error)
        }
    })()
}
export const getCarList= () => {
    (async () => {
        try {
            const spinner = ora('Fetching All Cars ...').start();
            const { data } = await axios.get(`${url}/cars`)
            spinner.stop()

            console.log(chalk.green('**********=== Cars List===**********'))
            for (const obj of data) {
                console.log(chalk.blue('==============='))
                console.log(chalk.greenBright(`id: ${obj._id} \nModel: ${obj.model} \nYear: ${obj.year} \nColor: ${obj.color} \nPrice: ${obj.price} \nSeats: ${obj.seats} \nDoors: ${obj.doors}`))
            }
        } catch (error) {
            console.log(error)
        }
    })()
}
