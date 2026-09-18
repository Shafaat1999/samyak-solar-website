const calculateBtn = document.getElementById("calculateBtn");
const billSelect = document.getElementById("bill");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const monthlyBill = Number(billSelect.value);

  // Demo estimate: solar offsets approximately 75% of the current electricity bill.
  const annualSaving = monthlyBill * 12 * 0.75;

  result.querySelector("strong").textContent =
    "₹ " + Math.round(annualSaving).toLocaleString("en-IN");

  result.classList.add("show");
});

billSelect.addEventListener("change", () => {
  result.classList.remove("show");
});



function knowMore() {
    alert(
        "Welcome to Samyak Solar Energy! Discover clean and reliable solar solutions."
    );
}


function checkEligibility() {
    alert(
        "Subsidy Eligibility Check\n\nPM Surya Ghar Yojana provides subsidy benefits for eligible residential solar installations."
    );
}

// =====================================
// PROJECT SLIDER
// =====================================

const projectsTrack = document.getElementById("projectsTrack");

const prevButton = document.querySelector(".prev-btn");

const nextButton = document.querySelector(".next-btn");


// Card ki width calculate karega
function getScrollAmount() {

    const card = projectsTrack.querySelector(".project-card");

    if (!card) {
        return 300;
    }

    const gap = 14;

    return card.offsetWidth + gap;
}


// =====================================
// NEXT BUTTON
// =====================================

nextButton.addEventListener("click", function () {

    projectsTrack.scrollBy({

        left: getScrollAmount(),

        behavior: "smooth"

    });

});


// =====================================
// PREVIOUS BUTTON
// =====================================

prevButton.addEventListener("click", function () {

    projectsTrack.scrollBy({

        left: -getScrollAmount(),

        behavior: "smooth"

    });

});

// =========================================
// SOLAR NETWORK FORM
// =========================================

const getStartedBtn = document.getElementById("getStartedBtn");

const networkEmail = document.getElementById("networkEmail");


getStartedBtn.addEventListener("click", function () {

    const email = networkEmail.value.trim();


    // Email empty check
    if (email === "") {

        alert("Please enter your email address.");

        return;

    }


    // Basic email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }


    alert(
        "Thank you! We will contact you soon."
    );


    networkEmail.value = "";

});