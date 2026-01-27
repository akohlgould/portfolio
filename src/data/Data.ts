export interface Project {
    id: number;
    title: string;
    description: string;
    images: string[];
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
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
        title: "Siddur Translation Viewer",
        description: "A site that allows you to view the Hebrew text of the Siddur with alongside multiple different English translation.",
        images: [
            "public/Photos/Siddur/Between.png",
            "public/Photos/Siddur/Tefillin.png" // Mock interface screenshots
        ],
        tags: ["HTML"],
        demoUrl: "https://www.siddur.xyz"

    },
    {
        id: 2,
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
