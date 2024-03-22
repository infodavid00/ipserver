import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (rq,rs) => {
  const remoteAddress = rq.headers['x-forwarded-for'] || rq.connection.remoteAddress;
  const ip = rq.ip;
  rs.status(200).json({remoteAddress, ip})
})

app.listen(3000, ()=> console.log('app running'))