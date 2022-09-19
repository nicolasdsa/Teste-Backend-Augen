'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.runSql(`

  create table equipments (
    id int auto_increment,
    name varchar(30) not null,
    city_id int not null,
    created_at datetime default CURRENT_TIMESTAMP,
    deleted_at datetime null,
    PRIMARY KEY(id)
  );
  
  create table cities (
    id int auto_increment, 
    name varchar(30) not null,
      state varchar(30) not null,
    PRIMARY KEY(id)
  );
  
  create table analysis (
    id int auto_increment,
    ph float not null,
    chlorine float not null,
    fluorine float not null,
    output float not null,
    equipment_id int not null,
    created_at datetime default CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
  );
  
  create table user (
    id int auto_increment, 
    email varchar(30) not null,
    password char(200) not null,
    created_at datetime default CURRENT_TIMESTAMP,
      PRIMARY KEY(id)
  );
  
  alter table analysis add foreign key (equipment_id) references equipments(id);
  alter table equipments add foreign key (city_id) references cities(id);
  
  
  `);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
