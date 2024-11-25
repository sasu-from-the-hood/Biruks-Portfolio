const showCases = [
  {
    image: "naf-digital.png",
    projectName: "Naf Digital Booking",
    discription:
      "NAF Digital Booking Hotel offers seamless, user-friendly online reservations with modern amenities for a hassle-free stay experience.",
    link: "https://nafdigital.et/",
  },
  {
    image: "HawassaMart.png",
    projectName: "Hawassa Mart",
    discription:
      "The web helps you to buy any kind of product that you want for your face care routien and to get your self a phone",
    link: "https://hawassa-mart.vercel.app/",
  },
  {
    image: "lightburger.png",
    projectName: "Light Burger",
    discription:
      "The web helps you to order any kind of food that are on the menu list we have on this web",
    link: "",
  },
  {
    image: "MessayHotel.png",
    projectName: "Messay International Hotel",
    discription:
      "The website helps you to book a room that you want and to order a food from where ever you are",
    link: "",
  },

  {
    image: "sun-bank.png",
    projectName: "Sun-mobile-banking",
    discription:
      "This website is made for mobile banking system so people can withdraw money just using their phone and use it as a paymentgate way",
    link: "https://sun-mobile-banking.vercel.app/",
  },
];

let showCasesHTML = "";
showCases.forEach((showCase) => {
  showCasesHTML += `
  <div class="work">
    <img src="${showCase.image}" alt="">
    <div class="layer">
        <h3>${showCase.projectName}</h3>
        <p>${showCase.discription}</p>
        <a href="${showCase.link}" target="_blank"> <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i> </a>
    </div>
  </div>
  `;
});

document.querySelector(".js-work-list").innerHTML = showCasesHTML;
