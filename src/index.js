import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT === 8000,()=>{
        console.log(`Server is Running at port ${process.env.PORT }`); 
    });
})
.catch((err)=>{
    console.log("MongoDB Connection failed !!!!", err);
});

















// ( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGOOB_URL}/${DB_NAME}`);

//         app.on("error",(error)=>{
//             console.error("ERROR: ", error);
//             throw error
//         });

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listeing on ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR: ",error);
//         throw error
//     }
// })()