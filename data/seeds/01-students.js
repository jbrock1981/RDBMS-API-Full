
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Javi', cohort_id: 1 },
        {name: 'John', cohort_id: 2},
        {name: 'Jamey', cohort_id: 3}
      ]);
    });
};
