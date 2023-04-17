export default function returnHowManyArguments(...args) {
  const argsArray = [...args];

  return argsArray.length;
}
