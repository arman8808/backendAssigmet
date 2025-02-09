import express from 'express';
import bodyParser from 'body-parser';
import cacheRoutes from './routes/cacheRoutes.js';

const app = express();
const PORT = 8000;

app.use(bodyParser.json());


app.use('/cache', cacheRoutes);
app.get('/',(req,res)=>{
    res.status(200).json({message:"Server Is Live"})
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
