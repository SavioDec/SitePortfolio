// app/projetos/data.ts

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    demoUrl?: string;
    githubUrl?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        id: "Ong-fucinhos-bigodes",
        title: "ONG Fucinhos e Bigodes",
        description: "Plataforma desenvolvida para a ONG Fucinhos e Bigodes para adoção de pets.",
        tags: ["TypeScript", "Next.js", "Tailwind"],
        demoUrl: "https://fucinhos-e-bigodes.vercel.app",
        githubUrl: "https://github.com/SavioDec/Ong-fucinhos-bigodes",
    },
    {
        id: "Jogo-aprendendo-ingles",
        title: "Jogo Aprendendo Inglês",
        description: "Joguinho para aprender inglês feito em Angular e Node.js",
        tags: ["Angular", "NodeJs", "JavaScript"],
        demoUrl: "https://jogo-aprendendo-ingles-savio.netlify.app/",
        githubUrl: "https://github.com/SavioDec/Jogo-Aprendendo-ingles",
    },
    {
        id: "APIRestTodoList",
        title: "API Rest Todo List",
        description: "Todo list construída com Java Spring Boot utilizando API Rest.",
        tags: ["Java", "Spring Boot", "API"],
        githubUrl: "https://github.com/SavioDec/APIRestTodoList",
    },
    {
        id: "mouse_follower_banguela_MacOs",
        title: "Toothless Mouse Follower (macOS)",
        description: "Toothless as a mouse follower pet para macOS.",
        tags: ["Swift", "macOS"],
        githubUrl: "https://github.com/SavioDec/mouse_follower_banguela_MacOs",
    },
    {
        id: "landing-page-Form",
        title: "Landing Page Marketing",
        description: "Site de divulgação para empresa de marketing.",
        tags: ["JavaScript", "HTML", "CSS"],
        demoUrl: "https://saviodecproj1.netlify.app/",
    },
    {
        id: "landing-page-Template",
        title: "Landing Page Template",
        description: "Template moderno de modelo de site.",
        tags: ["JavaScript", "HTML", "CSS"],
        demoUrl: "https://projeto-html-saviodec.netlify.app/",
    },
    {
        id: "Calculadora-de-IMC",
        title: "Calculadora de IMC",
        description: "Página simples para cálculo de IMC.",
        tags: ["JavaScript", "HTML", "CSS"],
        demoUrl: "https://projetocalculadoraimc.netlify.app/",
    },
    {
        id: "Keep-It-Up",
        title: "Keep It Up",
        description: "Projeto desenvolvido em Kotlin.",
        tags: ["Kotlin", "Mobile"],
        githubUrl: "https://github.com/SavioDec/Keep-It-Up",
    },
];