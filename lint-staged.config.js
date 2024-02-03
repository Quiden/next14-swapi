module.exports = {
  './src/**/*': () => ['yarn lint', 'yarn prettier:check'],
  './src/**/*.(ts|tsx)': () => ['yarn type-check'],
};
