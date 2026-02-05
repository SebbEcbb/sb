//alert("en is running");
function loadJs_fr(){
    //alert("loadJs_fr is running");
    navigation_fr();
    navlist_fr(); 
    siteFooter_fr();
    sidebarRight_fr();
}

function navigation_fr() {
    document.getElementById("navigation").innerHTML = 
    "<a href='https://sebastienbadel.com'><img src='/Images/site-icon.png' height='20px' alt='Flower'> Sébastien Badel </a>"+
        "<p class='sub-title'>Croire au delà des troubles, aimer au delà des douleurs</p>";
  }

  function navlist_fr() {
    document.getElementById("nav-list").innerHTML = 
    "<li><a href='/fr/'>Accueil</a></li>"+
    "<li><a href='/fr/blog.html' target='_blank'>Articles & Poésies</a></li>"+
    "<li><a href='https://youtube.com/@sebastienbadelpiano' target='_blank'>YouTube</a></li>"+
    "<li><a href='/fr/about/' target='_blank'>À propos</a></li>"+
    "<li><a href='/fr/contact.html' class='contact-btn'>Contact</a></li>";
  }

function siteFooter_fr() {
    document.getElementById("footer").innerHTML = 
      "<a href='/contact.html' class='footer-link'><img src='/Images/message_icon.png' height='24px' alt='Contact'><strong>Contact</strong></a>"+
      "<a href='https://facebook.com/@sebastien.badel' class='footer-link' target='_blank'><img src='/Images/fb_icon.png' height='24px' alt='Facebook'><strong>Facebook</strong></a>"+
      "<a href='https://www.linkedin.com/in/sebastienbadelpiano/' class='footer-link'><img src='/Images/li_icon.png' height='24px' alt='LinkedIn'><strong>LinkedIn</strong></a>"+
      "<a href='https://youtube.com/@SebastienBadelPiano'class='footer-link' target='_blank'>  <img src='/Images/yt_icon.png'' height='24px' alt='YouTube'> <strong>Youtube </strong></a>"+                
      "<div class='s50'></div><p  style='text-align: center;'>©2020-2026 Sébastien Badel</p>"
  } 

  function sidebarRight_fr() {
    document.getElementById("rightsidebar").innerHTML = 
    "<h3>Mis en avant</h3>"+
    "<div class='card links'>"+
    "<p><strong>Derniers articles</strong></p>"+
    "<p><a href='/fr/pourquoi-j-improvise' target='_blank'>Pourquoi j'improvise</a></p>"+
    "<p><a href='/fr/improvisation-et-flow' target='_blank'>Improvisation & Flow</a></p>"+
    "<p><a href='/fr/blog.html' target='_blank'>Articles & Poésies</a></p>"+
    "</div>"+
    "<div class='card links'>"+
    "<p><strong>Regarder sur YouTube</strong></p>"+
    "<p><a href='https://youtube.com/@sebastienbadelpiano' target='_blank'>Sebb Piano Art</a></p>"+
    "<p style='margin:15px 0; font-weight:bold'>Contenu populaire</p>"+
    "<p><a href='https://youtu.be/kwDoKqhUYyY' target='_blank'>#399</a></p>"+
    "<p><a href='https://youtu.be/DKpWLzgiwLA' target='_blank'>#389</a></p>"+
    "<p><a href='https://youtu.be/zRaKcpzvI3k' target='_blank'>#373</a></p>"+
    "</div>"+
    "<div class='card id='donate' >"+
    "<p><strong>Offrez-moi un café ?</strong></p>"+
    "<p>Faire un don via Paypal</p>"+
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
  
