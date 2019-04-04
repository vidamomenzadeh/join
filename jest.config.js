
module.exports = {
   "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ],
    "modulePaths": [
      "<rootDir>/node_modules"
    ],
    "moduleNameMapper": {
        "^@root(.*)$": "<rootDir>/src$1",
        "^@components(.*)$": "<rootDir>/src/components$1",
        "^@constants(.*)$": "<rootDir>/src/constants$1",
        "^@actions(.*)$": "<rootDir>/src/actions$1",
        "^@reducers(.*)$": "<rootDir>/src/reducers$1"
    }
};