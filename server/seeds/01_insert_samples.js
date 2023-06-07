/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('samples').del()
  await knex('samples').insert([
    { y: 8.2, x1: 0, x2: 0, x3: 0, x4: 0 },
    { y: 7.5, x1: 0, x2: 0, x3: 2, x4: 0 },
    { y: 7.2, x1: 0, x2: 30, x3: 5, x4: 5 },
    { y: 7.2, x1: 0, x2: 70, x3: 8, x4: 8 },
    { y: 5.6, x1: 30, x2: 0, x3: 5, x4: 8 },
    { y: 6.3, x1: 30, x2: 30, x3: 8, x4: 0 },
    { y: 8.5, x1: 30, x2: 70, x3: 2, x4: 5 },
    { y: 5.7, x1: 60, x2: 0, x3: 8, x4: 5 },
    { y: 8.9, x1: 60, x2: 70, x3: 5, x4: 0 },
    { y: 8.9, x1: 60, x2: 0, x3: 2, x4: 0 },
    { y: 3.7, x1: 0, x2: 0, x3: 8, x4: 0 },
    { y: 7.6, x1: 0, x2: 0, x3: 2, x4: 8 }
  ]);
};
