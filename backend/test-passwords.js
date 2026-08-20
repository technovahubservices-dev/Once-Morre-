const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

async function test() {
  await mongoose.connect('mongodb+srv://technovahubcareer_db_user:techadmin123@clusterarun.z03bsdz.mongodb.net/oncemore');
  const db = mongoose.connection.db;
  const admin = await db.collection('users').findOne({ email: 'admin@oncemore.com' });
  
  const passwords = ['admin123', 'admin', 'password', 'Admin123', 'Admin@123'];
  for (const pwd of passwords) {
    const match = await bcrypt.compare(pwd, admin.password);
    console.log('Password "' + pwd + '" matches:', match);
  }
  
  // Also check eleanor
  const eleanor = await db.collection('users').findOne({ email: 'eleanor@example.com' });
  const eleanorPasswords = ['password', 'password123', 'test123', 'eleanor', 'user123'];
  for (const pwd of eleanorPasswords) {
    const match = await bcrypt.compare(pwd, eleanor.password);
    console.log('Eleanor Password "' + pwd + '" matches:', match);
  }
  
  // Check caratlane admin
  const caratlane = await db.collection('users').findOne({ email: 'admin@caratlane.com' });
  if (caratlane) {
    const clPasswords = ['admin123', 'admin', 'password', 'Admin123', 'Admin@123'];
    for (const pwd of clPasswords) {
      const match = await bcrypt.compare(pwd, caratlane.password);
      console.log('Caratlane Admin Password "' + pwd + '" matches:', match);
    }
  }
  
  process.exit(0);
}

test().catch(e => console.error('Error:', e.message));
