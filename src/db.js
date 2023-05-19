const mongoose = require('mongoose')
require('dotenv').config()


const getConnect = async () => {
  try {
     await mongoose.connect( process.env.MONGODB_URI )
     console.log( 'DB IS CONNECT' );
  } catch (error) {
        console.log(error);
  }
}

module.exports = {
  getConnect
}