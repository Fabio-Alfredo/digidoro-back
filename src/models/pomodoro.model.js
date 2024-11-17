import { Schema, model } from "mongoose";
import { STATE } from "../utils/pomodoro.utils";

const pomodoroSchema = new Schema(
  {
    time: {
      type: Number,
      required: true,
      default: 1500,
    },
    state: {
      type: String,
      enum: [STATE.WORK, STATE.BREAK, STATE.NONE],
      required: true,
      default: STATE.NONE,
    },
    id_user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    task_list: [
      {
        type: Schema.Types.ObjectId,
        ref: "Todo",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Pomodoro = model("Pomodoro", pomodoroSchema);
export default Pomodoro;
