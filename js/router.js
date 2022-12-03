
const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "../pages/404.html",
  "/": "../pages/index.html",     
  "/contact": "/pages/contact.html",
  "/about": "/pages/about.html",
  "/get-involved": "/pages/getInvolved.html",
  "/saaf-hyderabad": "/pages/projects/saafHyderabad.html",
  "/child-protection": "/pages/child-protection.html",
  "/gallery": "/pages/gallery.html",
  "/volunter-registration": "/pages/volunter/registration.html",
  "/volunter-list": "/pages/volunter/volunter-list.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

