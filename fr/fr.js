function loadJs_fr() {
    alert("ok");
    siteTitle();
    navigation_fr();
    siteFooter_fr();
    donation_fr();
}

function siteFooter_fr() {
    document.getElementById("footer").innerHTML = 
      "<div class='s100'></div>"+        
      "<a href='../contact.html' class='links' target='_blank'><img style='vertical-align:middle;margin-right: 5px;' src='../Images/message_icon.png'' height='24px' alt='message-icon'><strong>Contact</strong></a>&nbsp &nbsp;"+
      "<a href='https://facebook.com/SebastienBadelPiano' class='links' target='_blank'> <img style='vertical-align:middle;margin-right: 5px;' src='../Images/fb_icon.png'' height='24px' alt='message-icon'><strong>Facebook </strong> </a>&nbsp &nbsp;"+
      "<a href='https://youtube.com/@SebastienBadelPiano'class='links' target='_blank'>  <img style='vertical-align:middle;margin-right: 5px;' src='../Images/yt_icon.png'' height='24px' alt='message-icon'> <strong>Youtube </strong></a>&nbsp &nbsp; "+                
      "<div class='s50'></div><p  style='text-align: center;'>Site dévéloppé ©2020-2024 par Sébastien Badel</p>"
  } 
function navigation_fr() {
    document.getElementById("navigation").innerHTML = 
    "<li class='menuitem'><a href='./contact.html' target='_blank'>Contact</a></li>"+
    "<li class='menuitem'><a href='https://youtube.com/@sebastienbadelpiano' target='_blank'>YouTube</a> </li>"+
    "<li class='menuitem'><a href='./boutique' target='_blank' >Boutique</a></li>"+
    "<li class='menuitem'><a href='./blog.html' target='_blank'>Blog</a></li>"+
    "<li class='menuitem'><a href='#page-description' >Contenu</a></li>"+
    "<li class='menuitem'><a href='../index.html' >Acceuil</a></li>"   
  }

  function donation_fr() {
    document.getElementById("donate").innerHTML = 
    "<form style='text-align: left; margin-top:5px' action='https://www.paypal.com/donate' method='post' target='_blank' > <input type='hidden' name='hosted_button_id' value='SDTTCGFJ7ZRMN' /> <input type='image' src='../Images/Heart.jpg' border='0' width='30%' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Faire un don avec Paypal' /></form>"
  } 