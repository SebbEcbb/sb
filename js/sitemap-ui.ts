import { sitemapData } from '/admin/data/sitemap-data';
console.log('Sitemap data:', sitemapData);

const list = document.getElementById('sitemap-list') as HTMLUListElement;

// Create the links dynamically
sitemapData.forEach(page => {
    const li = document.createElement('li'); // Create <li>
    const a = document.createElement('a');   // Create <a>
    
    a.href = page.url;          // Set the link
    a.textContent = page.title;  // Set the text
    
    li.appendChild(a);          // Put <a> inside <li>
    list.appendChild(li);       // Put <li> inside <ul>
});