import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "MERN", {
    expiresIn: "30d",
  });
};

export default generateToken;
