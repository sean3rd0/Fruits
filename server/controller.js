module.exports = {
    getAllFruits: async(req, res) => {
        const db = req.app.get('db')

        let fruits = await db.get_fruits()
        res.status(200).send(fruits)
    },

    addFruit: async(req, res) => {
        const db = req.app.get('db')
        const {name} = req.body
        console.log("this is what's being sent to db.add_fruit:", name)

        let fruits = await db.add_fruit(name)
        res.status(200).send(fruits)
    },

    editFruit: async(req, res) => {
        const db = req.app.get('db')
        const {name} = req.body
        const {id} = req.params

        console.log('HIT')
        let fruits = await db.edit_fruit([id, name])
        res.status(200).send(fruits)
    },  

    deleteFruit: async(req, res) => {
        console.log('Hit deleteFruuuit in controller')
        const db = req.app.get('db')
        const {id} = req.params 

        let fruits = await db.delete_fruit(id)
        console.log(fruits)
        res.status(200).send(fruits)
    },
}