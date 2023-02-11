# Car Manager

This is a command-line Car management system app built with TypeScript, Node.js.

### Technologies:

- Node.js
- TypeScript

### Features

- Add a Car
- Update a Car
- Delete a Car
- Get a Car by ID
- Get all Cars


### Installation

- install ts-node globally `npm i ts-node -g` to be able to run the `ts` scripts directly.
- Move into the folder

```sh
    cd Car-manager
```

- Run `npm install` to install node dependencies.

### Usage

Usage: [options] [command]

Car Management System

Options:

    -V, --version  output the version number
    -h, --help     output usage information

Commands:

    addCar|a       Add a Car
    getCar|g       Get Car
    updateCar|u    Update Car
    deleteCar|d    Delete a Car
    getCarList|l   Get Car List

## USING THE APP

### Adding a Car

###### TypeScript

```sh
ts-node Car a
```

### Deleting a Car

###### TypeScript

```
ts-node Car d
```

### Viewing all Cars

###### TypeScript

```
ts-node Car l
```

### Viewing a Car

###### TypeScript

```sh
ts-node Car g
```
