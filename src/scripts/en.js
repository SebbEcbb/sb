//Loading functions
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
    "<li><a href='/en/home/articles/' target='_blank'>Articles</a></li>"+
    "<li><a href='/en/home/music-poetry/' target='_blank'>Music & Poetry</a></li>"+
    "<li><a href='https://youtube.com/@sebastienbadelpiano' target='_blank'>Sebb Piano Art</a></li>"+
    "<li><a href='/en/home/about/' target='_blank'>About</a></li>"+
    "<li><a href='/en/home/contact.html' class='contact-btn'>Contact</a></li>";
}

function sidebarRight_en() {

    const elmnt = document.getElementById("rightsidebar")
    //console.log("rightsidebar : " + typeof(elmnt), elmnt);

    elmnt.innerHTML = 
    "<h3>Featured</h3>"+
    "<div class='card links'>"+
    "<p><strong>Latest posts</strong></p>"+
    "<p><a href='/en/home/articles/i-improvise' target='_blank'>I improvise</a></p>"+
    "<p><a href='/en/home/articles/improvisation_flow' target='_blank'>Improvisation & Flow</a></p>"+
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
    donateDiv.innerHTML="<p><strong>Buy me a coffee ?</strong></p>"+
    "<p>Donate via Paypal</p>"+
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

// Close menu when a link is clicked
document.querySelectorAll('.nav-links, .nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('hide');
        navList.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});




// Sticky Scroll Logic
window.onscroll = function() { StickyJs() };    

function StickyJs() {
    const backBtn = document.getElementById("back");
    const ft =document.getElementById("footer");
    if (window.scrollY > 300) {
        backBtn.classList.remove("hide");
        ft.classList.remove("hide");
    } else {
        backBtn.classList.add("hide");
        ft.classList.add("hide");
    }
}

//Breadcrumb Logic

// 1. Get the current path (e.g., "/products/electronics/phones")
const path = window.location.pathname;

// 2. Split into segments and remove empty strings from the start/end
const segments = path.split('/').filter(segment => segment !== "" && !segment.endsWith(".html"));

// 3. Select the HTML element where the breadcrumbs will live
const breadcrumbContainer = document.getElementById('breadcrumb');

// 4. This is our "accumulator" to build the URL step-by-step
let accumulatedPath = '';

// 5. Loop through each segment to create the links
segments.forEach((segment, index) => {
  // Update the accumulator: add a slash and the current folder name
  accumulatedPath += `/${segment}`;

  // Create an anchor element <a>
  const link = document.createElement('a');
  
  // Set the link destination to our accumulated path
  link.href = accumulatedPath;
  
  // Set the text (Capitalizing the first letter for better UI)
  link.textContent = segment.charAt(0).toUpperCase() + segment.slice(1);
  link.textContent = link.textContent.replaceAll('-', ' '); // Replace dashes with spaces for better readability');
  link.textContent = link.textContent.replaceAll('_', ' & '); // Replace underscores with " & " for better readability');

  // Append the link to our container
  breadcrumbContainer.appendChild(link);

  // If it's not the last item, add a separator symbol
  if (index < segments.length - 1) {
    breadcrumbContainer.append(' / '); // Using a bold arrow as a separator
  }
});

//Embed functions
async function renderDoc(Url) {

    // 1. Validate ID (Logic: prevent 'undefined' errors)
    if (!Url) {
        console.error("No Document URL provided!");
        return;
    }

    const docUrl = `https://docs.google.com/document/d/e/${Url}/pub`;
    console.log("Fetching from Google Docs URL:", docUrl);
    const container = document.getElementById("article");
   

    try {
        // Change UI state to loading
        container.innerHTML = '<p class="text-center py-10">Fetching  data...</p>';

        const response = await fetch(docUrl);

        // Logic: Check if the network request actually worked
        if (!response.ok) {
            throw new Error(`Proxy Error: ${response.status} - The proxy might be down.`);
        }

        // Logic: Convert the response stream into a text string
        const docHtml = await response.text();
        container.innerHTML = docHtml;
        
        
        // 4. Clean up Google's specific code (Optional Logic)
        const banners = document.getElementById("banners");
        banners?.remove(); // 3. The element is deleted from the DOM
    
        //remove standard google style and adjust with own style
        const myElement = document.getElementById("contents");

       if (myElement) {
            myElement.id = "new-content";
       }


    } catch (error) {
        // Fallback Logic: If the proxy fails, we tell the user why.
        console.error("Fetch Process Failed:", error);
        console.log(error.message);
    }
}

function renderVid(vidId, vidName, vidDesc) {
    /*
    console.log(
        "YouTube Video with \n" +
        "ID:" + vidId + "\n" +
        "Name:" + vidName + "\n" +
        "Description:" + vidDesc);*/

    // 1. Validate ID (Logic: prevent 'undefined' errors)
    if (!vidId) {
        console.error("No YouTube Video ID provided!");
        return;

    } else {
        
        const ytIframeUrl = `https://youtube.com/embed/${vidId}/?autoplay=0`;  
        //console.log("Constructed YouTube Iframe URL:", ytIframeUrl);
        
        const ytIframe = document.getElementById("yt-iframe");
        const vidDescDiv = document.getElementById("vid-desc");

        if(ytIframe) {
            ytIframe.classList.remove("hide");
            ytIframe.classList.add("card");
            ytIframe.innerHTML = ''; // Clear any existing content before adding the new iframe 
            ytIframe.innerHTML = `<iframe ` +
            `src="${ytIframeUrl}" `+
            `title="YouTube video player" `+
            `frameborder="0" `+
            `allowfullscreen>`+
            `</iframe>`;

        } else {

            console.error("YouTube Iframe element not found in the DOM!");
        }
        if (vidDescDiv && vidDesc) {
            vidDescDiv.classList.remove("hide");
            vidDescDiv.classList.add("info-card");
            vidDescDiv.innerHTML = '';
            vidDescDiv.innerHTML = `<a ` +
                `href='https://youtu.be/${vidId}' target='_blank'>` +
                `<h3>${vidName}</h3>` +
                `<p> ${vidDesc.trim()} </p></a>`;
        }  
    }
}



function placeHero(featedImg, imgTitle, imgDescription) {
    const imgDiv = document.getElementById("featured-img");
    const descDiv = document.getElementById("featured-desc");

    imgDiv.classList.remove("hide");
    descDiv.classList.remove("hide");

    if (featedImg && imgTitle) {
        const imgSrc = `/public/images/${featedImg}`;
        imgDiv.innerHTML = `<img src="${imgSrc}" alt="${imgTitle}" />`;
        descDiv.innerHTML = 
        `<h3>${imgTitle}</h3>` + 
        `<p>${imgDescription}</p>`;
    }          
}

  

