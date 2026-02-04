//Mobile Responsive Menu
        const menuToggle = document.getElementById('mobile-menu');
        const navList = document.getElementById('nav-list');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navList.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (navList.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navList.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });





function siteTitle() {
  //alert("ok site-title")
  document.getElementById("site-title").innerHTML = 
  "<a href='https://sebastienbadel.com'><img src='../Images/site-icon.png' height='30px' alt=''>Sébastien Badel</a>";
}

  function Home_site_footer() {
    document.getElementById("footer").innerHTML = 
      "<div class='s100'></div>"+        
      "<a href='./contact.html' class='links' target='_blank'><img style='vertical-align:middle;margin-right: 5px;' src='./Images/message_icon.png'' height='24px' alt='message-icon'><strong>Contact</strong></a>&nbsp &nbsp;"+
      "<a href='https://www.linkedin.com/in/sebastienbadelpiano/' class='links' target='_blank'> <img style='vertical-align:middle;margin-right: 5px;' src='./Images/li_icon.png'' height='24px' alt='message-icon'><strong>LinkedIn </strong> </a>&nbsp &nbsp;"+
      "<a href='https://youtube.com/@SebastienBadelPiano'class='links' target='_blank'>  <img style='vertical-align:middle;margin-right: 5px;' src='./Images/yt_icon.png'' height='24px' alt='message-icon'> <strong>Youtube </strong></a>&nbsp &nbsp; "+                
      "<div class='s50'></div><p  style='text-align: center;'>Site developed ©2020-2024 by Sébastien Badel</p>"
  }  

 
  function Home_Donate() {
    document.getElementById("donate").innerHTML = 
    "<form style='text-align: left; margin-top:5px' action='https://www.paypal.com/donate' method='post' target='_blank' > <input type='hidden' name='hosted_button_id' value='SDTTCGFJ7ZRMN' /> <input type='image' src='./Images/Heart.jpg' border='0' class='center' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Bouton Faites un don avec PayPal' /></form>"
  }  





