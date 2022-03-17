const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

let name = faker.name.findName()
console.log(name)

class User{
    constructor() {
        this.id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company{
    constructor(){
        this.id = faker.datatype.uuid()
        this.name = faker.company.companyName()
        this.address = {
            street : faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.stateAbbr(),
            zip: faker.address.zipCode(),
            country: faker.address.country()

        }

    }
}

// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

// Create new user
app.get("/api/users/new", (req, res) =>{
    let newUser = new User
    res.json({result: newUser})
})
// Create new company
app.get("/api/companies/new", (req, res) =>{
    let newCompany = new Company
    res.json({result: newCompany})
})

// Return user and company
app.get("/api/user/company", (req, res) =>{
    let newUser = new User
    let newCompany = new Company
    res.json({
        result: {
            user: newUser,
            company: newCompany
        }
    })

})

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
