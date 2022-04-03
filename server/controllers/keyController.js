import Key from '../db/models/key.js'


const keyController = {

    async get(req,res){

        const keys = await Key.find({author: req.payload.userID})

        res.status(200).json(keys)


    },

    async add(req,res){


        const newKey = new Key({
            name: req.body.name,
            login: req.body.login,
            password: req.body.password,
            color: req.body.color,
            url: req.body.url,
            desc: req.body.desc,
            fav: req.body.fav,
            author: req.payload.userID
        })

        try {
            await newKey.save()
            res.status(201).json(newKey)
            console.log('Key added');
        } catch(err) {
            
            if(err.errors) {
                res.status(422).json({message: Object.values(err.errors)[0].message})
                //returs message from validator errors  
            } else {
                console.log(err)
                res.sendStatus(500)
            }
        }
    },


}

export default keyController