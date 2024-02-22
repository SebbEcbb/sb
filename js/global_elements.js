function GlobalTitle() {
  document.getElementById("site-title").innerHTML = 
  "<a href='https://sebastienbadel.com'><img src='../Images/site-icon.JPG' height='30px' alt='Flower'>Sébastien Badel</a>"  
}

function GlobalNavbar() {
    document.getElementById("navbar").innerHTML = 
    "<li class='menuitem'> <a href='./contact.html' target='_blank'>Contact</a></li><li class='menuitem'> <a href='https://youtube.com/@sebastienbadelpiano' target='_blank'>YouTube</a> </li><li class='menuitem'><a href='#page-description' >Shop</a></li><li class='menuitem'><a href='#page-description' >Blog</a></li><li class='menuitem'><a href='#page-description' >Contenu</a></li><li class='menuitem'><a href='#page-description' >Home</a></li>";
  }

  function GlobalFooter() {
    document.getElementById("site-title").innerHTML = 
    "<a href='https://sebastienbadel.com'><img src='../Images/site-icon.JPG' height='30px' alt='Flower'>Sébastien Badel</a>"  
  }  

  function GlobalDonate() {
    document.getElementById("donate").innerHTML = 
    "<form style='text-align: left; margin-top:5px' action='https://www.paypal.com/donate' method='post' target='_blank' > <input type='hidden' name='hosted_button_id' value='SDTTCGFJ7ZRMN' /> <input type='image' src='../Images/Heart.jpg' border='0' class='center' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Bouton Faites un don avec PayPal' /></form>"
  }  