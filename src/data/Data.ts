export interface Project {
    id: number;
    title: string;
    description: string;
    images: string[]; // Array of image URLs
    tags: string[];
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
        description: "Inverse plaster cast of my chest. Includes a small about of hair. Sized as a coffee table.",
        images: [
            "public/Photos/Chest/0BA7C585-9527-4CED-9B80-CC3D3AFAA376_1_102_o.jpeg",
            "public/Photos/Chest/008669D5-6359-4426-BA62-1D2EFC14F297_4_5005_c.jpeg",
            "public/Photos/Chest/22359515-1D3E-4CC0-98F5-24D9DB9DB0AA_1_105_c.jpeg",
            "public/Photos/Chest/CFAD5F90-11D1-4436-91E0-0766F9165EE3_1_105_c.jpeg",
            "public/Photos/Chest/D8A2892A-7817-46DC-9E96-EE2B0FE63761_4_5005_c.jpeg",
            "public/Photos/Chest/E2D6E6F6-010E-44EF-8500-B89BF897F4C2_1_102_o.jpeg",
            "public/Photos/Chest/E13F9ECB-71E4-4E53-92DE-E5D1B3A346A8_1_102_o.jpeg",
        ],
        tags: ["Wood"],
    },
];

export const codeProjects: Project[] = [
    {
        id: 1,
        title: "Cat Generator 3000",
        description: "A very serious tool that generates infinite cats wearing hats. Uses the CATAAS API.",
        images: [
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800&auto=format&fit=crop" // Mock interface screenshots
        ],
        tags: ["React", "API", "Chaos"],
    },
    {
        id: 2,
        title: "Infinite Pizza Slicer",
        description: "A geometric game where you have to slice a pizza into perfectly equal primes.",
        images: [
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
        ],
        tags: ["Canvas", "Math", "Delicious"],
    },
    {
        id: 3,
        title: "Mood Ring for Terminal",
        description: "Changes your terminal background color based on your typing speed and error rate.",
        images: [
            "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&auto=format&fit=crop"
        ],
        tags: ["Bash", "Silly", "Utility"],
    },
];
