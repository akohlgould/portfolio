export interface Project {
    id: number;
    title: string;
    description: string;
    images: string[];
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
    extensionUrl?: string;
}

export interface Experience {
    id: number;
    title: string;
    organization: string;
    location: string;
    dateRange: string;
    bulletPoints: string[];
}

export interface Education {
    institution: string;
    degree: string;
    expectedDate: string;
    gpa: string;
}

export const sculptures: Project[] = [
    {
        id: 1,
        title: "Shovel",
        description: "Plaster cast of a shovel, coated in snow salt. Exploring the relationship between form and function.",
        images: [
            "/Photos/Shovel/SaltShovel.jpeg"
        ],
        tags: ["Salt", "Plaster", "Abstract"],
    },
    {
        id: 2,
        title: "Scroll",
        description: "A strung paper scroll, made out of a book on the history of science.",
        images: [
            "/Photos/Scroll/Scroll.jpeg",
            "/Photos/Scroll/Scroll2.jpeg",
            "/Photos/Scroll/Scroll3.jpeg",
            "/Photos/Scroll/Scroll4.jpeg",
            "/Photos/Scroll/Scroll5.jpeg",
            "/Photos/Scroll/Scroll6.jpeg",
            "/Photos/Scroll/Scroll7.jpeg"
        ],
        tags: ["Paper", "Wood"],
    },
    {
        id: 3,
        title: "Booth",
        description: "Wooden booth for conversation and connection.",
        images: [
            "/Photos/Booth/C9D97817-8FDD-4A43-9C24-753F462EE22F_1_105_c.jpeg",
        ],
        tags: ["Wood"],
    },
    {
        id: 4,
        title: "Chest",
        description: "Inverse plaster cast of chest. Includes a small about of hair. Sized as a coffee table.",
        images: [
            "public/Photos/Chest/0BA7C585-9527-4CED-9B80-CC3D3AFAA376_1_102_o.jpeg",
            "public/Photos/Chest/008669D5-6359-4426-BA62-1D2EFC14F297_4_5005_c.jpeg",
            "public/Photos/Chest/D8A2892A-7817-46DC-9E96-EE2B0FE63761_4_5005_c.jpeg",
            "public/Photos/Chest/E2D6E6F6-010E-44EF-8500-B89BF897F4C2_1_102_o.jpeg",
            "public/Photos/Chest/E13F9ECB-71E4-4E53-92DE-E5D1B3A346A8_1_102_o.jpeg",
        ],
        tags: ["Plaster", "Human Hair"],
    },
    {
        id: 5,
        title: "Cube",
        description: "Cubic book.",
        images: [
            "public/Photos/Cube/IMG_5258.jpg",
        ],
        tags: ["Book Arts"],
    },
];

export const codeProjects: Project[] = [
    {
        id: 1,
        title: "Lashon Learning",
        description: "A webpage and browser extension for memorizing Hebrew vocabulary, from Sefaria sources.",
        images: [
            "/public/Photos/LashonLearning/LashonLearning1.png"
        ],
        tags: ["React", "Vite", "TailwindCSS", "Sefaria REST API"],
        demoUrl: "https://akohlgould.github.io/LashonLearning/",
        githubUrl: "https://github.com/akohlgould/LashonLearning",
        extensionUrl: "https://chromewebstore.google.com/detail/lashonlearning-extension/mapphefolnefhibcikdlcdhojooagegh"
    },
    {
        id: 2,
        title: "Siddur Translation Viewer",
        description: "Hebrew prayer book viewer with side-by-side English translations.",
        images: [
            "public/Photos/Siddur/Between.png",
            "public/Photos/Siddur/Tefillin.png" // Mock interface screenshots
        ],
        tags: ["HTML"],
        demoUrl: "https://www.siddur.xyz"

    },
    {
        id: 3,
        title: "Darshan AI",
        description: "A Gemini powered AI tool for generating sourcesheets for Jewish education.",
        images: [
            "Photos/Darshan/Screenshot 2026-01-26 at 10.27.41 PM.png",
            "Photos/Darshan/Screenshot 2026-01-26 at 10.31.05 PM.png"
        ],
        tags: ["React", "AI", "Google Cloud"],
        demoUrl: "https://darshan.siddur.xyz"
    }
];

export const experienceData: Experience[] = [
    {
        id: 1,
        title: "Data Analyst Intern",
        organization: "Phamily",
        location: "Remote",
        dateRange: "Feb 2026–Present",
        bulletPoints: [
            "Clean and import data using Excel into the chronic care management platform.",
            "Generate analytical reports from incoming data, focusing on enrollment metrics to inform client insights and strategic planning.",
            "Develop and execute targeted outreach strategies within the platform, managing message deployment and follow-up sequences to drive service enrollment."
        ]
    },
    {
        id: 2,
        title: "Digital Operations Intern",
        organization: "Princeton Institute for Hasidic Thought",
        location: "Princeton, NJ",
        dateRange: "May 2025–Sep 2025",
        bulletPoints: [
            "Contributed to digital brand identity development by providing design and technical input on visual style, layout, and online presence.",
            "Coordinated logistics and provided on-site support for an intensive retreat serving the institute's translation fellowship."
        ]
    },
    {
        id: 3,
        title: "Political Assistant",
        organization: "Harris for President",
        location: "Manchester, NH",
        dateRange: "May 2024–Nov 2024",
        bulletPoints: [
            "Drafted memos and briefing statements for President Biden, Vice President Harris, senators, and dozens of key surrogates for NH travel.",
            "Planned and coordinated end-to-end campaign events, led on-site teams.",
            "Cultivated and maintained relationships with hundreds of elected officials and key party activists.",
            "Managed the volunteer-exempt mail program and ensured compliance with federal regulations.",
            "Worked closely with the data team to ensure accurate reporting of event outcomes."
        ]
    },
    {
        id: 4,
        title: "Special Projects Coordinator",
        organization: "Central Square Business Improvement District",
        location: "Cambridge, MA",
        dateRange: "Mar 2023–Aug 2023",
        bulletPoints: [
            "Managed and optimized office technology systems, troubleshooting software and hardware issues.",
            "Developed and strengthened relationships with local small businesses, serving as a liaison between business owners and the BID to support community engagement and economic growth."
        ]
    },
    {
        id: 5,
        title: "Software Operations Associate",
        organization: "March On",
        location: "Remote",
        dateRange: "Jun 2021–Sep 2021",
        bulletPoints: [
            "Evaluated and recommended SaaS software to improve operational efficiency and digital collaboration across the nonprofit.",
            "Managed data systems, ensuring accuracy and accessibility for staff needs."
        ]
    }
];

export const educationData: Education = {
    institution: "Brandeis University",
    degree: "B.S. Computer Science",
    expectedDate: "Expected May 2027",
    gpa: "3.6 GPA"
};
