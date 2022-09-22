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
    console.log(data);
    display(data);
})
.catch((error) => console.error("FETCH ERROR",error));


function display(data){
    const name = data[0].name;
    const namediv = document.getElementById("name");
    namediv.innerHTML("name");
}