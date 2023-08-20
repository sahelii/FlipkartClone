import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@ecommerce-web-app.rfurysm.mongodb.net/?retryWrites=true&w=majority`;
    


  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error ehile connecting with the database\n", error);
  }
}
export default Connection;
