const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getData();

filter.addEventListener("input", (e) => filterData(e.target.value))

async function getData() {
  //fetch data from API
  const response = await fetch("https://randomuser.me/api?results=20");

  //convert the fetch data into readable format and destructuring the object
  const { results } = await response.json();

  // console.log(results);

  // Clear results
  result.innerHTML = "";

  results.forEach((user) => {
    const userList = document.createElement("li");

    userList.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}"/>
    <div class="user-info">
      <h4>${user.name.last} ${user.name.first}</h4>
      <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;

    listItems.push(userList);
 
    result.appendChild(userList);
  });
}

function filterData(searchItem){
  listItems.forEach(item => {
    if(item.innerText.toLowerCase().includes(searchItem.toLowerCase())){
      item.classList.remove("hide")
    }else{
      item.classList.add("hide")
    }
  })
}
