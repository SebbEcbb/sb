//alert("en is running");
function loadJs_en(){
    //alert("loadJs_en is running");
    navigation_en();
    navlist_en(); 
    siteFooter_en();
    sidebarRight_en();
}

function navigation_en() {
    document.getElementById("navigation").innerHTML = 
    "<a href='https://sebastienbadel.com'><img src='/Images/site-icon.png' height='20px' alt='Flower'> Sébastien Badel </a>"+
        "<p class='sub-title'>Believe beyond struggle, love beyond pain</p>";
  }

  function navlist_en() {
    document.getElementById("nav-list").innerHTML = 
    "<li><a href='/en/'>Home</a></li>"+
    "<li><a href='/en/blog.html' target='_blank'>Articles & Poetry</a></li>"+
    "<li><a href='https://youtube.com/@sebastienbadelpiano' target='_blank'>YouTube</a></li>"+
    "<li><a href='/en/about/' target='_blank'>About</a></li>"+
    "<li><a href='/en/contact.html' class='contact-btn'>Contact</a></li>";
  }

function siteFooter_en() {
    document.getElementById("footer").innerHTML = 
      "<a href='/contact.html' class='footer-link'><img src='/Images/message_icon.png' height='24px' alt='Contact'><strong>Contact</strong></a>"+
      "<a href='https://facebook.com/@sebastien.badel' class='footer-link' target='_blank'><img src='/Images/fb_icon.png' height='24px' alt='Facebook'><strong>Facebook</strong></a>"+
      "<a href='https://www.linkedin.com/in/sebastienbadelpiano/' class='footer-link'><img src='/Images/li_icon.png' height='24px' alt='LinkedIn'><strong>LinkedIn</strong></a>"+
      "<a href='https://youtube.com/@SebastienBadelPiano'class='footer-link' target='_blank'>  <img src='/Images/yt_icon.png'' height='24px' alt='YouTube'> <strong>Youtube </strong></a>"+                
      "<div class='s50'></div><p  style='text-align: center;'>©2020-2026 Sébastien Badel</p>"
  } 

  function sidebarRight_en() {
    document.getElementById("rightsidebar").innerHTML = 
    "<h3>Featured</h3>"+
    "<div class='card links'>"+
    "<p><strong>Latest posts</strong></p>"+
    "<p><a href='/en/introduction-to-my-music.html' target='_blank'>Why I improvise</a></p>"+
    "<p><a href='/en/improvisation-and-flow.html' target='_blank'>Improvisation & Flow</a></p>"+
    "<p><a href='/en/blog.html' target='_blank'>Articles & Poems</a></p>"+
    "</div>"+
    "<div class='card links'>"+
    "<p><strong>Watch on YouTube</strong></p>"+
    "<p><a href='https://youtube.com/@sebastienbadelpiano' target='_blank'>Sebb Piano Art</a></p>"+
    "<p style='margin:15px 0; font-weight:bold'>Popular content</p>"+
    "<p><a href='https://youtu.be/kwDoKqhUYyY' target='_blank'>#399</a></p>"+
    "<p><a href='https://youtu.be/DKpWLzgiwLA' target='_blank'>#389</a></p>"+
    "<p><a href='https://youtu.be/zRaKcpzvI3k' target='_blank'>#373</a></p>"+
    "</div>"+
    "<div class='card id='donate' >"+
    "<p><strong>Buy me a coffee ?</strong></p>"+
    "<p>Donate via Paypal</p>"+
    "<form action='https://www.paypal.com/donate' method='post' target='_blank'> "+
    "<input type='hidden' name='hosted_button_id' value='SDTTCGFJ7ZRMN' /> "+
    "<input type='image' src='/Images/heart.png' border='0' width='40%' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Button make a donation with PayPal' />"+
    "</form>"+
    "</div>";

  }

      // Mobile Menu Logic
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    // Sticky Scroll Logic
    window.onscroll = function() { StickyJs() };    
    function StickyJs() {
        const backBtn = document.getElementById("back");
        const trigger = document.querySelector(".hero");
        if (window.scrollY > 300) {
            backBtn.className = "back-to-top";
        } else {
            backBtn.className = "hide";
        }
    }
  
/*
  function donate_en() {
    document.getElementById("donate").innerHTML = 
    "<div class='s50'></div><p  style='text-align: left;'>Buy me a coffee?</p>" +
    "<form style='text-align: left; margin-top:5px' action='https://www.paypal.com/donate' method='post' target='_blank' > <input type='hidden' name='hosted_button_id' value='SDTTCGFJ7ZRMN' /> <input type='image' src='/Images/Heart.jpg' border='0' width='40%' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Button make a donation with PayPal' /></form>"
  } 
  
    
window.onscroll = function() {StickyJs()};    

function StickyJs() {

    const element = document.documentElement.getBoundingClientRect();
    const m = -element.y
    const n = document.getElementById("main").offsetTop;
    
    if( n < m){    
    document.getElementById("back").className = "menuitem back-to-top";          
    document.getElementById("leftsidebar").className = "sticky-left";
    document.getElementById("navigation").className = "links sticky-right";
    
    } else {
    document.getElementById("back").className = "hide";
    document.getElementById("leftsidebar").className = "pop";
    document.getElementById("navigation").className = "links";
    }
    
    }*/
