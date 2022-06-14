// TODO: add code here
window.addEventListener("load", function () {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            let div = document.getElementById("container");
            let html = "";
            for (let i = 0; i < json.length; i++) { 
                html = `<div class="astronaut">
                    <div class="bio">
      <h3>${json[i]["firstName"]} ${json[i]["lastName"]}</h3>
      <ul>
         <li>Hours In Space: ${json[i]["hoursInSpace"]}</li>
         <li>Active: ${json[i].active}</li>
         <li>Skills:${json[i]["skills"]}</li>
      </ul>
   </div>
   <img class="avatar" src=${json[i]["picture"]}>
</div>`

div.innerHTML += html;
            }
        })
    })
});