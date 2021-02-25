const starWarsApiUrl = 'https://swapi.dev/api/people';

const getStarWarsPeople = (cb) => {
  fetch(starWarsApiUrl)
  .then(res => res.json())
  .then(cb);
}

getStarWarsPeople((res) => {
  console.dir(res);

  document.getElementById("info").innerText = `Total number of persons ${res.count}. First one is ${res.results[0].name}`;
 });