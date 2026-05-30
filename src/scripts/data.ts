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

export interface Video {
    title: string;
    url: string;
    duration: string;
    lists:string;
}

export const Videos : Video[]=[
    {title:"#/n° 102", url:"https://drive.google.com/file/d/15R-o7gd5dL15JaDBQoGrXrBOjU6BvnK4/", duration:"1075", lists:"102"},
    {title:"#/n° 103", url:"https://drive.google.com/file/d/14I3jDYLyP5-zazbOBOcIUGLsYCE5L6lh/", duration:"670", lists:"102"},
    {title:"#/n° 104", url:"https://drive.google.com/file/d/1_WDyuXCLGCHlAHKKOd2_kJ-nu_H_mHcp/", duration:"920", lists:"102"},
    {title:"#/n° 107", url:"https://drive.google.com/file/d/1MFN_eh4VkuaTAA58bwtl75JQjCEOjeom/", duration:"505", lists:"107"},
    {title:"#/n° 108", url:"https://drive.google.com/file/d/1BA9eLddJtbVYoMOWHYEhscrFQYyQ0dF7/", duration:"710", lists:"107"},
    {title:"#/n° 109", url:"https://drive.google.com/file/d/1ZOq7hLTYSdZfTgTcfLbGxErBKcckMv4G/", duration:"480", lists:"107"},
    {title:"#/n° 110", url:"https://drive.google.com/file/d/1a5JAo7YMh1bp9mZ4RXUBQKGto_WDMiWs/", duration:"450", lists:"110"},
    {title:"#/n° 111", url:"https://drive.google.com/file/d/1LlUjhMeKUyvy2xXl_tdSHcHAgd45oWTN/", duration:"850", lists:"110"},
    {title:"#/n° 113", url:"https://drive.google.com/file/d/15kRYAAY0as24hr4m1scXfZ0pLWV1ALiG/", duration:"850", lists:"113"},
    {title:"#/n° 114", url:"https://drive.google.com/file/d/11XRUgaAFFN160r8qs7PCGPKWdMOPT_Gf/", duration:"780", lists:"113"},
    {title:"#/n° 115", url:"https://drive.google.com/file/d/14-gJwiGfeCMbW_evf5SzBxZyJfaDUOto/", duration:"1120", lists:"113"},
    {title:"#/n° 116", url:"https://drive.google.com/file/d/1OFIKTadLqviezt-8q3SbNxdzZ6H4FDtv/", duration:"290", lists:"116"},
    {title:"#/n° 117", url:"https://drive.google.com/file/d/1oNYjDuUJJzTb38RKOzyBco-5ve8SDfqI/", duration:"670", lists:"116"},
    {title:"#/n° 118", url:"https://drive.google.com/file/d/1xSBz4eT_wdDNt9z9m9Z3nRPLux5gpHsI/", duration:"730", lists:"116"},
    {title:"#/n° 119", url:"https://drive.google.com/file/d/1SKgcIzo3WdpGRyG4yUQTsAtban_HAC3z/", duration:"585", lists:"119"},
    {title:"#/n° 120", url:"https://drive.google.com/file/d/1EjwBk-XSYS1JAk9En_H4BhGC21JwfON-/", duration:"720", lists:"119"},
    {title:"#/n° 121", url:"https://drive.google.com/file/d/1yyxHbfm2RjixAiEvt0jYfS37OcR3qEaY/", duration:"635", lists:"119"},
    {title:"#/n° 122", url:"https://drive.google.com/file/d/1P57rsfJVUtH2iEicWQa5KsiT0jB7s_cT/", duration:"690", lists:"119"},
    {title:"#/n° 124", url:"https://drive.google.com/file/d/1hg5mI7RhhiXP0_q8uqTMvvMd0PY02tAs/", duration:"1490", lists:"124"},
    {title:"#/n° 125", url:"https://drive.google.com/file/d/1ONEmFJeuI_aRHtxKXnH1AlpSIbpX4ELW/", duration:"870", lists:"124"},
    {title:"#/n° 126", url:"https://drive.google.com/file/d/10ShZVp6w8EM-vs9cu60ZlXTHaWJ7mxND/", duration:"815", lists:"124"},
    {title:"#/n° 128", url:"https://drive.google.com/file/d/1zdvGwVJHJDE-CLZ2tskAaBK_lDYDfN47/", duration:"560", lists:"128"},
    {title:"#/n° 129", url:"https://drive.google.com/file/d/17D9w9Bypve6Tf4zwmHSxWH2kyDBdZqt6/", duration:"1135", lists:"128"},

    {title:"#/n° 322", url:"https://drive.google.com/file/d/1poCMQDgnHc_LJST_PFo_yU-DnGVjjjVY/", duration:"950", lists:"322"},
    {title:"#/n° 359", url:"", duration:"1180", lists:"359"},
    {title:"#/n° 360", url:"https://drive.google.com/file/d/1J0fyBTcMGt_vi8-O9HS0QP_A9ha16_uE/", duration:"1830", lists:"359"},
    {title:"#/n° 377", url:"https://drive.google.com/file/d/1NGhnXSd6H7YgXwcSvjV0xWZ4Ip3f0IaY/", duration:"3230", lists:"377"},
    {title:"#/n° 380", url:"https://drive.google.com/file/d/1H-TbsqMx4SsWipveFL8Z_MqTzOdmfalA/", duration:"1830", lists:"380"},
    {title:"#/n° 385", url:"https://drive.google.com/file/d/16pswlZczN83X_hIMENGBCUDHNVlK8MB8/", duration:"2570", lists:"380"},
    {title:"#/n° 386", url:"https://drive.google.com/file/d/1YxnDvTh6oychFNDx_BvhklLCHzU3oSL4/", duration:"2520", lists:"380"},
    {title:"#/n° 388", url:"https://drive.google.com/file/d/1ARJ3Cf6zNt78-0VVMFqHn4skzkHbn86U/", duration:"1810", lists:"388"},
    {title:"#/n° 389", url:"https://drive.google.com/file/d/11zGOUwyKF9GDp2I9l619lNgBccX39ZYG/", duration:"1450", lists:"388"},
];

export interface Playlist {
    title:string;
    year : string;
    vids:string;
}

export const PlayLists : Playlist[]=[
    {title:"102", year:"2022", vids:"102, 103, 104"},
    {title:"107", year:"2022", vids:"107, 108"},
];