'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('user_roles', [{
                id: '7fad6133-e7af-4710-9576-91547459696a',
                userid: '77745c5b-cb89-41b5-bc42-d25c39a89268',
                roleid: '4dc2c1a5-b19c-4fa7-b42d-ab2235025b32',
                createdAt: new Date(),
                updatedAt: new Date()
            }], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('user_roles', null, {});
    }
};
