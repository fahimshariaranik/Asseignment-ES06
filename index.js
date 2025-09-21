// lesson fetch section
const catagorisLabel=(id)=>{
   fetch("https://openapi.programming-hero.com/api/categories")
   .then(res=>res.json())
   .then(data=>displayLable(data.categories))
    
}

const displayLable=(lessons)=>{
const lableContaoner=document.getElementById("Catagories-label")
lableContaoner.innerHTML=" ";
for( let lesson of lessons){
    const createDiv=document.createElement("div")
    createDiv.innerHTML=`
    
    <button id="catagoris-${lesson.id}" onclick="loadAllCards('${lesson.id}')" class="losson-no  text-left  font-semibold   px-2 py-1 text-md my-1 md:w-3/4  w-full  cursor-pointer">${lesson.category_name}</button>
    `;

    lableContaoner.appendChild(createDiv);
}
}
  
// card fetch section
const cardContainer=()=>{
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res=>res.json())
    .then(data=>displayCard(data.plants))
}

const removeActive=()=>{
    const allbtn=document.querySelectorAll(".losson-no")
    allbtn.forEach((btn)=>btn.classList.remove("active"))
}

const loadAllCards = (id = "1") => {
   fetch(`https://openapi.programming-hero.com/api/category/${id}`)
   .then(res => res.json())
   .then(data =>{
    removeActive()
    const clickBtn=document.getElementById(`catagoris-${id}`)
clickBtn.classList.add("active")
// console.log(clickBtn);

    
     displayCard(data.plants)
   })
}

// modaal section
const loadPnaltDetails=async(id)=>{
    const url=`https://openapi.programming-hero.com/api/plant/${id}`;
    const rest = await fetch(url)
    const details=await rest.json()
    displayDetaile(details.plants);
    
}
 const displayDetaile=(words)=>{
const allDetails=document.getElementById("detaile-container")
allDetails.innerHTML=`
<div class="space-y-2">
<h1 class="text-2xl font-bold ">${words.name}</h1>
<div class="h-[250px]"> 
<img src="${words.image}" alt="" class="rounded-lg   h-full w-full object-cover ">
</div>
<h3 class="text-black "><span class="text-xl font-semibold text-black">category: </span>${words.category}</h3>

<h3 class="text-black "><span  class="text-xl font-semibold text-black">price: </span>৳${words.price}</h3>

<h3 class="text-black "><span class="text-xl font-semibold text-black">description: </span>${words.description}</h3>


</div>



`;
document.getElementById("my_modal_5").showModal()

 }
// button all alert
const allbtnCall=()=>{
    const allBtn=document.querySelectorAll(".allBtn")
    allBtn.forEach((btn)=>{
        btn.addEventListener("click", function(id) {
            fetch(`https://openapi.programming-hero.com/api/plant/1${id}`)
.then(res=>res.json())
.then(data=>console.log(data.plants)
)

             alert(`${id.name}, has been added the card`);
        });
        
    });
}


//  btn card create


 const displayCard=(cards)=>{
    const cardContainer=document.getElementById("card-container")
    cardContainer.innerHTML=" ";
   cards.forEach(cards=>{
       const createCard = document.createElement("div")
        createCard.innerHTML=`
     <div class="card space-y-1  h-full shadow-md p-3 bg-white ">
<div class=" rounded-md space-y-2 mt-auto h-[170px]">
    <img src="${cards.image}" alt="" class="rounded-lg h-full w-full">
</div>

<h2 onclick="loadPnaltDetails(${cards.id})" class="text-lg font-semibold cursor-pointer">${cards.name}</h2>

<p>${cards.description}</p>
<div class="flex items-center justify-between my-2"> 
    <a href="" class=" px-2 bg-[#cff0dc] font-semibold text-[#166534] rounded-3xl"> ${cards.category}</a>
     <h3 class="text-xl font-semibold"><span class=" text-md font-semibold  font-mono">৳</span>${cards.price}</h3> 
</div>
<div class="flex mt-auto items-baseline">
<button id="" class="allBtn btn bg-[#15803d] text-white w-full mt-auto rounded-3xl shadow-lg">Add to Cart</button></div>
</div>

        
        `;
       cardContainer.appendChild(createCard);
    })
    
      allbtnCall()  

 }





cardContainer()
catagorisLabel()


loadAllCards()