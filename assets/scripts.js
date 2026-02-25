// Javascript

if (window.matchMedia("(hover: hover)").matches) {
  document.getElementById('app').classList.add('hover');
}


function toggleMenu() {
  if (document.getElementById('mainNav')) {
  const menuNavButton = document.getElementById('menuNavButton');
  const mainNav = document.getElementById('mainNav');
  const navClose = document.getElementById('navClose');
  
  if (menuNavButton.getAttribute('aria-expanded') === 'true') {
    menuNavButton.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('active');
    navClose.classList.remove('active');
    setTimeout( function(e) {
      mainNav.classList.remove('alive');
    }, 400);
  } else {
    menuNavButton.setAttribute('aria-expanded', 'true');
    mainNav.classList.add('alive');
    navClose.classList.add('active');
    setTimeout( function(e) {
      mainNav.classList.add('active');
    }, 40);
  }
  }
}

if (document.getElementById('navCloseMenu')) {
  var navCloseMenu = document.getElementById('navCloseMenu');
  navCloseMenu.addEventListener('click', function() {
    toggleMenu();
  });
}

if (document.getElementById('navClose')) {
  var navClose = document.getElementById('navClose');
  navClose.addEventListener('click', function() {
    toggleMenu();
    console.log('ello')
  });
}

if (document.getElementById('menuNavButton')) {
  var navButton = document.getElementById('menuNavButton');
  navButton.addEventListener('click', function() {
    toggleMenu();
  });
}

function menuStates() {
  let navItems = document.querySelector('#mainNav .nav-items');
  document.querySelectorAll('.nav-items .nav li a').forEach( function(navver) {
    navver.addEventListener('mouseenter', function (e) {
      navver.classList.add('hover');
      navItems.classList.add('over');
    });
    navver.addEventListener('mouseleave', function (e) {
      navver.classList.remove('hover');
      navItems.classList.remove('over');
    });
  });
  
}

menuStates();

function footNavStates() {
  let navItems = document.querySelector('#footer .navitems');
  document.querySelectorAll('.navitems nav li a').forEach( function(navver) {
    navver.addEventListener('mouseenter', function (e) {
      navver.classList.add('hover');
      navItems.classList.add('over');
    });
    navver.addEventListener('mouseleave', function (e) {
      navver.classList.remove('hover');
      navItems.classList.remove('over');
    });
  });
  
}
footNavStates();

function productGridClasses() {
  // let grid = document.querySelector('#grid .product');
  document.querySelectorAll('#grid .product').forEach( function(product) {
    let x = Math.floor((Math.random() * 35) + 1);
    let xr = x * 1000;
    // console.log(xr);
    setTimeout(function() {
      product.classList.add('slidebaby');
    }, xr); 
  });
  
}
setTimeout(function() {
  productGridClasses();
}, 12000); 


function headerScripts() {
  // let header = document.getElementById('header');
  // var waypointHead = new Waypoint({
  // element: document.getElementById('content'),
  // handler: function(direction) {
  //   if (direction === 'down') {
  //     header.classList.remove('light');
  //   }
  //   if (direction === 'up') {
  //     header.classList.add('light');
  //   }
  // },
  // offset: -48
  // })
  
  // let catApp = document.getElementById('app');
  // var waypointCat = new Waypoint({
  //   element: document.getElementById('content'),
  //   handler: function(direction) {
  //     if (direction === 'down') {
  //       console.log('down');
  //       catApp.classList.remove('filterstick');
  //     }
  //     if (direction === 'up') {
  //       console.log('up');
  //       catApp.classList.add('filterstick');
  //     }
  //   }, offset: '0%' 
  // })
  
  // var content = document.getElementById('content');
  // function handler(entries, observer) {
  //   for (entry of entries) {
  //     if (entry.isIntersecting) {
  //       content.classList.add('inView');
  //     } else {
  //       content.classList.remove('inView');
  //     }
  //   }
  // }
  // 
  // let observerApp = new IntersectionObserver(handler, { rootMargin: "100%" });
  // 
  // observerApp.observe(document.getElementById("content"));
  
  if(document.getElementById('contentSign')) {
    
  const content = document.getElementById('content');
  const contentSign = document.getElementById('contentSign');
  function position (text ) {
    document.querySelector("#position").innerHTML = text;
  }
  
  const observerApp = new window.IntersectionObserver(([entry]) => {
    // console.log(entry.boundingClientRect.top)
    // if (entry.isIntersecting) {
    //   console.log('Enter');
    //   content.classList.add('contentInView');
    // } else {
    //   content.classList.remove('contentInView');
    // }
    if (entry.boundingClientRect.top > 0) {
      //console.log('Below');
      content.classList.add('filterApsolute');
    } else {
      //console.log('Above');
      content.classList.remove('filterApsolute');
    }
  }, {
    root: null,
    threshold: 0,
  })
  
  observerApp.observe(contentSign)
  }
}






document.addEventListener("DOMContentLoaded", function(event) { 

    var simulateClickEvent = function (elem) {
      var evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      var canceled = !elem.dispatchEvent(evt);
    };
    
    
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search.slice(0));
    
    if (params.has('delivery')) {
      var deliveryAccordion = document.querySelector('#ac-1 h2');
      simulateClickEvent(deliveryAccordion);
    }

    //Campaigns Page Animation triggers
    if (document.getElementById('trigster')) {
      const trigster = document.getElementById('trigster');
      const undoner = document.getElementById('undoner');
      trigster.addEventListener('click',function(e){
              fallDownOne();
      });
      undoner.addEventListener('click',function(e){
              goBackUp();
      });
    }

    function goBack() {
      window.history.back();
    }

    if (document.getElementById('back_button')) {
      const back_button = document.getElementById('back_button');
      back_button.addEventListener('click',function(e) {
        goBack();
      });
    }
    
    // Cookies Nom Nom
    
    function maxAgeToGMT (nMaxAge) {
      return nMaxAge === Infinity ? "Fri, 31 Dec 9999 23:59:59 GMT" : (new Date(nMaxAge * 1e3 + Date.now())).toUTCString();
    }

    if (document.getElementById('productSlides')) {
      const galleryHelp = document.getElementById('galleryHelp');
      const imageHelp = document.getElementById('imageHelp');
      if (docCookies.hasItem("imageHelp")) { 
        // tumbleweed
      } else {
        imageHelp.classList.add('showme');
        galleryHelp.addEventListener('click',function(e) {
          docCookies.setItem("imageHelp", "Seen", maxAgeToGMT(31536000));
          imageHelp.classList.remove('showme');
        });
      }
    }
    
    // if (document.getElementById('geopops')) {
    //   const geopop = document.getElementById('geopops');
    //   if (docCookies.hasItem("geoPop")) { 
    //     // tumbleweed
    //   } else {
    //     console.log('no cookies today');
    //     // fire the iframe
    //     setTimeout(function() {
    //       var linkSrc = '/modals/geopop';
    //       var modal2 = document.getElementById("geopops"); 
    //       if(!document.getElementById("ayeframe")) {
    //           var iframe = document.createElement('iframe');
    //           iframe.src = linkSrc;
    //           iframe.id = "ayeframe";
    //           iframe.scrolling = "no";
    //           modal2.appendChild(iframe);
    //         }
    //       modal2.classList.add("active");
    //       resizeIframe(iframe);  
    //     }, 7000); 
    //     let unannoy = document.querySelector(".unannoy");
    //     unannoy.addEventListener('click',function(e) {
    //       docCookies.setItem("geoPop", "Seen", maxAgeToGMT(604800));
    //       if (geopop.classList.contains("active")) {
    //         geopop.classList.remove("active");
    //       }
    //     });
    //     
    //     geopop.addEventListener('click',function(e) {
    //       if (geopop.classList.contains("active")) {
    //         docCookies.setItem("geoPop", "Seen", maxAgeToGMT(604800));
    //         geopop.classList.remove("active");
    //       }
    //     });
    //     
    //   }
    // }
    // window.addEventListener("load", function() {
    //   
    //   if (document.getElementById('emailpop')) {
    //     console.log('popup coming... sorry');
    //     const emailpop = document.getElementById('emailpop');
    //     if (docCookies.hasItem("emailPop") || docCookies.hasItem("emailPopInteracted")) { 
    //       // tumbleweed
    //     } else {
    //       console.log('no cookies today');
    //       // fire the iframe
    //       setTimeout(function() {
    //         var linkSrc = '/modals/emailpop';
    //         var modal3 = document.getElementById("emailpop"); 
    //         if(!document.getElementById("ayeframe")) {
    //             var iframe = document.createElement('iframe');
    //             iframe.src = linkSrc;
    //             iframe.id = "ayeframe";
    //             iframe.scrolling = "no";
    //             modal3.appendChild(iframe);
    //         }
    //         setTimeout(function() {
    //           modal3.addEventListener('DOMContentLoaded', function () {
    //             modal3.classList.add("active");
    //             resizeIframe(iframe);
    //           });
    //         }, 2000); 
    //       }, 5000); 
    //       
    //       let closer = document.querySelector(".closer");
    //       closer.addEventListener('click',function(e) {
    //         docCookies.setItem("emailPop", "Seen", maxAgeToGMT(604800));
    //         if (emailpop.classList.contains("active")) {
    //           emailpop.classList.remove("active");
    //         }
    //       });
    //     }
    //   }
    // });
    
    // Use forms callback to add a cookie if successfully submitted
    if (document.getElementById('newsletterForm')) {
      const form = document.getElementById('newsletterForm');
      form.addEventListener('freeform-ready', function(event) {
        const freeform = event.target.freeform;
        freeform.addOnSuccessfulAjaxSubmit((event, form, response) => {
          docCookies.setItem("emailPopInteracted", "Clicked", maxAgeToGMT(31536000));
          console.log("submitted and dandy");
        })
      }); 
    }

    // refresh waypoints when mixitup has finished dickin around
    // if (document.getElementById('grid')) {
    //   const grdlock = document.getElementById('grid');
    //   grdlock.addEventListener('mixEnd', function(e){
    //     Waypoint.refreshAll();
    //   });
    // }

//     if (document.getElementById('footer-customerservice')) {
// 
//       function resetFooterStates() {
//         let footerContaina = document.getElementById('footer-content');
//         document.querySelectorAll('.footernav .nav-items li a').forEach( function(footerMenus) {
//           footerMenus.classList.remove('active');
//         });
//         document.querySelectorAll('.footer-content div').forEach( function(footerContent) {
//           footerContent.classList.remove('ola');
//         });
//         footerContaina.classList.remove('fade-out-top');
//       }
//       
//       if (document.getElementById('cServices')) {
//         let cServices = document.getElementById('cServices');
//         let footerCustomerservice = document.getElementById('footer-customerservice');
//         cServices.addEventListener('click',function(e) {
//           resetFooterStates();
//           
//           setTimeout( function() {
//             cServices.classList.add('active');
//             footerCustomerservice.classList.add('ola');
//           }, 100);
// 
//           setTimeout( function() {
//             Waypoint.refreshAll();
//           }, 300);
// 
//           e.preventDefault();
//         });
//       }
// 
//       if (document.getElementById('Contact')) {
//         let Contact = document.getElementById('Contact');
//         let footerContact = document.getElementById('footer-contact');
//         Contact.addEventListener('click',function(e) {
//           resetFooterStates();
//           
//           setTimeout( function() {
//             Contact.classList.add('active');
//             footerContact.classList.add('ola');
//           }, 100);
// 
//           setTimeout( function() {
//             Waypoint.refreshAll();
//           }, 300);
// 
//           e.preventDefault();
//         });
//       }
// 
//       if (document.getElementById('Privacy')) {
//         let Privacy = document.getElementById('Privacy');
//         let footerPrivacy = document.getElementById('footer-privacy');
//         Privacy.addEventListener('click',function(e) {
//           resetFooterStates();
//           
//           setTimeout( function() {
//             Privacy.classList.add('active');
//             footerPrivacy.classList.add('ola');
//           }, 100);
// 
//           setTimeout( function() {
//             Waypoint.refreshAll();
//           }, 300);
// 
//           e.preventDefault();
//         });
//       }
// 
//       if (document.querySelector('.accordion-container')) {
//         // Waypoints accordion resets
//         document.querySelectorAll('.accordion-container .ac').forEach( function(accorNav) {
//           accorNav.addEventListener('click',function() {
//             setTimeout( function() {
//               Waypoint.refreshAll();
//             }, 800);
//           });
//         });
//       }
// 
//       if (document.getElementById('Subscribe')) {
//         let Subscribe = document.getElementById('Subscribe');
//         let footerSubscribe = document.getElementById('footerSubscribe');
//         Subscribe.addEventListener('click',function(e) {
//           resetFooterStates();
//           
//           setTimeout( function() {
//             Subscribe.classList.add('active');
//             footerSubscribe.classList.add('ola');
//           }, 100);
// 
//           e.preventDefault();
//         });
//       }
//       var accordion = new Accordion('.accordion-bag');
//       var accordion = new Accordion('.accordion-bog');
// 
//     }

    if(document.getElementById("appoint")) {
      
      let appoint = document.getElementById("appoint");

      appoint.addEventListener('click',function(e) {
        var linkSrc = appoint.href;
        var modal = document.getElementById("modal"); 
        if(!document.getElementById("ayeframe")) {
          var iframe = document.createElement('iframe');
          iframe.src = linkSrc;
          iframe.id = "ayeframe";
          iframe.scrolling = "no";
          modal.appendChild(iframe);
        }
        modal.classList.add("active");
        e.preventDefault();
        resizeIframe(iframe);
      });

      var modalbg = document.getElementById("modal");

      modalbg.addEventListener('click',function(e) {
        if (modalbg.classList.contains("active")) {
          modalbg.classList.remove("active");
        }
      });
    }

    if(document.getElementById("poa")) {
      
      let poa = document.getElementById("poa");

      poa.addEventListener('click',function(e) {
        var linkSrc = poa.href;
        var modaly = document.getElementById("modaly"); 
        if(!document.getElementById("ayeframe")) {
          var iframe = document.createElement('iframe');
          iframe.src = linkSrc;
          iframe.id = "ayeframe";
          iframe.scrolling = "no";
          modaly.appendChild(iframe);
        }
        modaly.classList.add("active");
        e.preventDefault();
        resizeIframe(iframe);
      });

      var modalybg = document.getElementById("modaly");

      modalybg.addEventListener('click',function(e) {
        if (modalybg.classList.contains("active")) {
          modalybg.classList.remove("active");
        }
      });
    }

    if (document.getElementById('newsletterForm')) {

      const daform = document.getElementById('newsletterForm');
      form.addEventListener('freeform-ready', function(event) {
        const freeform = event.target.freeform;
        freeform.addOnAfterAjaxSubmit((event, daform, response) => {
          // Do something on a successful ajax submit
          console.log("I think it happened");
          dataLayer.push({'event':'signedUp'});
        })
      });

    }
  });

  function uppateCategoryClasses() {
    const thisPage = window.location.protocol + "//" + window.location.host + window.location.pathname;
    document.querySelectorAll('#collectionsort li a').forEach( function(navListLink) {
      // console.log(thisPage);
      // console.log(navListLink.href);
      if ( thisPage == navListLink.href ) {
        navListLink.classList.add("active");
      } else {
        navListLink.classList.remove("active");
      }
    });
  }

function helloJewellerysort() {

  if (document.getElementById('jewellerysort')) {

    let jewelleryNav = document.getElementById('jewellerysort');

    setTimeout( function(e) {
      jewelleryNav.classList.add('hello');
    }, 300);
  }
}

function animateProducts() {
  if (document.querySelector('.containerCat')) {
    document.querySelector('.containerCat').classList.remove('aurevoir');
    document.querySelector('.containerCat').classList.add('bonjour');
  }
}
function deAnimateProducts() {
  if (document.querySelector('.containerCat')) {
    document.querySelector('.containerCat').classList.add('aurevoir');
    document.querySelector('.containerCat').classList.remove('bonjour');
  }
}

function killClasses() {
  if (document.querySelector('.containerCat')) {
    document.querySelector('.containerCat').classList.remove('bonjour');
  }
}

// 
// fitty('#fullwidth', {
//     minSize: 40,
//     maxSize: 600,
// });


// (function(window, document, undefined) {
//   "use strict";
// 
//   // List of Video Vendors embeds you want to support
//   var players = ['iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]'];
// 
//   // Select videos
//   var fitVids = document.querySelectorAll(players.join(","));
// 
//   // If there are videos on the page...
//   if (fitVids.length) {
//     // Loop through videos
//     for (var i = 0; i < fitVids.length; i++) {
//       // Get Video Information
//       var fitVid = fitVids[i];
//       var width = fitVid.getAttribute("width");
//       var height = fitVid.getAttribute("height");
//       var aspectRatio = height / width;
//       var parentDiv = fitVid.parentNode;
// 
//       // Wrap it in a DIV
//       var div = document.createElement("div");
//       div.className = "fitVids-wrapper";
//       div.style.paddingBottom = aspectRatio * 100 + "%";
//       parentDiv.insertBefore(div, fitVid);
//       fitVid.remove();
//       div.appendChild(fitVid);
// 
//       // Clear height/width from fitVid
//       fitVid.removeAttribute("height");
//       fitVid.removeAttribute("width");
//     }
//   }
// })(window, document);

function oohFitties() {
  if(document.querySelector('.lyric_one')) {
    fitty('.lyric_one', {
      minSize: 20,
      maxSize: 1000,
    });
  }
  if(document.querySelector('.lyric_two')) {
    fitty('.lyric_two', {
      minSize: 20,
      maxSize: 1000,
    });
  }
  if(document.querySelector('.lyric_three')) {
    fitty('.lyric_three', {
      minSize: 20,
      maxSize: 1000,
    });
  }
  if(document.querySelector('.catFit')) {
    fitty('.catFit', {
      minSize: 20,
      maxSize: 1000,
    });
  }
  if(document.querySelector('.full_on')) {
    fitty('.full_on', {
      minSize: 20,
      maxSize: 1000,
    });
  }
}


window.addEventListener('load', (event) => {
  console.log('page is fully loaded');

  
  if(document.querySelector('.lyrics')) {
    document.querySelector('.lyrics').classList.add('hiya');
  }
  
  headerScripts();
  oohFitties();
});

// window.addEventListener("resize", function(){
//   oohFitties();
// }, true);
