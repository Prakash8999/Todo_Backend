import mongoose from "mongoose";

export const connectDb = () =>{

	mongoose.connect(process.env.MONGO_URI, {
		dbName: "TodoBackendApi",
	}).then((c) => {
		console.log(`Db connected`)
	})
	.catch((e) => {
		console.log(e);
	})
} 

