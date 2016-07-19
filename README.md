# Sequelize Sample Implementation

This is a sample sequelize implementation you can use for your node projects.

You can simply define `/config/config.js` to start connecting to your database.

# Note

The sample implementation was used to connect to `mysql`. This can be changed in https://github.com/RedTint/sequelize-sample/blob/master/server/database/connection.js#L50 to use other dialects (database engines).

# Sequelize Documentation
See http://docs.sequelizejs.com/en/latest/

# How to Run
Simply run `npm start`

You should see the following:

```
$ npm start

> sequelize-sample@1.0.0 start /Users/projects/prototypes/sequelize-sample
> node server/app

You are running sequelize-sample
> Getting pool
> Creating pool
> initializing test repository
> initializing user repository
Executing (default): CREATE TABLE IF NOT EXISTS `tests` (`id` INTEGER auto_increment , `description` TEXT, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER auto_increment , `username` TEXT, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `tests`
Executing (default): SHOW INDEX FROM `users`
> Done initializing mysql connection
> inserting data
Executing (default): INSERT INTO `tests` (`id`,`description`) VALUES (DEFAULT,'Test Description');
> Showing sequelize insert response
{ dataValues: { id: 1, description: 'Test Description' },
  _previousDataValues: { description: 'Test Description', id: 1 },
  _changed: { description: false, id: false },
  '$modelOptions':
   { timestamps: false,
     instanceMethods: {},
     classMethods: {},
     validate: {},
     freezeTableName: true,
     underscored: false,
     underscoredAll: false,
     paranoid: false,
     rejectOnEmpty: false,
     whereCollection: null,
     schema: null,
     schemaDelimiter: '',
     defaultScope: {},
     scopes: [],
     hooks: {},
     indexes: [],
     name: { plural: 'tests', singular: 'test' },
     omitNul: false,
     sequelize:
      { options: [Object],
        config: [Object],
        dialect: [Object],
        models: [Object],
        modelManager: [Object],
        connectionManager: [Object],
        importCache: {},
        test: [Object],
        queryInterface: [Object] },
     uniqueKeys: {},
     hasPrimaryKeys: true },
  '$options':
   { isNewRecord: true,
     '$schema': null,
     '$schemaDelimiter': '',
     attributes: undefined,
     include: undefined,
     raw: undefined,
     silent: undefined },
  hasPrimaryKeys: true,
  __eagerlyLoadedAssociations: [],
  isNewRecord: false }

```

Enjoy!
