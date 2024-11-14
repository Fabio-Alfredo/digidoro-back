import { Schema, model } from "mongoose";

const pomodoroSchema = new Schema(
  {
    time: {
      type: Number, // seconds
      required: true,
    },
    state: {
      type: String,
      enum: ["break", "work", "pause"],
      required: true,
    },
    id_user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    task_list: [
      {
        type: Schema.Types.ObjectId,
        ref: "Todo",
      },
    ],
  },
  { timestamps: true }
);

const Pomodoro = model("Pomodoro", pomodoroSchema);
export default Pomodoro;
