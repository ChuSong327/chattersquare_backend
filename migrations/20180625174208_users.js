exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", (table) => {
      table.increments("id");
      table.string("username").notNullable().unique();
      table.string("password").notNullable();
      table.string("firstname");
      table.string("lastname");
      table.string("email").notNullable().unique();
      table.string("phone");
      table.string("profile");
      table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
