module.exports = {
  roots: ["<rootDir>"],
  collectCoverageFrom: ["<rootDir>/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"]
};