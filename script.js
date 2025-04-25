function countFlavors() {
  const name = prompt("Enter your froyo flavors (separated by commas):");

  const flavors = name.toLowerCase().split(",");

  const flavorCounts = {};

  for (let i = 0; i < flavors.length; i++) {
    let flavor = flavors[i].trim();

    if (flavorCounts[flavor]) {
      flavorCounts[flavor] = flavorCounts[flavor] + 1;
    } else {
      flavorCounts[flavor] = 1;
    }
  }

  console.log("Your Froyo Order:");
  for (let flavor in flavorCounts) {
    console.log(flavor + ": " + flavorCounts[flavor]);
  }
  console.log("Thank You for ording Esteban.");
}

countFlavors();
