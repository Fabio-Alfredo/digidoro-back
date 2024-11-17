import { Schema, model } from "mongoose";
import { hash, compare } from "bcrypt";
import { config } from "../configs/config";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    token:{
      type: String,
    }
    ,
    id_pomodoro: {
      type: Schema.Types.ObjectId,
      ref: "Pomodoro",
    },
    id_todos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Todo",
      },
    ],
  },
  { timestamps: true }
);


userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();

    this.password = await hash(this.password, config.salt);
    next();
})

userSchema.methods.comparePassword = async function(password){
    return await compare(password, this.password)
}

const User = model("User", userSchema);

export default User;