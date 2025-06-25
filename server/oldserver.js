import express from 'express';
import cors from 'cors';
const mongoose = import('mongoose');

const PORT = process.env.PORT || 5050;
const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/employees', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
