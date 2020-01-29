'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('role_permissions', [
            {
                id: 'b745a5d3-ab89-44ce-a5d2-f76d924141df',
                roleid: '4dc2c1a5-b19c-4fa7-b42d-ab2235025b32',
                permissionid: 'd473433a-2d3d-4d86-ace0-1cd82b24c26f', //INSERT
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: '5165d876-7da0-4c17-80ab-27c78ce2e43a',
                roleid: '4dc2c1a5-b19c-4fa7-b42d-ab2235025b32',
                permissionid: 'e2fb5b7b-dac9-4d77-af28-2b2dcb9d55b6', //UPDATE
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: '13ffb4e6-b6e9-41a4-b967-45fdd59901a2',
                roleid: '4dc2c1a5-b19c-4fa7-b42d-ab2235025b32',
                permissionid: '9735a5a4-f280-44f4-b623-320308e7ebab', //DELETE
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('role_permissions', null, {});
    }
};
