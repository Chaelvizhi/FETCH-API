const{ MongoClient} = Require("mongodb")

const Client = new MongoClient ("mongodb+srv://Chaelvizhi:Chaelu@cluster0.0b0ey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

Client.connect().then((mClinet) => {
  const db = mClinet.db();

  db.collection ("Contact API details")
    .insertOne({
      name :"CHAELVIZHI KANIMOZHIAN",
      phone:"9870402563",
      email:"chaelvizhi10@gmail.com",
        
      "portfolio": "https://github.com/Chaelvizhi/Chaelvizhi.github.io.git", 
    })
    .then( () =>{
      console.log("contact details were added");
      process.exit(0);
    });
});