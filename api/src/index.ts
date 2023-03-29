import "dotenv/config";
import app from "./app"
import { mongooseConnection } from "./db-config/mongo-db.config";

const PORT = process.env.PORT || 3001
app.listen(PORT, async ()=>{
    try {
        // await mongooseConnection()
        console.log("listening at port ", PORT)
    } catch (error) {
        console.log(error)
    }
   
})