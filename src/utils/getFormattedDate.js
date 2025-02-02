// get formattet date functin

export default function getFormattedDate(date) {
  const newDate = new Date(date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return newDate.toLocaleDateString("en-US", options);
}
