module.exports = {
  "roots": [
      "./tests"
  ],
  "testMatch": [
      "**/*.+(ts|js)"
  ],
  "transform": {
      "^.+\\.(ts|js)$": "ts-jest"
  },
  "testEnvironment": "node",
};