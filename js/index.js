let list = document.getElementById("insert");
let button = document.getElementById("getTodo");
<<<<<<< HEAD
const func = () => {
  try {
    list.innerHTML = null;
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(localStorage.key(i));
      console.info(key, value);
      // list.innerHTML += `<p class='label' title="${value}">${value}</p>`;
      list.innerHTML += `<p class="label" title="Stored On ${key}">${value}<i onclick="del('${key}')" title="delete" id="delete" class="fa">&#xf014;</i></p>`;
    }
  } catch (error) {}
};
func();
const del = (k) => {
  localStorage.removeItem(k);
  func();
};
=======
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
>>>>>>> 3f50822033bad995354fb2a067d31197df25e593
button.onclick = () => {
  let text = document.getElementById("getText");
  if (text.value === "") {
    alert("Todo Can't Be Empty");
  } else {
    var currentdate = new Date();
    var datetime =
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
<<<<<<< HEAD

  func();
};
=======
  
  func()
};

>>>>>>> 3f50822033bad995354fb2a067d31197df25e593
