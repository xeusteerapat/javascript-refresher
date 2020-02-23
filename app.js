let movie = "inception";
function outer() {
  function inner() {
    let movie = "the dark knight";
    console.log(movie.toUpperCase());
    console.log(movie);
  }
  inner();
}

outer();
