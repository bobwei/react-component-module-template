import express from 'express';
import compression from 'compression';
import dotenv from 'dotenv';

dotenv.config();

import assets from './middlewares/assets';
import render from './middlewares/render';


/* server configs */
let app = express();
app.set('port', (process.env.PORT || 5000));

/* middlewares */
app.use(compression());
app.use(assets());
app.use(render());

/* start server */
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  if (process.env.env === 'dev') {
    console.log(`Open Url http://localhost:${app.get('port')} to get started`);
  }
});
