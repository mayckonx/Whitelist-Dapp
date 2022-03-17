const { ethers } = require("hardhat");

async function main() {
  const maximumAddressesForWhitelist = 10;
  const whitelistContract = await ethers.getContractFactory("Whitelist");
  const deployContract = await whitelistContract.deploy(
    maximumAddressesForWhitelist
  );
  await deployContract.deployed();

  console.log("Whitelist contract address: ", deployContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
