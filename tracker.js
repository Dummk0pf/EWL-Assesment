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
