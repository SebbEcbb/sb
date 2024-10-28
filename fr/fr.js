function loadJs_fr() {
  //alert("ok")
    siteTitle();
    navigation_fr();
    siteFooter_fr();
    donation_fr();
}

function siteTitle() {
  //alert("siteTitle")
  document.getElementById("site-title").innerHTML = 
  "<a href='https://sebastienbadel.com'><img src='../Images/site-icon.png' height='30px' alt='Flower'>Sébastien Badel</a>";
}

function siteFooter_fr() {
  //alert("siteFooter_fr")
  document.getElementById("footer").innerHTML = 
    "<div class='s100'></div>"+        
    "<a href='./contact.html' class='links' target='_blank'><img style='vertical-align:middle;margin-right: 5px;' src='../Images/message_icon.png'' height='24px' alt='message-icon'><strong>Contact</strong></a>&nbsp &nbsp;"+
    "<a href='https://www.linkedin.com/in/sebastienbadelpiano/' class='links' target='_blank'> <img style='vertical-align:middle;margin-right: 5px;' src='../Images/li_icon.png'' height='24px' alt='message-icon'><strong>LinkedIn </strong> </a>&nbsp &nbsp;"+
    "<a href='https://youtube.com/@SebastienBadelPiano'class='links' target='_blank'>  <img style='vertical-align:middle;margin-right: 5px;' src='../Images/yt_icon.png'' height='24px' alt='message-icon'> <strong>Youtube </strong></a>&nbsp &nbsp; "+                
    "<div class='s50'></div><p  style='text-align: center;'>Site developpé ©2020-2024 par Sébastien Badel</p>"
} 

function navigation_fr() {
  //alert("navigation_fr")
    document.getElementById("navigation").innerHTML = 
    "<li class='menuitem'><a href='./contact.html' target='_blank'>Me contacter</a></li>"+
    "<li class='menuitem'><a href='https://youtube.com/@sebastienbadelpiano' target='_blank'>YouTube</a> </li>"+
    "<li class='menuitem'><a href='./boutique' target='_blank' >Trucs à vendre</a></li>"+
    "<li class='menuitem'><a href='./blog.html' target='_blank'>Articles</a></li>"+
    "<li class='menuitem'><a href='#page-description' >Contenu</a></li>"
  }

  function donation_fr() {
    //alert("donation_fr")
    document.getElementById("donate").innerHTML = 
    " <p><strong>Voulez-vous m'aider ?</strong></p><br><form style='text-align: left; margin-top:5px' action='https://www.paypal.com/donate' method='post' target='_blank' > <input type='hidden' name='hosted_button_id' value='SDTTCGFJ7ZRMN' /> <input type='image' src='../Images/Heart.jpg' border='0' width='30%' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Button make a donation with PayPal' /></form>"
  } 

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