export type ProjectCategory = "mobile" | "web" | "backend";

export interface Project {
    id: string;
    title: string;
    description: string;
    category: ProjectCategory;
    tags: string[];
    demoUrl?: string;
    githubUrl?: string;
}

export const projects: Project[] = [
    {
        id: "Keep-It-Up",
        title: "Keep It Up",
        description: "Projeto desenvolvido em Kotlin.",
        category: "mobile",
        tags: ["Kotlin", "Android", "Mobile"],
        githubUrl: "https://github.com/SavioDec/Keep-It-Up",
    },
    {
        id: "mouse_follower_banguela_MacOs",
        title: "Toothless Mouse Follower (macOS)",
        description: "Toothless as a mouse follower pet para macOS.",
        category: "mobile",
        tags: ["Swift", "macOS", "Apple"],
        githubUrl: "https://github.com/SavioDec/mouse_follower_banguela_MacOs",
    },
    {
        id: "Ong-fucinhos-bigodes",
        title: "ONG Fucinhos e Bigodes",
        description: "Plataforma desenvolvida para a ONG Fucinhos e Bigodes para adoção de pets.",
        category: "web",
        tags: ["TypeScript", "Next.js", "Tailwind"],
        demoUrl: "https://fucinhos-e-bigodes.vercel.app",
        githubUrl: "https://github.com/SavioDec/Ong-fucinhos-bigodes",
    },
    {
        id: "APIRestTodoList",
        title: "API Rest Todo List",
        description: "Todo list construída com Java Spring Boot utilizando API Rest.",
        category: "backend",
        tags: ["Java", "Spring Boot", "API"],
        githubUrl: "https://github.com/SavioDec/APIRestTodoList",
    },
    {
        id: "Jogo-aprendendo-ingles",
        title: "Jogo Aprendendo Inglês",
        description: "Joguinho para aprender inglês feito em Angular e Node.js",
        category: "web",
        tags: ["Angular", "NodeJs", "JavaScript"],
        demoUrl: "https://jogo-aprendendo-ingles-savio.netlify.app/",
        githubUrl: "https://github.com/SavioDec/Jogo-Aprendendo-ingles",
    },
    {
        id: "landing-page-Form",
        title: "Landing Page Marketing",
        description: "Site de divulgação para empresa de marketing.",
        category: "web",
        tags: ["JavaScript", "HTML", "CSS"],
        demoUrl: "https://saviodecproj1.netlify.app/",
    },
    {
        id: "landing-page-Template",
        title: "Landing Page Template",
        description: "Template moderno de modelo de site.",
        category: "web",
        tags: ["JavaScript", "HTML", "CSS"],
        demoUrl: "https://projeto-html-saviodec.netlify.app/",
    },
    {
        id: "Calculadora-de-IMC",
        title: "Calculadora de IMC",
        description: "Página simples para cálculo de IMC.",
        category: "web",
        tags: ["JavaScript", "HTML", "CSS"],
        demoUrl: "https://projetocalculadoraimc.netlify.app/",
    },
];
