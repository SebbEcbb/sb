// Define what a "Page" looks like
export interface Page {
    url: string;
    title: string;
    priority: string;
    lastMod: string;
}

// Export the data so other files can import it
export const pages: Page[] = [
    { url: 'https://www.sebastienbadel.com/en/home/', title: 'Home', priority: '1.0', lastMod: '2026-02-22' },
    { url: 'https://www.sebastienbadel.com/en/home/about/', title: 'About', priority: '1.0', lastMod: '2026-02-22' },
    { url: 'https://www.sebastienbadel.com/en/home/contact/', title: 'Contact', priority: '0.8', lastMod: '2026-02-22' },
    { url: 'https://www.sebastienbadel.com/en/home/policies/', title: 'Legal Policies', priority: '0.8', lastMod: '2026-02-22' },
    { url: 'https://www.sebastienbadel.com/en/home/articles/', title: 'Articles', priority: '0.8', lastMod: '2026-02-22' },
    { url: 'https://www.sebastienbadel.com/en/home/articles/i-improvise/', title: 'I Improvise', priority: '0.8', lastMod: '2026-02-22' },
    { url: 'https://www.sebastienbadel.com/en/home/music-poetry/', title: 'Music & Poetry', priority: '0.8', lastMod: '2026-02-22' },
    { url: 'https://www.sebastienbadel.com/en/home/music-poetry/399', title: '\n#399: Perfect Peace in Weakness', priority: '0.8', lastMod: '2026-02-22' },
    // Add all your subfolders here...
];