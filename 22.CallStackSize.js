let i = 0;
function recursive() {
  i++;
  recursive();
}

try {
  recursive();
} catch (e) {
  console.log(`i = ${i}; error: ${e}`);
}