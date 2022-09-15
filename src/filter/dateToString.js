export default function datasort() {
  const dateTime = new Date();
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1;
  const date = dateTime.getDate();
  const dateToString = `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`;
  return dateToString;
}
