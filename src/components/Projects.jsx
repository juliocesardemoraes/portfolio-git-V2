import { useEffect, useRef, useState } from "react";
import "./styles/projects.css";
import ReactLoading from "react-loading";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [actualProject, setActualProject] = useState(0);
  const [loading, setLoading] = useState(false);
  const useEffectRan = useRef(false);

  async function fetchProjects() {
    setLoading(true);
    try {
      const repo = "juliocesardemoraes";
      const response = await fetch(
        `https://api.github.com/users/${repo}/repos?page=1&per_page=100`
      );
      const data = await response.json();
      let reposWithWebsite = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i]?.homepage) reposWithWebsite.push(data[i]);
      }
      setProjects(reposWithWebsite);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (useEffectRan.current == false) {
      fetchProjects();
      useEffectRan.current = true;
    }
    setLoading(false);
  }, []);

  // Não posso colocar um projeto acima do indice 12
  // Não posso colocar um número negativo

  const changeProject = (projectIndex) => {
    if (actualProject === 0 && projectIndex === -1) return;

    if (actualProject === projects.length - 1 && projectIndex === 1) return;

    setActualProject((prev) => {
      return prev + projectIndex;
    });
  };

  return (
    <>
      {loading === true ? (
        <ReactLoading className="w__100" />
      ) : (
        <div className="project__container">
          <main className="flex__container project__content">
            <iframe src={projects[actualProject]?.homepage}></iframe>
            <div className="desc">
              <p>{projects[actualProject]?.description}</p>
            </div>
          </main>
          <footer className="flex__container">
            <div>
              <h1>{projects[actualProject]?.name}</h1>
            </div>
            <div className="gap desc">
              <img
                className="arrow filter__white"
                src="/arrow-left.svg"
                onClick={() => changeProject(-1)}
              ></img>
              <img
                className="arrow filter__white"
                src="/arrow-right.svg"
                onClick={() => changeProject(1)}
              ></img>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
