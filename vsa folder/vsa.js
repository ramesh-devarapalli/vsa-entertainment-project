let navHome = document.getElementById("navHome");
let navAbout = document.getElementById("navAbout");
let apps = document.getElementById("apps");
let navCareers = document.getElementById("navCareers");
let navWayuparty = document.getElementById("navWayuparty");

let home = document.getElementById("home");
let about = document.getElementById("about");
let careers = document.getElementById("careers");
let appDropDown = document.getElementById("appDropDown");
let wayuparty = document.getElementById("wayuparty");


let applyArrow = document.getElementById("applyArrow");
let applyArrowa = document.getElementById("applyArrowa");
let applyArrowb = document.getElementById("applyArrowb");
let applyArrowc = document.getElementById("applyArrowc");
let applyArrowd = document.getElementById("applyArrowd");
let applyArrowe = document.getElementById("applyArrowe");
let applyArrowf = document.getElementById("applyArrowf");
let applyArrowg = document.getElementById("applyArrowg");
let applyPortion = document.getElementById("applyPortion");


let viewAllJobsPage = document.getElementById("viewAllJobsPage");
let viewAllButton = document.getElementById("viewAllButton");



navHome.addEventListener("click", function() {
    home.classList.remove("block");
    about.classList.add("block");
    careers.classList.add("block");
    wayuparty.classList.add("block");
    appDropDown.classList.add("block");
    applyPortion.classList.add("block");
});

navAbout.addEventListener("click", function() {
    home.classList.add("block");
    about.classList.remove("block");
    careers.classList.add("block");
    wayuparty.classList.add("block");
    appDropDown.classList.add("block");
    applyPortion.classList.add("block");
});
apps.addEventListener("click", function() {
    appDropDown.classList.toggle("block");
});

navCareers.addEventListener("click", function() {
    home.classList.add("block");
    about.classList.add("block");
    careers.classList.remove("block");
    wayuparty.classList.add("block");
    appDropDown.classList.add("block");
    applyPortion.classList.add("block");
});

navWayuparty.addEventListener("click", function() {
    home.classList.add("block");
    about.classList.add("block");
    careers.classList.add("block");
    wayuparty.classList.remove("block");
    appDropDown.classList.add("block");
    applyPortion.classList.add("block");

});


document.getElementById("aboutForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const name = formData.get("name");
    const country = formData.get("country");
    const email = formData.get("email");
    const number = formData.get("number");
    const status = formData.get("status");

    const to_email = "connect@vsaentertainments.com";

    const emailContent = `Full Name: ${name}\nCountry: ${country}\nEmail: ${email}\nPhone Number: ${number}\nWhy do you want to reach us?: ${status}`;

    const mailtoLink = `mailto:${to_email}?subject=New Form Submission&body=${encodeURIComponent(emailContent)}`;

    const anchor = document.createElement("a");
    anchor.href = mailtoLink;

    // Trigger a click event on the anchor element to open the user's default email client.
    anchor.click();

});


document.getElementById("careersForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const nameCareer = formData.get("nameCareer");
    const applyCountry = formData.get("applyCountry");
    const emailCareer = formData.get("emailCareer");
    const applyJob = formData.get("applyJob");
    const applyStatus = formData.get("applyStatus");
    const fileUpload = formData.get("fileUpload");

    const to_email = "connect@vsaentertainments.com";

    const emailContent = `Full Name: ${nameCareer}\nCountry: ${applyCountry}\nEmail: ${emailCareer}\nRole: ${applyJob}\nLocation: ${applyStatus}\nResume: ${fileUpload}`;

    const mailtoLink = `mailto:${to_email}?subject=New Form Submission&body=${encodeURIComponent(emailContent)}`;

    const anchor = document.createElement("a");
    anchor.href = mailtoLink;

    // Trigger a click event on the anchor element to open the user's default email client.
    anchor.click();
});


let threeCards = document.getElementById("threeCards");
let twoCards = document.getElementById("twoCards");
let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");

leftArrow.addEventListener("click", function() {
    threeCards.classList.remove("block");
    twoCards.classList.add("block");
});

rightArrow.addEventListener("click", function() {
    threeCards.classList.add("block");
    twoCards.classList.remove("block");
});



//view all jobs page
applyArrow.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowa.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowb.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})


applyArrowc.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowd.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})


applyArrowe.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowf.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowg.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})
