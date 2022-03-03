const assert = require("chai").assert;
const path = require("path");

const ExampleHardhatRuntimeEnvironmentField = require("../src/ExampleHardhatRuntimeEnvironmentField");

const useEnvironment = require("./helpers");

describe("Integration tests examples", function () {
  describe("Hardhat Runtime Environment extension", function () {
    useEnvironment("hardhat-project");
    it("Should add the example field", function () {
      assert.instanceOf(
        this.hre.example,
        ExampleHardhatRuntimeEnvironmentField
      );
    });

    it("The example filed should say hello", function () {
      assert.equal(this.hre.example.sayHello(), "hello");
    });
  });

  describe("HardhatConfig extension", function () {
    useEnvironment("hardhat-project");

    it("Should add the newPath to the config", function () {
      assert.equal(
        this.hre.config.paths.newPath,
        path.join(process.cwd(), "asd")
      );
    });
  });
});

describe("Unit tests examples", () => {
  describe("ExampleHardhatRuntimeEnvironmentField", () => {
    describe("sayHello", () => {
      it("Should say hello", () => {
        const field = new ExampleHardhatRuntimeEnvironmentField();
        assert.equal(field.sayHello(), "hello");
      });
    });
  });
});
