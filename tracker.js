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
    
    
    // let card1 = document.getElementById("card2")
    // let imgv1 = data[1].picture.thumbnail;
    // let namev1 = data[1].name.first;
    // let emailv1 = data[1].email;
    // let genderv1 = data[1].gender;

    // let img1 = document.createElement("img");
    // img1.src = imgv1;
    // card1.insertBefore(img,document.getElementById("card02"))


    // let p10 = document.createElement("p");
    // p10.innerHTML = namev;
    // document.getElementById("name1").appendChild(p1);

    // let p11 = document.createElement("p");
    // p11.innerHTML = emailv;
    // document.getElementById("email1").appendChild(p11);

    // let p12 = document.createElement("p");
    // p12.innerHTML = genderv;
    // document.getElementById("gender1").appendChild(p12);   

}