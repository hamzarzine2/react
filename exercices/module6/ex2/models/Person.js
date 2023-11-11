const mongoose = require ('mongoose')
require('dotenv').config()


const url = process.env.MONGO_URI;
console.log(url);
mongoose.connect(url).then(result =>{
    console.log('connected');
}).catch((error )=>{
    console.log("error connected");
})

mongoose.set('strictQuery',false);


const personSchema = new mongoose.Schema({
    name : String,
    number : String
});

module.exports.Persone = mongoose.model('Persons',personSchema);

module.exports.getAllPerson = async  ()=>{
    const response = await this.Persone.find({})
    console.log(response);
    return response 
}

module.exports.addOnePerson = async (name,number)=> {
    const newOne = await  new this.Persone({
        name,
        number
    })
    console.log('res ==' +newOne);
    return newOne
}

module.exports.deleteOne = async (id )=>{
    try {
        const deleted = await this.Persone.findByIdAndDelete(id);
        return deleted;
      } catch (error) {
        console.log("rezaaa");
        throw error;
      }
}

