const xhr = new XMLHttpRequest();
const source =
  " https:jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";
xhr.open("GET", source, true);
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    let output = "";
    for (let i = 0; i < response.length; i++) {
      output += `
        <div class="card">
            <div class="imag">
            <img src="https://picsum.photos/200/300/?random=${i}" alt="">     
            </div>
            <div class="body">
                <p>Person ID=${response[i].id}</p>
                <p>Name=${response[i].name}</p>
                <p>UserName=${response[i].username}</p>
                <p>City=${response[i].address.city}</p>
            </div>
        </div>
     `;
    }
    document.querySelector(".container").innerHTML = output;
  }
};
xhr.send();
