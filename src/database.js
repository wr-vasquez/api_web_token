import mongoose from "mongoose"

mongoose.connect("mongodb://localhost/company", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true
    
})


.then(db => console.log('Db conectada'))
.catch(error => console.log(error))
