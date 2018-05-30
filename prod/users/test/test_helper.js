//requiring mongoose library
const mongoose = require ('mongoose');
//tell mongoose to connecto to mongo instance running on our local machine
//specifically to users_test database
mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
//Event handlers
  .once('open', () => console.log('Good to go!') )
  .on('error', (error) => {
    console.warn('Warning', error);
  });
