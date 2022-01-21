const hello = (a: string, b: string) => {
  console.log("Say hello!");
  a = "";
  typeof a === "strng";

  return a + b;
};

hello(4, "hello");
