const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = UserSchema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.encryptPassword = password =>{
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
};

UserSchema.methods.mathPassword = function(password) {
	return await bcrypt.compare(password, this.password);
};

module.export = model("User", UserSchema);
