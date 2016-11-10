const db = require('./connection');
const Parent = require('./schemas/parentSchema');
const Child = require('./schemas/childSchema');
const Chore = require('./schemas/choreSchema');
const Schedule = require('./schemas/scheduleSchema');
const Curfew = require('./schemas/curfewSchema');

const initializeSchemas = () => {
  Parent.hasMany(Child);
  Child.hasMany(Chore);
  Child.hasOne(Schedule);
  Schedule.hasMany(Curfew);
};

// Build the schemas
initializeSchemas();

// Sync the database
db
  .sync({ force: true })
  .then(() => console.log('Successfully synced schemas'))
  .catch(err => console.log('An error occurred while creating the table:', err));

module.exports = initializeSchemas;
