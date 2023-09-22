const services = [{
  type: 'solid',
  icon: 'crop',
  headerText: 'Web Design',
  discription: 'Web design encompasses the creation and arrangement of visual elements, typography, and user interface components to design engaging and accessible websites for optimal user experience.'
}, {
  type: 'solid',
  icon: 'code',
  headerText: 'Web Development',
  discription: 'Web development is the process of creating and maintaining websites and web applications, encompassing both front-end and back-end development.'
},{
  type: 'brands',
  icon: 'js',
  headerText: 'Js Developer',
  discription: 'A JavaScript developer is a coding expert proficient in using the JavaScript programming language to build dynamic and interactive web applications. They work on the client and server sides, leveraging JavaScript libraries and frameworks to create responsive, feature-rich websites and web services.'
}];
let serviceHTML = '';
services.forEach((service)=>{
  serviceHTML += `
  <div>
    <i class="fa-${service.type} fa-${service.icon}"></i>
    <h2>${service.headerText}</h2>
    <p>${service.discription}</p>
    <a href="#">Learn more</a>
  </div>
  `;
});

document.querySelector('.js-services-list').innerHTML = serviceHTML;




