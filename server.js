import { app } from "./app.js";
import { connectDb } from "./db/database.js";
const port = 5000
connectDb()

console.log(process.env.PORT);
app.listen(process.env.PORT, () => {
	console.log(`Connected to server and port is  ${process.env.PORT} ` );
})
// now server is our main file