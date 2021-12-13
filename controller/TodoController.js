const responseHelper = require('../util/ResponseHelper')

const listTodos = async (req, resp, next) => {

    try {

        // TODO: add filters and pagination

        let todos = []

        for (let i = 0; i < 10; i++) {
            todos.push({
                id: i + 1,
                title: `Todo ${i + 1}`,
                description: `Todo ${i + 1} description here`
            })
        }

        return responseHelper.success(resp, todos)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    listTodos
}