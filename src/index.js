const HardhatConfig = require("hardhat/config");
const [extendConfig, extendEnvironment] = [
  HardhatConfig.extendConfig,
  HardhatConfig.extendEnvironment,
];
const lazyObject = require("hardhat/plugins").lazyObject;
const path = require("path");
const ExampleHardhatRuntimeEnvironmentField = require("./ExampleHardhatRuntimeEnvironmentField");

extendConfig((config, userConfig) => {
  const userPath = userConfig.paths?.newPath;

  let newPath;
  if (userPath === undefined) {
    newPath = path.join(config.paths.root, "newPath");
  } else {
    if (path.isAbsolute(userPath)) {
      newPath = userPath;
    } else {
      newPath = path.normalize(path.join(config.paths.root, userPath));
    }
  }
  config.paths.newPath = newPath;
});

extendEnvironment((hre) => {
  hre.example = lazyObject(() => new ExampleHardhatRuntimeEnvironmentField());
});
