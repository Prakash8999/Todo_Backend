import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/taskModel.js"

export const newTask = async (req, res, next) => {
try {
	const { title, description } = req.body
	if (title.length <= 0 || description.length <= 0) return res.json({
		message: "title or description should not be empty"
	})



	await Task.create({
		title,
		description,
		user: req.user
	});

	res.status(201).json({
		success: true,
		message: "Task added successfully"
	})
} catch (error) {
	next(error)
}
}


export const myTask = async (req, res, next) => {

try {
	const userId = req.user._id
	const task = await Task.find({ user: userId })

	res.status(200).json({
		success: true,
		task,

	})
} catch (error) {
	next(error)
}

}

export const updateTask = async (req, res, next) => {
try {
	const { id } = req.params
	const task = await Task.findById(id)

	if (!task) return next(new ErrorHandler())
	task.isComplete = !task.isComplete
	await task.save()
	res.status(200).json({
		success: true,
		message: "updated"
	})
} catch (error) {
	next(error)
}

}

export const deleteTask = async (req, res, next) => {
try {
	const { id } = req.params
	const task = await Task.findById(id)
	if (!task) return next(new ErrorHandler("error"))
	await task.deleteOne()

	res.status(200).json({
		success: true,
		message: "deleted"
	})


} catch (error) {
	next(error)
}

}