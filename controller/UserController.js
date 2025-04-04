const { response } = require("express")

class UserController {
    userDetails = (request, response) => {
        let data = {
            name: request.body.name,
            phone: request.body.phone,
            email: request.body.email
        }
        console.log('Data: ', data)
        return response.status(200).send({message:'ok'})
    }
    test = (request, response) => {
        console.log('Success!!')
        return response.status(200).send({message:'ok'})
    }
}

module.exports = new UserController();