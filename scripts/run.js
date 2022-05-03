const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Cru", "Jokes", "Mali"], // Names
    [
      "https://i.imgur.com/zfO3R2e.png", // Cruela
      "https://i.imgur.com/LT9IiyO.png", //Joker
      "https://i.imgur.com/eMG3wv9.png", //Malificent
    ],
    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    "Batman",
    "https://i.imgur.com/34nVX89.png",
    10000, // Boss hp
    50 // Boss attack damage
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait();

  // Get the value of the NFT's URI.
  // let returnedTokenUri = await gameContract.tokenURI(1);
  // console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
