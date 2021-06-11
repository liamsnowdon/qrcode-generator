module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/store/index.js',
    '!src/store/state.js',
    '!**/node_modules/**',
  ],
};
