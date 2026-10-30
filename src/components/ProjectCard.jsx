import "./Projects.css";

function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="tech">{tech}</p>
      <a href={link} target="_blank" rel="noreferrer">
        Voir sur GitHub
      </a>
    </div>
  );
}

export default ProjectCard;