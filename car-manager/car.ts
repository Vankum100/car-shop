#!/usr/bin/env node
import './polyfills'
import * as commander from 'commander'
import * as inquirer from 'inquirer'
import chalk from 'chalk'
import * as actions from './logic';
import { getIdQuestions, questions, updateCarQuestions } from './questions'

commander
    .version('1.0.0')
    .description('Car Management System')

commander
    .command('addCar')
    .alias('a')
    .description('Add a Car')
    .action(() => {
        console.log(chalk.yellow('=========*** Car Management System ***=========='))
        inquirer.prompt(questions).then((answers) => actions.addCar(answers))
    })

commander
    .command('getCar')
    .alias('g')
    .description('Get Car')
    .action(() => {
        console.log(chalk.yellow('=========*** Car Management System ***=========='))
        inquirer.prompt(getIdQuestions).then((answers) => actions.getCar(answers.id))
        
    })
commander
    .command('updateCar')
    .alias('u')
    .description('Update Car')
    .action(() => {
        console.log(chalk.yellow('=========*** Car Management System ***=========='))
        inquirer.prompt(updateCarQuestions).then((answers) => actions.updateCar(answers))
    })
commander
    .command('deleteCar')
    .alias('d')
    .description('Delete a Car')
    .action(() => {
        console.log(chalk.yellow('=========*** Car Management System ***=========='))
        inquirer.prompt(getIdQuestions).then((answers) => actions.deleteCar(answers.id))
    })
commander
    .command('getCarList')
    .alias('l')
    .description('Get Car List')
    .action(() => {
        console.log(chalk.yellow('=========*** Car Management System ***=========='))
        actions.getCarList()
    })

if(!process.argv.slice(2).length/* || !/[arudl]/.test(process.argv.slice(2))*/) {
    commander.outputHelp()
    process.exit()
}
commander.parse(process.argv)
