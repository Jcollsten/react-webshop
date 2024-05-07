fetch("https://dummyjson.com/products?limit=100&skip=0")
  .then((res) => res.json())
  .then((json) => console.log(json));
