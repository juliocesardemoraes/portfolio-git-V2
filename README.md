# Portfolio dinamic git

### Turn this project into your OWN Portfolio:

This project is a dynamic GitHub portfolio rendered dynamically from the GitHub API. It provides an easy and efficient way to showcase your projects on GitHub by rendering your repositories dynamically on a portfolio website.
Deployment

The portfolio is deployed at https://portfolio-git-v2.vercel.app/.

## Installation

To install the necessary dependencies, run the following command:

```npm install```

## Deployment

https://portfolio-git-v2.vercel.app/

## Usage
Turn this project into your OWN Portfolio:

Change the file in App.jsx in line 15-16, with your name and introduction:

```
<p>
   Olá, meu nome é júlio moraes, sou um desenvolvedor fullstack.
   Trabalho com Reactjs e nodejs.
</p>
```

Change the variable named repo in components/Projects.jsx. To your github profile name.
E.g: juliocesardemoraes
```
const repo = "juliocesardemoraes";
```


## To run the project, execute the following command:

```npm run dev```

This will start a development server at http://127.0.0.1:5173/ where you can see the portfolio website.

## Release History

    v1.3
        Fix: Remove backend services from showing
    v1.2
        Fix: Double rerender on local
    v1.1
        Fix: React router problem
    v1.0
        Feat: Create portfolio

This repository is aimed to facilitate faster development.
