const resetHardhatContext = require('hardhat/plugins-testing').resetHardhatContext;
const path = require('path');

function useEnvironment(fixtureProjectName) {
    beforeEach("Loading hardhat environment", function() {
        process.chdir(path.join(__dirname, "fixture-projects", fixtureProjectName));
        this.hre = require('hardhat');
    });

    afterEach('Resetting hardhat', function() {
        resetHardhatContext();
    })
}

module.exports = useEnvironment;