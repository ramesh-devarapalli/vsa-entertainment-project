
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


let applyArrowna = document.getElementById("applyArrowna");
let applyArrownb = document.getElementById("applyArrownb");
let applyArrownc = document.getElementById("applyArrownc");
let applyArrownd = document.getElementById("applyArrownd");
let applyArrowne = document.getElementById("applyArrowne");


let applyArrowda = document.getElementById("applyArrowda");
let applyArrowdb = document.getElementById("applyArrowdb");
let applyArrowdc = document.getElementById("applyArrowdc");
let applyArrowdd = document.getElementById("applyArrowdd");
let applyArrowde = document.getElementById("applyArrowde");


let applyArrowma = document.getElementById("applyArrowma");
let applyArrowmb = document.getElementById("applyArrowmb");
let applyArrowmc = document.getElementById("applyArrowmc");
let applyArrowmd = document.getElementById("applyArrowmd");
let applyArrowme = document.getElementById("applyArrowme");


let applyArrowca = document.getElementById("applyArrowca");
let applyArrowcb = document.getElementById("applyArrowcb");
let applyArrowcc = document.getElementById("applyArrowcc");
let applyArrowcd = document.getElementById("applyArrowcd");
let applyArrowce = document.getElementById("applyArrowce");


let applyArrowoa = document.getElementById("applyArrowoa");
let applyArrowob = document.getElementById("applyArrowob");
let applyArrowoc = document.getElementById("applyArrowoc");
let applyArrowod = document.getElementById("applyArrowod");
let applyArrowoe = document.getElementById("applyArrowoe");


let applyArrowfa = document.getElementById("applyArrowfa");
let applyArrowfb = document.getElementById("applyArrowfb");
let applyArrowfc = document.getElementById("applyArrowfc");
let applyArrowfd = document.getElementById("applyArrowfd");
let applyArrowfe = document.getElementById("applyArrowfe");


let applyArrowra = document.getElementById("applyArrowra");
let applyArrowrb = document.getElementById("applyArrowrb");
let applyArrowrc = document.getElementById("applyArrowrc");
let applyArrowrd = document.getElementById("applyArrowrd");
let applyArrowre = document.getElementById("applyArrowre");


let developmentJobsPage = document.getElementById("developmentJobsPage");
let developmentButton = document.getElementById("developmentButton");

let viewAllJobsPage = document.getElementById("viewAllJobsPage");
let viewAllButton = document.getElementById("viewAllButton");

let designJobsPage = document.getElementById("designJobsPage");
let designButton = document.getElementById("designButton");


let marketingJobsPage = document.getElementById("marketingJobsPage");
let marketingButton = document.getElementById("marketingButton");

let customerJobsPage = document.getElementById("customerJobsPage");
let customerButton = document.getElementById("customerButton");


let operationsJobsPage = document.getElementById("operationsJobsPage");
let operationsButton = document.getElementById("operationsButton");

let finaceJobsPage = document.getElementById("financeJobsPage");
let financeButton = document.getElementById("financeButton");

let managementJobsPage = document.getElementById("managementJobsPage");
let managementButton = document.getElementById("managementButton");


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




//development jobs page
applyArrowna.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrownb.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrownc.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})


applyArrownd.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowne.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})



//design jobs page
applyArrowda.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowdb.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowdc.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})


applyArrowdd.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowde.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})



//marketing jobs page
applyArrowma.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowmb.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowmc.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})


applyArrowmd.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowme.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})



//customer jobs page
applyArrowca.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowcb.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowcc.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})


applyArrowcd.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowce.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})



//operation jobs page
applyArrowoa.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowob.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowoc.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})


applyArrowod.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowoe.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})


//finance jobs page
applyArrowfa.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowfb.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowfc.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})


applyArrowfd.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowfe.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})


//management job page
applyArrowra.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowrb.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowrc.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})


applyArrowrd.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})

applyArrowre.addEventListener("click", function() {
    applyPortion.classList.remove("block");
    careers.classList.add("block");
})


viewAllButton.addEventListener("click", function() {
    viewAllJobsPage.classList.remove("block");
    developmentJobsPage.classList.add("block");
    designJobsPage.classList.add("block");
    marketingJobsPage.classList.add("block");
    customerJobsPage.classList.add("block");
    operationsJobsPage.classList.add("block");
    financeJobsPage.classList.add("block");
    managementJobsPage.classList.add("block");
});


developmentButton.addEventListener("click", function() {
    developmentJobsPage.classList.remove("block");
    viewAllJobsPage.classList.add("block");
});

designButton.addEventListener("click", function() {
    viewAllJobsPage.classList.add("block");
    developmentJobsPage.classList.add("block");
    designJobsPage.classList.remove("block");
    marketingJobsPage.classList.add("block");
    customerJobsPage.classList.add("block");
    operationsJobsPage.classList.add("block");
    financeJobsPage.classList.add("block");
    managementJobsPage.classList.add("block");
});

marketingButton.addEventListener("click", function() {
    viewAllJobsPage.classList.add("block");
    developmentJobsPage.classList.add("block");
    designJobsPage.classList.add("block");
    marketingJobsPage.classList.remove("block");
    customerJobsPage.classList.add("block");
    operationsJobsPage.classList.add("block");
    financeJobsPage.classList.add("block");
    managementJobsPage.classList.add("block");
});


customerButton.addEventListener("click", function() {
    viewAllJobsPage.classList.add("block");
    developmentJobsPage.classList.add("block");
    designJobsPage.classList.add("block");
    marketingJobsPage.classList.add("block");
    customerJobsPage.classList.remove("block");
    operationsJobsPage.classList.add("block");
    financeJobsPage.classList.add("block");
    managementJobsPage.classList.add("block");
});

operationsButton.addEventListener("click", function() {
    viewAllJobsPage.classList.add("block");
    developmentJobsPage.classList.add("block");
    designJobsPage.classList.add("block");
    marketingJobsPage.classList.add("block");
    customerJobsPage.classList.add("block");
    operationsJobsPage.classList.remove("block");
    financeJobsPage.classList.add("block");
    managementJobsPage.classList.add("block");
});

financeButton.addEventListener("click", function() {
    viewAllJobsPage.classList.add("block");
    developmentJobsPage.classList.add("block");
    designJobsPage.classList.add("block");
    marketingJobsPage.classList.add("block");
    customerJobsPage.classList.add("block");
    operationsJobsPage.classList.add("block");
    financeJobsPage.classList.remove("block");
    managementJobsPage.classList.add("block");
});

managementButton.addEventListener("click", function() {
    viewAllJobsPage.classList.add("block");
    developmentJobsPage.classList.add("block");
    designJobsPage.classList.add("block");
    marketingJobsPage.classList.add("block");
    customerJobsPage.classList.add("block");
    operationsJobsPage.classList.add("block");
    financeJobsPage.classList.add("block");
    managementJobsPage.classList.remove("block");
});