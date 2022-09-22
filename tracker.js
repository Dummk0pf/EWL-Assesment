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
    const imgv = data[0].picture.thumbnail;
    console.log(imgv);


    const namev = data[0].name.first;
    const p = document.createElement("p");
    p.innerHTML = namev;
    document.getElementById("name").appendChild(p);
}