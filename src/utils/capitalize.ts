const capitalize = (string: string) =>
  string
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");

export default capitalize;
