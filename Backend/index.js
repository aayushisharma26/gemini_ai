// import express from "express";
// import cors from"cors";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import signupRoute from "./routes/userRoute.js"
// import chatRoutes from "./routes/chatRoutes.js"


// dotenv.config();
// const app = express();
// app.use(express.json())

// app.use(cors())

// const PORT = process.env.PORT || 4000;
// const URL = process.env.MONGODB_URL; 

// app.get('/',(req , res)=>{
//     console.log("done")
//     res.json({message:"Hello World From Backend"})
// })

// mongoose.connect(URL)
// .then(()=>{
//     console.log("Database Done")
// })
// .catch((err)=>{
//     console.log("error",err)
// })

// app.use("/user",signupRoute)
// app.use("/chat", chatRoutes);


// app.listen(PORT,()=>{
//     console.log('Port is runing....')
// })

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import signupRoute from "./routes/userRoute.js";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Database Connected"))
  .catch((err) => console.log("❌ Database Error:", err));

app.get('/', (req, res) => {
  res.json({ message: "Hello World From Backend" });
});

app.use("/user", signupRoute);
app.use("/chat", chatRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
