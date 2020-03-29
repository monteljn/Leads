import * as express from 'express';
import apiRouter from './routes';

//installed and added cors module and using it for cross origin resource sharing
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.static('public'));
app.use(apiRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
