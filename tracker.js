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
    let card = document.getElementById("card1")
    let imgv = data[0].picture.thumbnail;
    let namev = data[0].name.first;
    let emailv = data[0].email;
    let genderv = data[0].gender;

    let img = document.createElement("img");
    img.src = imgv;
    card.insertBefore(img,document.getElementById("card01"))


    let p = document.createElement("p");
    p.innerHTML = namev;
    document.getElementById("name").appendChild(p);

    let p1 = document.createElement("p");
    p1.innerHTML = emailv;
    document.getElementById("email").appendChild(p1);

    let p2 = document.createElement("p");
    p2.innerHTML = genderv;
    document.getElementById("gender").appendChild(p2);   
}