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
    const name = data[0].picture.medium;
    const namediv = document.getElementById("name1");
    namediv.innerHTML = name;
}