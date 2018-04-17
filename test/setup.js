const path = require('path');

require('dotenv-expand')(
  require('dotenv-safe').load({
    allowEmptyValues: true,
    sample: path.resolve(__dirname, '../.env.dist')
  })
);
