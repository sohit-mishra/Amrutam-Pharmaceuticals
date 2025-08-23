const express = require("express");
const env = require("./config/env");
const PORT = env.PORT;
const cors = require("cors");
const app = express();
const connectToDatabase = require('./config/db');
const payment = require('./routers/payments');
const products = require('./routers/products');
const doctors = require('./routers/doctors');
const commissions = require('./routers/commissions');
 
connectToDatabase();

app.use(
  cors({
    origin: env.FRONTED_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running with CORS for all origins!");
});


app.use('/payments' ,  payment);
app.use('/products' ,  products);
app.use('/doctors' ,  doctors);
app.use('/commissions' ,  commissions);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
