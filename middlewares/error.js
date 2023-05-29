class ErrorHandler extends Error {
	constructor(message,statuscode){
		super(message)
		this.statuscode = statuscode
	}
}

export const errorMiddleware = (err,req,res,next)=>{
	err.message = err.message || "Internal server error"
	err.statuscode = err.statuscode || 500
	console.log(err.message);
return res.status(err.statuscode).json({
succcess:false,
messsage: err.message,
})
}

export default ErrorHandler