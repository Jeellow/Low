const KEY = `d022da54-f5f5-4327-a3b0-c444576a1742`;
const NAMESPACE = "jeellow.github.io";
const COUNT_URL = `https://api.countapi.xyz`;

const counter = document.querySelectorAll('count');

const getCount = async () => {
  const response = await fetch(`${COUNT_URL}/get/${NAMESPACE}/${KEY}`);
  const data = await response.json();
    setValue(data.value);
};

const incrementCount = async () => {
  const response = await fetch(`${COUNT_URL}/hit/${NAMESPACE}/${KEY}`);
  const data = await response.json();
  setValue(data.value);
};

const setValue = (num) => {
  var str = num.toString().padStart(5, "0");
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    counter[index].innerHTML = element;
  }
};

if (localStorage.getItem("hasVisited") == null) {
  incrementCount()
    .then(() => {
      localStorage.setItem("hasVisited", "true");
    })
    .catch((err) => console.log(err));
} else {
  getCount()
    .catch((err) => console.log(err));
}
