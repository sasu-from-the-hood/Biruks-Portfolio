const showCases = [/*{
  image: 'lightburger.png',
  projectName: 'Light Burger',
  discription: 'The web helps you to order any kind of food that are on the menu list we have on this web'
},*/ {
  image: 'MessayHotel.png',
  projectName: 'Messay International Hotel',
  discription: 'The website helps you to book a room that you want and to order a food from where ever you are'
},{
  image: 'coming soon.avif',
  projectName: 'Hawassa Mart',
  discription: 'The web helps you to buy any kind of product that you want for your face care routien and to get your self a phone'
}];


let showCasesHTML = '';
showCases.forEach((showCase)=>{
  showCasesHTML += `
  <div class="work">
    <img src="${showCase.image}" alt="">
    <div class="layer">
        <h3>${showCase.projectName}</h3>
        <p>${showCase.discription}</p>
        <a href="#"> <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i> </a>
    </div>
  </div>
  `;
});

document.querySelector('.js-work-list').innerHTML = showCasesHTML;
