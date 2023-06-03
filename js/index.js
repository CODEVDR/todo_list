let list = document.getElementById("insert");
let button = document.getElementById("getTodo");
const func=()=>{
  try {
    list.innerHTML = null;
  for (let i = 0; i < localStorage.length; i++) {
    let value = localStorage.getItem(localStorage.key(i));
    console.info(localStorage.key(i), value);
    list.innerHTML += `<p class='label' title="${value}">${value}</p>`;
  }
} catch (error) {}
}
func()
button.onclick = () => {
  let text = document.getElementById("getText");
  if (text.value === "") {
    alert("Todo Can't Be Empty");
  } else {
    var currentdate = new Date();
    var datetime =
      "Last Sync: " +
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " - " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    localStorage.setItem(datetime, text.value);
    text.innerHTML = null;
  }
  
  func()
};

