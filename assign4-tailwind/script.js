const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", ()=>{
    navMenu.classList.toggle("left-[0]");
});

navLink.forEach(link =>{
    link.addEventListener("click", ()=>{
        navMenu.classList.toggle("left-[0]");
    })
});

const services = [
    {
        id:1,
        title: "Dry Cleaning",
        price: 200,
        image: "assests/laundry.png",
        itemAdded: false
    },
    {
        id:2,
        title: "Wash & Fold",
        price: 100,
        image: "assests/laundry-machine.png",
        itemAdded: false
    },
    {
        id:3,
        title: "Ironing",
        price: 30,
        image: "assests/iron.png",
        itemAdded: false
    },
    {
        id:4,
        title: "Stain Removal",
        price: 500,
        image: "assests/stain-remover.png",
        itemAdded: false
    },
    {
        id:5,
        title: "Leather & Suede Cleaning",
        price: 999,
        image: "assests/leather.png",
        itemAdded: false
    },
    {
        id:6,
        title: "Wedding Dress Cleaning",
        price: 2800,
        image: "assests/wedding-dress.png",
        itemAdded: false
    }
];
let selectedServices = [];
let totalAmount = 0;

function renderServices(){
    const servicesDiv =document.getElementById('servicesDiv');
    servicesDiv.innerHTML = services.map((item)=>(`
        <div class="flex items-center justify-between gap-4 mb-4">
            <div>
                <p>
                    <img src=${item.image} class="w-5 h-5 mr-2 inline mx-auto">
                    ${item.title} 
                    <span class="text-violet-500 text-sm font-bold"> • ₹${item.price}</span>
                </p>
            </div>
            <button onClick="addItem(${item.id})" class="py-2 px-5 rounded-xl cursor-pointer bg-gray-200">${ item.itemAdded ?"Remove Item" : "Add Item"}</button>
        </div>
        `)
    ).join("")
};
renderServices();

function renderSelected(){
    const selectedDiv = document.getElementById("selected");

    if(selectedServices.length === 0){
        selectedDiv.innerHTML = "<p>No Services Selected</p>"
        return;
    }
    selectedDiv.innerHTML = selectedServices.map((item)=>(`
        <div class="grid grid-cols-3 gap-4  ">
            <p>${item.id}</p>
            <p>${item.title}</p>
            <p>${item.price}</p>
        </div>
        `)
    ).join("");
};

renderSelected();

function addItem(id){
    const service = services.find(s => s.id === id);
    const totalPriceId = document.getElementById("totalPrice");
    
    if(selectedServices.find(s => s.id === id)){
        selectedServices = selectedServices.filter(s => s.id !== id);
        services[id-1].itemAdded = false;
        totalAmount -= service.price;
        totalPriceId.innerHTML = `₹ ${totalAmount}`
        renderServices();
        renderSelected();
        return;
    }
    selectedServices.push(service);
    services[id-1].itemAdded = true;
    totalAmount += service.price;
    totalPriceId.innerHTML = `₹ ${totalAmount}`
    renderServices();
    renderSelected();
};

function sendMail(){
    const emailConfirmMsg = document.getElementById("emailConfirmMsg");
    if(selectedServices.length === 0){
        emailConfirmMsg.innerHTML = `<p class="text-red-500 flex items-center gap-3"><img class="w-4 h-4" src="assests/info.png">Add items to cart.</p>`
        return;
    }
    const servicesText = selectedServices
        .map(service => `• ${service.title} - ₹${service.price}`)
        .join("\n");
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        services: servicesText
    };
    
    emailjs.send("service_ezztu9b", "template_7qxdpta", params).then(()=>{
        console.log("Email send successfully");
        emailConfirmMsg.innerHTML = `<p class="text-red-500 flex items-center gap-3"><img class="w-4 h-4" src="assests/info_green.png">Email has been sent successfully.</p>`
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("phoneNumber").value = ""
    })
    .catch(error =>{
        console.log(error.message);
    })
}