const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const complimentRouter = require('./routers/complimentRouter');

app.use(express.json());
app.use('/compliment', complimentRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
