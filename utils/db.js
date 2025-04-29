'use strict';

const users = [
  { id: 1, username: 'admin', password: '123456', role: 'admin' },
  { id: 2, username: 'user', password: 'password', role: 'user' }
];

const contracts = [
  { id: 1, empresa: 'Estacio', data_inicio: '2025-01-01', userId: 1 },
  { id: 2, empresa: 'YDUQS', data_inicio: '2025-02-01', userId: 2 }
];

module.exports = { users, contracts };
