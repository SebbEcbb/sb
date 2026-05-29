function loadJs_en(){
    brand_en();
    navlist_en();  
    sidebarRight_en(); 
    donate_en();
    footer_en();
}

function brand_en() {
    document.getElementById("brand").innerHTML = 
    "<a href='https://sebastienbadel.com'><img src='/public/images/site-icon.png' height='20px' alt='Flower'> Sébastien Badel </a>"+
    "<p class='sub-title'>Believe beyond struggle, love beyond pain</p>";
  }

function navlist_en() {
    document.getElementById("nav-list").innerHTML = 
    "<li><a href='/en/'>Home</a></li>"+
    "<li><a href='/en/home/piano-art/'>Piano Art</a></li>"+
    "<li><a href='/en/home/articles/'>Articles</a></li>"+
    "<li><a href='/en/home/music-poetry/'>Poetry</a></li>"+
    "<li><a href='/en/home/about/'>About</a></li>"+
    "<li><a href='/en/'>Language</a></li>"+
    "<li><a href='/en/home/contact' class='contact-btn'>Contact</a></li>";
}

function sidebarRight_en() {

    const elmnt = document.getElementById("rightsidebar")

    elmnt.innerHTML = 
    "<h3>Featured</h3>"+
    "<div class='card links'>"+
    "<p><strong>Latest articles</strong></p>"+
    "<p><a href='/en/home/articles/i-improvise' target='_blank'>I improvise (#315)</a></p>"+
    "<p><a href='/en/home/' target='_blank'>A man and his cause (#143)</a></p>"+
    "<p><a href='/en/home/music-poetry/380/' target='_blank'>Mundus Mutationis (#380)</a></p>"+
    "<p><a href='/en/home/articles/improvisation_flow/' target='_blank'>Improvisation & Flow</a></p>"+
    "<p><a href='/en/home/music-poetry/377/' target='_blank'>Pace carentia, ... (#377)</a></p>" +
    "</div>"+
    "<div class='card links'>"+
    "<p><strong>Watch on YouTube</strong></p>"+
    "<p><a href='https://youtube.com/@sebastienbadelpiano' target='_blank'>Sebb Piano Art</a></p>"+
    "<p style='margin:15px 0; font-weight:bold'>Popular content</p>"+
    "<p><a href='https://youtu.be/kwDoKqhUYyY' target='_blank'>#399</a></p>"+
    "<p><a href='https://youtu.be/DKpWLzgiwLA' target='_blank'>#389</a></p>"+
    "<p><a href='https://youtu.be/zRaKcpzvI3k' target='_blank'>#373</a></p>"+
    "</div>";
}

function donate_en() {
    const donateDiv = document.getElementById("paypal");
    donateDiv.classList.remove("hide");
    donateDiv.classList.add("card");
    donateDiv.style.borderLeft = "4px solid var(--col-2)";
    donateDiv.innerHTML ="";
    donateDiv.innerHTML="<p><strong>Want to offer me a coffee ?</strong><br></p>"+
    "Strong, please... <br><br>" +
    "Paypal ? <br><br>" +
    "<form action='https://www.paypal.com/donate' method='post' target='_blank'> "+
    "<input type='hidden' name='hosted_button_id' value='SDTTCGFJ7ZRMN' /> "+
    "<input id='donate-img' type='image' src='/public/images/heart.png' border='0' width='20%' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Button make a donation with PayPal' />"+
    "</form>";
}

function footer_en() {
    document.getElementById("footer").innerHTML = 
    "<a href='/contact.html' class='footer-link'><img src='/public/images/message_icon.png' height='24px' alt='Contact'><strong>Contact</strong></a>"+
    "<a href='https://facebook.com/@sebastien.badel' class='footer-link' target='_blank'><img src='/public/images/fb_icon.png' height='24px' alt='Facebook'><strong>Facebook</strong></a>"+
    "<a href='https://www.linkedin.com/in/sebastienbadelpiano/' class='footer-link'><img src='/public/images/li_icon.png' height='24px' alt='LinkedIn'><strong>LinkedIn</strong></a>"+
    "<a href='https://youtube.com/@SebastienBadelPiano'class='footer-link' target='_blank'>  <img src='/public/images/yt_icon.png' height='24px' alt='YouTube'> <strong>Youtube </strong></a>"+                
    "<div class='s20'></div>" + 
    "<a href='/en/home/policies' class='footer-link' target='_blank' >Legal Policies</a>" +
    "<p style='display:inline-flex; text-align: center;'>©2020-2026 Sébastien Badel (all rights reserved)</p>" + 
    "<div class='s20'></div>";
} 

function loadJs_fr(){
    brand_fr();
    navlist_fr();  
    sidebarRight_fr();
    donate_fr();
    footer_fr();
    
}

function brand_fr() {
    document.getElementById("brand").innerHTML = 
    "<a href='https://sebastienbadel.com'><img src='/public/images/site-icon.png' height='20px' alt='Flower'> Sébastien Badel </a>"+
    "<p class='sub-title'>Croire au delà des troubles<br> Aimer au delà des peines</p>";
}


function navlist_fr() {
    document.getElementById("nav-list").innerHTML = 
    "<li><a href='/fr/'>Accueil</a></li>"+
    "<li><a href='/en/home/piano-art/'>Art Piano</a></li>"+
    "<li><a href='/fr/accueil/articles/'>Articles</a></li>"+
    "<li><a href='/fr/accueil/musique-poesie/'>Poésie</a></li>"+
    "<li><a href='/fr/accueil/a-propos/'>À propos</a></li>"+
    "<li><a href='/fr/'>Language</a></li>"+
    "<li><a href='/fr/accueil/contact/' class='contact-btn'>Contact</a></li>";
}

  function sidebarRight_fr() {
    document.getElementById("rightsidebar").innerHTML = 
    "<h3>Mis en avant</h3>"+
    "<div class='card links'>"+
    "<p><strong>Derniers articles</strong></p>"+
    "<p><a href='/fr/accueil/articles/j-improvise' target='_blank'>J'improvise (n°315)</a></p>"+
    "<p><a href='/fr/accueil/' target='_blank'>Un homme et sa cause (n°143)</a></p>"+
    "<p><a href='/fr/accueil/musique-poesie/380' target='_blank'>Mundus Mutationis (n°380)</a></p>"+
    "</div>"+
    "<div class='card links'>"+
    "<p><strong>Regarder sur YouTube</strong></p>"+
    "<p><a href='https://youtube.com/@sebastienbadelpiano' target='_blank'>Sebb Piano Art</a></p>"+
    "<p style='margin:15px 0; font-weight:bold'>Contenu populaire</p>"+
    "<p><a href='https://youtu.be/kwDoKqhUYyY' target='_blank'>#399</a></p>"+
    "<p><a href='https://youtu.be/DKpWLzgiwLA' target='_blank'>#389</a></p>"+
    "<p><a href='https://youtu.be/zRaKcpzvI3k' target='_blank'>#373</a></p>"+
    "</div>";

}

function donate_fr() {
    const donateDiv = document.getElementById("paypal");
    donateDiv.classList.remove("hide");
    donateDiv.classList.add("card");
    donateDiv.style.borderLeft = "4px solid var(--col-2)";
    donateDiv.innerHTML ="";
    donateDiv.innerHTML="<p><strong>Offrez-vous un café ?</strong><br></p>"+
    "Fort, s'il vous plait...<br><br>" +
    "Paypal ? <br><br>" +
    "<form action='https://www.paypal.com/donate' method='post' target='_blank'> "+
    "<input type='hidden' name='hosted_button_id' value='SDTTCGFJ7ZRMN' /> "+
    "<input id='donate-img' type='image' src='/public/images/heart.png' border='0' width='20%' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Button make a donation with PayPal' />"+
    "</form>";
}

function footer_fr() {
    document.getElementById("footer").innerHTML = 
    "<a href='/contact.html' class='footer-link'><img src='/public/images/message_icon.png' height='24px' alt='Contact'><strong>Contact</strong></a>"+
    "<a href='https://facebook.com/@sebastien.badel' class='footer-link' target='_blank'><img src='/public/images/fb_icon.png' height='24px' alt='Facebook'><strong>Facebook</strong></a>"+
    "<a href='https://www.linkedin.com/in/sebastienbadelpiano/' class='footer-link'><img src='/public/images/li_icon.png' height='24px' alt='LinkedIn'><strong>LinkedIn</strong></a>"+
    "<a href='https://youtube.com/@SebastienBadelPiano'class='footer-link' target='_blank'>  <img src='/public/images/yt_icon.png' height='24px' alt='YouTube'> <strong>Youtube </strong></a>"+                
    "<div class='s20'></div>" + 
    "<a href='/fr//mentions-legales/' class='footer-link' target='_blank' >Mentions Légales</a>" +
    "<p style='display:inline-flex; text-align: center;'>©2020-2026 Sébastien Badel (tous droits réservés)</p>" + 
    "<div class='s20'></div>";
} 

function StickyFooter() {
    const backBtn = document.getElementById("back");
    const ft =document.getElementById("footer");
    if (window.scrollY > 1200) {
        backBtn.classList.remove("hide");
        ft.classList.remove("hide");
    } else {
        backBtn.classList.add("hide");
        ft.classList.add("hide");
    }
}   

//Mobile Responsive Menu
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.add('hide');
    navList.classList.add('active');

    // Prevent body scroll when menu is open
    if (navList.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

document.querySelectorAll('.nav-links, .nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('hide');
        navList.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});




// Sticky Scroll Logic
window.onscroll = function() { StickyFooter() };    



//Breadcrumb Logic

const path = window.location.pathname;
const segments = path.split('/').filter(segment => segment !== "" && !segment.endsWith(".html"));
const breadcrumbContainer = document.getElementById('breadcrumb');

let accumulatedPath = '';

segments.forEach((segment, index) => {
  
  accumulatedPath += `/${segment}`;

  const link = document.createElement('a');
    
  link.href = accumulatedPath;
  
  link.textContent = segment.charAt(0).toUpperCase() + segment.slice(1);
  link.textContent = link.textContent.replaceAll('-', ' '); 
  link.textContent = link.textContent.replaceAll('_', ' & '); 

  breadcrumbContainer.appendChild(link);

  if (index < segments.length - 1) {
    breadcrumbContainer.append(' / '); 
  }
});

//Embed functions
async function renderDoc(Url) {

    if (!Url) {
        console.error("No Document URL provided!");
        return;
    }

    const docUrl = `https://docs.google.com/document/d/e/${Url}/pub`;
    const container = document.getElementById("article");
   

    try {
        container.innerHTML = '<p class="text-center py-10">Fetching  data...</p>';

        const response = await fetch(docUrl);

        if (!response.ok) {
            throw new Error(`Proxy Error: ${response.status} - The proxy might be down.`);
        }

        const docHtml = await response.text();
        container.innerHTML = docHtml;
        
        const banners = document.getElementById("banners");
        banners?.remove(); 
    
        const myElement = document.getElementById("contents");

       if (myElement) {
            myElement.id = "new-content";
       }


    } catch (error) {
        console.error("Fetch Process Failed:", error);
        console.log(error.message);
    }
}

//Videos in sidebar
function renderVid(vidId, vidName, vidDesc, element) {

    if (!vidId) {
        console.error("No YouTube Video ID provided!");
        return;

    } 

    if (element==="" || element==="null"){element="yt-iframe"};

    const ytIframeUrl = `https://youtube.com/embed/${vidId}/?autoplay=0`;

    
    const ytIframe = document.getElementById(element);
    ytIframe.classList.remove('hide')
    ytIframe.classList.add('card')      
    ytIframe.innerHTML = ''; 
    ytIframe.innerHTML = `<iframe ` +
        `src="${ytIframeUrl}" `+
        `title="YouTube video player" `+
        `frameborder="0" `+
        `allowfullscreen>`+
        `</iframe>`;

    if (vidName && vidDesc) {
        const vidDescDiv = document.getElementById("vid-desc");
        vidDescDiv.classList.remove("hide");
        vidDescDiv.classList.add("info-card");
        vidDescDiv.innerHTML = '';
        vidDescDiv.innerHTML = `<a ` +
            `href='https://youtu.be/${vidId}' target='_blank'>` +
            `<h4>${vidName}</h4>` +
            `<p> ${vidDesc.trim()} </p></a>`;
        }  
    }



//image in sidebar
function placeImg(featedImg, imgTitle, imgDescription) {
    const imgDiv = document.getElementById("featured-img");
    const descDiv = document.getElementById("featured-desc");

    imgDiv.classList.remove("hide");
    descDiv.classList.remove("hide");

    if (featedImg && imgTitle) {
        const imgSrc = `/public/images/${featedImg}`;
        imgDiv.innerHTML = `<img src="${imgSrc}" alt="${imgTitle}" />`;
        descDiv.innerHTML = 
        `<h4>${imgTitle}</h4>` + 
        `<p>${imgDescription}</p>`;
    }          
}

//PlayVideos & playlist logic

// Variables globales
let currentPlaylist = [];
let currentTrackIndex = 0;
let playlistTimer = null; 
let playListNumber = null;

// 1. LA FONCTION PLAYLIST
function playList(listNum) {

    clearTimeout(playlistTimer);
    playListNumber = listNum
    currentPlaylist = Videos.filter(vid => vid.lists == listNum);
    console.log(currentPlaylist)

    if (currentPlaylist.length > 0) {
        currentTrackIndex = 0;
        const badge = document.getElementById("playlist-status")
        badge.innerHTML="Playlist Active : " + playListNumber
        badge.style.display = "inline-block";
        
        // On lance le premier morceau
        playVid(currentPlaylist[currentTrackIndex]);
        console.log("video " + currentPlaylist[currentTrackIndex].title + " lancé.")
    } else {
        alert("Aucune vidéo trouvée pour cette playlist.");
    }
}

// 2. LA FONCTION DE LECTURE (Avec l'intelligence du minuteur)
function playVid(vidObject) {
    clearTimeout(playlistTimer);

    const vFrame = document.getElementById("video-frame");
    const vTitle = document.getElementById("current-video-title");
    
    vTitle.innerHTML = "Sébastien Badel : Authentic Unmodified Piano Improvisations <br>" + vidObject.title;
    vFrame.src = vidObject.url + "preview?autoplay=1";

    const dureeEnSecondes = parseInt(vidObject.duration);

    if (!isNaN(dureeEnSecondes) && dureeEnSecondes > 0) {
        console.log(`Minuteur activé pour ${vidObject.title}. Changement automatique dans ${dureeEnSecondes} secondes.`);
        
        playlistTimer = setTimeout(() => {
            console.log(`Temps écoulé pour ${vidObject.title}. Passage au morceau suivant...`);
            nextTrack();
        }, dureeEnSecondes * 1000);

    } else {

        console.warn(`Attention : Pas de durée valide pour ${vidObject.title}. Le passage automatique ne fonctionnera pas.`);
    }
}

// 3. LA FONCTION POUR PASSER AU MORCEAU SUIVANT
function nextTrack() {
    if (currentPlaylist.length > 0 && currentTrackIndex < currentPlaylist.length - 1) {
        currentTrackIndex++;
        playVid(currentPlaylist[currentTrackIndex]); // playVid va relancer un nouveau minuteur tout seul !
    } else {
        console.log("Fin de la playlist automatique !");
        document.getElementById("playlist-status").style.display = "none";
    }
}

// Pour les clics sur un morceau solo dans la barre latérale
window.playVideo = function(vidNum) {
    clearTimeout(playlistTimer); // On stoppe le minuteur automatique
    const targetVid = Videos.find(vid => vid.title.includes(vidNum));
    if (targetVid) {
        currentPlaylist = [];
        document.getElementById("playlist-status").style.display = "none";
        playVid(targetVid);
    }
};

  

