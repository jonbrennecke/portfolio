module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(js|ts|tsx)$": "ts-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
}
