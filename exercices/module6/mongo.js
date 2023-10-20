const mongoose = require ('mongoose')

if(process.argv.length<3){
    console.log('give password bro');
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://hamzarzine6:${password}@cluster1.mc9b2u8.mongodb.net/?retryWrites=true&w=majority`
mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name : String,
    number : String
})

const Persone = mongoose.model('Persons',personSchema)

if(process.argv.length==3){
    Persone.find({}).then(result=>{
        result.forEach(note => {
            console.log(note);
        });
        mongoose.connection.close();
        process.exit(0);
    })
}else if(process.argv.length>3){
    const user = process.argv[3]
    const userNumber = process.argv[4]



    const person = new Persone({
        name: user,
        number : userNumber
    })

    person.save().then(result =>{
        console.log("ok");
        mongoose.connection.close();
    })
}

