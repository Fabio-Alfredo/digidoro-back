import { Schema, model } from "mongoose";

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      enum: ["pending", "completed", "progress"],
      required: true,
    },
    color: {
      type: String,
      default: "#000000",
    },
    reminder: {
      type: Date,
      default: Date.now(),
    },
    id_user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    id_pomodoro: {
      type: Schema.Types.ObjectId,
      ref: "Pomodoro",
    },
  },
  { timestamps: true }
);

const Todo = model("Todo", todoSchema);
export default Todo;
