fetch("https://randomuser.me/api/?results=10")
.then((response) =>{
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error("Website go boom");
    }
})
.then(data =>{
    console.log(data.results);
    display(data.results);
})
.catch((error) => console.error("FETCH ERROR",error));


function display(data){
    const namev = data[0].name.first;
    const name = document.getElementById("name");
    const p = document.createElement("p");

}