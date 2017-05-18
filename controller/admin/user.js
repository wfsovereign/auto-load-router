exports.list = function *() {
  return this.body = [
    {
      id: '1',
      username: 'wfsovereign',
      follows: '100000'
    },
    {
      id: '2',
      username: 'node',
      follows: '999999'
    }
  ]
};
