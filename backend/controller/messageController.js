import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Message } from "../models/messageSchema.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    // return res.status(400).json({
    //   success: false,
    //   message: "Please fill the form",
    // });
    return next(new ErrorHandler("please fill the full form", 400));
  }
  await Message.create({ firstName, lastName, email, phone, message });
  return res.status(200).json({
    success: true,
    message: "message send successfull",
  });
});
