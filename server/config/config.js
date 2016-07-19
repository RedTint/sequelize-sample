var config = {

    "mysql": {
        "host": "",
        "port": "",
        "database": "",
        "username": "",
        "password": ""
    },

    "sequelize": {
        "pool": {
            "min": 2,
            "max": 10,
            "idle": 15000
        },
        "force": false
    }

};

module.exports = config;
