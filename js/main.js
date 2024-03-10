function load_home(){  
  // check all these functions before applying them
  
  //alert("load_home launched");
  //set_lang();  
  //Home_site_title();
  //Home_site_footer();
  //navigation_en();
  //Home_Donate();

}

function set_lang(){
  // Get the array of preferred languages set in the user's browser
    var preferredLanguages = navigator.languages;

// Log the preferred languages to the console for demonstration
  //('Preferred languages:', preferredLanguages);
}

function siteTitle() {
  //alert("ok site-title")
  document.getElementById("site-title").innerHTML = 
  "<a href='https://sebastienbadel.com'><img src='../Images/site-icon.png' height='30px' alt=''>Sébastien Badel</a>";
}

  function Home_site_footer() {
    document.getElementById("footer").innerHTML = 
      "<div class='s100'></div>"+        
      "<a href='./contact.html' class='links' target='_blank'><img style='vertical-align:middle;margin-right: 5px;' src='./Images/message_icon.png'' height='24px' alt='message-icon'><strong>Contact</strong></a>&nbsp &nbsp;"+
      "<a href='https://facebook.com/SebastienBadel' class='links' target='_blank'> <img style='vertical-align:middle;margin-right: 5px;' src='./Images/fb_icon.png'' height='24px' alt='message-icon'><strong>Facebook </strong> </a>&nbsp &nbsp;"+
      "<a href='https://youtube.com/@SebastienBadelPiano'class='links' target='_blank'>  <img style='vertical-align:middle;margin-right: 5px;' src='./Images/yt_icon.png'' height='24px' alt='message-icon'> <strong>Youtube </strong></a>&nbsp &nbsp; "+                
      "<div class='s50'></div><p  style='text-align: center;'>Site developed ©2020-2024 by Sébastien Badel</p>"
  }  

 
  function Home_Donate() {
    document.getElementById("donate").innerHTML = 
    "<form style='text-align: left; margin-top:5px' action='https://www.paypal.com/donate' method='post' target='_blank' > <input type='hidden' name='hosted_button_id' value='SDTTCGFJ7ZRMN' /> <input type='image' src='./Images/Heart.jpg' border='0' class='center' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Bouton Faites un don avec PayPal' /></form>"
  }  

  function StickyJs() {
    alert("ok, stickyJS")
    var n = document.getElementById("main").offsetTop + 80;
    var m = document.getElementById("footer").offsetTop;
    if (document.documentElement.scrollTop > n && document.documentElement.scrollTop < m) {
    document.getElementById("back").className = "menuitem back-to-top";
    document.getElementById("leftsidebar").className = "sticky";
    //document.getElementById("profile").className = "hide";
    
    } else {
    document.getElementById("back").className = "hide";
    document.getElementById("leftsidebar").className = "";
    //document.getElementById("profile").className = "";
    }
}

function StickyHomeJs() {
  var n = document.getElementById("donate").offsetTop + 80;
  var m = document.getElementById("footer").offsetTop;
  if (document.documentElement.scrollTop > n && document.documentElement.scrollTop < m) {
  document.getElementById("back").className = "menuitem back-to-top";
  document.getElementById("leftsidebar").className = "sticky";
  document.getElementById("profile").className = "hide";
  
  } else {
  document.getElementById("back").className = "hide";
  document.getElementById("leftsidebar").className = "";
  document.getElementById("profile").className = "";
  }
}

