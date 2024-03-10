function loadJs_en(){
    //alert("loadJs_en is running");
    siteTitle();
    navigation_en();
    siteFooter_en();
    donate_en();
}

function siteTitle() {
    document.getElementById("site-title").innerHTML = 
    "<a href='https://sebastienbadel.com'><img src='../Images/site-icon.png' height='30px' alt='Flower'>Sébastien Badel</a>";
  }

function siteFooter_en() {
    document.getElementById("footer").innerHTML = 
      "<div class='s100'></div>"+        
      "<a href='./contact.html' class='links' target='_blank'><img style='vertical-align:middle;margin-right: 5px;' src='../Images/message_icon.png'' height='24px' alt='message-icon'><strong>Contact</strong></a>&nbsp &nbsp;"+
      "<a href='https://facebook.com/SebastienBadelPiano' class='links' target='_blank'> <img style='vertical-align:middle;margin-right: 5px;' src='../Images/fb_icon.png'' height='24px' alt='message-icon'><strong>Facebook </strong> </a>&nbsp &nbsp;"+
      "<a href='https://youtube.com/@SebastienBadelPiano'class='links' target='_blank'>  <img style='vertical-align:middle;margin-right: 5px;' src='../Images/yt_icon.png'' height='24px' alt='message-icon'> <strong>Youtube </strong></a>&nbsp &nbsp; "+                
      "<div class='s50'></div><p  style='text-align: center;'>Site developed ©2020-2024 by Sébastien Badel</p>"
  } 

function navigation_en() {
    document.getElementById("navigation").innerHTML = 
    "<li class='menuitem'><a href='./contact.html' target='_blank'>Contact</a></li>"+
    "<li class='menuitem'><a href='https://youtube.com/@sebastienbadelpiano' target='_blank'>YouTube</a> </li>"+
    "<li class='menuitem'><a href='./shop.html' target='_blank'>Shop</a></li>"+
    "<li class='menuitem'><a href='./blog.html' target='_blank'>Blog</a></li>"+
    "<li class='menuitem'><a href='#page-description' >Content</a></li>"+
    "<li class='menuitem'><a href='../index.html' >Home</a></li>"   
  }

  function donate_en() {
    document.getElementById("donate").innerHTML = 
    "<form style='text-align: left; margin-top:5px' action='https://www.paypal.com/donate' method='post' target='_blank' > <input type='hidden' name='hosted_button_id' value='SDTTCGFJ7ZRMN' /> <input type='image' src='../Images/Heart.jpg' border='0' width='30%' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Button make a donation with PayPal' /></form>"
  } 
  
    
    
    function StickyJs() {
        var n = document.getElementById("donate").offsetTop + 80;
        var m = document.getElementById("footer").offsetTop;

        if (document.documentElement.scrollTop > n && document.documentElement.scrollTop < m) {
        document.getElementById("back").className = "menuitem back-to-top";
        document.getElementById("leftsidebar").className = "sticky";        
        } else {
        document.getElementById("back").className = "hide";
        document.getElementById("leftsidebar").className = "";        
        }
    }

