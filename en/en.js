function loadJs_en(){
    //alert("loadJs_en is running");
    siteTitle();
    navigation_en();
    siteFooter_en();
    donate_en();
}

function siteTitle() {
    document.getElementById("site-title").innerHTML = 
    "<a href='https://sebastienbadel.com'><img src='/Images/site-icon.png' height='30px' alt='Flower'>Sébastien Badel</a>";
  }

function siteFooter_en() {
    document.getElementById("footer").innerHTML = 
      "<div class='s100'></div>"+        
      "<a href='/contact.html' class='links' target='_blank'><img style='vertical-align:middle;margin-right: 5px;' src='/Images/message_icon.png'' height='24px' alt='message-icon'><strong>Contact</strong></a>&nbsp &nbsp;"+
      "<a href='https://www.facebook.com/sebastien.badel/' class='links' target='_blank'> <img style='vertical-align:middle;margin-right: 5px;' src='/Images/fb_icon.png'' height='24px' alt='message-icon'><strong>Facebook </strong> </a>&nbsp &nbsp;"+
      "<a href='https://www.linkedin.com/in/sebastienbadelpiano/' class='links' target='_blank'> <img style='vertical-align:middle;margin-right: 5px;' src='/Images/li_icon.png'' height='24px' alt='message-icon'><strong>LinkedIn </strong> </a>&nbsp &nbsp;"+
      "<a href='https://youtube.com/@SebastienBadelPiano'class='links' target='_blank'>  <img style='vertical-align:middle;margin-right: 5px;' src='/Images/yt_icon.png'' height='24px' alt='message-icon'> <strong>Youtube </strong></a>&nbsp &nbsp; "+                
      "<div class='s50'></div><p  style='text-align: center;'>©2020-2026 Sébastien Badel</p>"
  } 

function navigation_en() {
    document.getElementById("navigation").innerHTML = 
    "<li><a href='/contact.html' target='_blank'>Contact</a></li>"+
    "<li><a href='/en/about/' target='_blank'>About</a></li>"+
    "<li class='menuitem'><a href='https://youtube.com/@sebastienbadelpiano' target='_blank'>YouTube</a> </li>"+
    "<li class='menuitem'><a href='/en//blog.html' target='_blank'>Articles & Poetry </a></li>"+
    "<li class='menuitem'><a href='#page-description' >Content</a></li>"+
    "<li class='menuitem'><a href='https://sebastienbadel.com/' >Home</a></li>"
  }

  function navigation_donation_en() {
    document.getElementById("navigation").innerHTML = 
    "<li class='menuitem'><a href='./en/contact.html' target='_blank'>Contact</a></li>"+
    "<li class='menuitem'><a href='./en/About.html' target='_blank'>About</a></li>"+
    "<li class='menuitem'><a href='https://youtube.com/@sebastienbadelpiano' target='_blank'>YouTube</a> </li>"+
    "<li class='menuitem'><a href='./en/blog.html' target='_blank'>Articles</a></li>"+
    "<li class='menuitem'><a href='#page-description' >Content</a></li>"+
    "<li class='menuitem'><a href='https://sebastienbadel.com/' >Home</a></li>"
  }
  

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
    
    }

