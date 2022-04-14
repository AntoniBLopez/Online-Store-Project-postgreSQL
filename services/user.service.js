const pool = require('../libs/postgres.pool')

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', err => console.log(err))
  }

  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM tasks'
    const response = await this.pool.query(query)

    return response.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
