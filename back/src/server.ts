import express from 'express';
import cors, { CorsOptions } from 'cors';
import routes from './routes';
import path from 'path';

var port = 3333;
const app = express();

// const whitelist = ['https://nlw-ecoleta-web.vercel.app']
// const corsOptions: CorsOptions = {
//     origin: function (origin, callback) {
//       if (origin && whitelist.indexOf(origin) !== -1) {
//         callback(null, true)
//       } else {
//         callback(new Error('Not allowed by CORS'))
//       }
//     }
//   }

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));


app.listen(port, function() {
    console.log("listening on port: ", port);
})