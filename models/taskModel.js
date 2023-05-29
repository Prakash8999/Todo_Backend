import mongoose from "mongoose"

// Schema basically defines the structure of our data
const schema = new mongoose.Schema({
	title: {
		type: String,
		required: true,

	},

	description: {
		type: String,
		required: true,
	},
	isComplete: {
		type: Boolean,
		default: false,

	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	createAt: {
		type: Date,
		default: Date.now,
	}

})

export const Task = mongoose.model("Task", schema)