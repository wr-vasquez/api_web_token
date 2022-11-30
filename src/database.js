import mongoose from "mongoose"

mongoose.connect("mongodb+srv://root:root@cluster0.hwtkhhw.mongodb.net/test")


.then(db => console.log('Db conectada'))
.catch(error => console.log(error))
