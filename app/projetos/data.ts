// app/projetos/data.ts

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    netlifyUrl: string;
}

export const projects: Project[] = [
    {
        id: "Jogo-aprendendo-ingles",
        title: "Jogo Aprendendo ingles",
        description: "Joguinho para aprender ingles feito em Angular e nodeJs",
        tags: ["Angular", "NodeJs", "Javascript"],
        netlifyUrl: "https://jogo-aprendendo-ingles-savio.netlify.app/", // Coloque a URL real aqui
    },
    {
        id: "landing-page-Form",
        title: "Landing Page marketing.",
        description: "Site de divulgação para empresa de marketing.",
        tags: ["JavaScript", "HTML", "CSS"],
        netlifyUrl: "https://saviodecproj1.netlify.app/",
    },
    {
        id: "landing-page-Template",
        title: "Landing Page de Template.",
        description: "Template de modelo de site.",
        tags: ["JavaScript", "HTML", "CSS"],
        netlifyUrl: "https://projeto-html-saviodec.netlify.app/",
    },
    {
        id: "Calculadora-de-IMC",
        title: "Calculadora de IMC",
        description: "Pagina simples para calculo de IMC.",
        tags: ["JavaScript", "HTML", "CSS"],
        netlifyUrl: "https://projetocalculadoraimc.netlify.app/",
    },
];