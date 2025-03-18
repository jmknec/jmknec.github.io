import "./ProjectCard.scss";
import site from "../../assets/icons/website.svg";
import repo from "../../assets/icons/github.svg";

export default function ProjectCard(props) {
  const { name, category, about, tech, date, siteLink, repoLink } = props;

  return (
    <article className="project">
      <header className="project__header">
        <h3 className="project__name">{name}</h3>
        <div className="project__links">
          <a className="project__link" href={siteLink} target="_blank">
            <img className="icon" src={site} alt="Website icon" />
          </a>
          <a className="project__link" href={repoLink} target="_blank">
            <img className="icon" src={repo} alt="Github icon" />
          </a>
        </div>
      </header>
      <div className="project__details">
        <p className="project__description">{about}</p>
        <div className="project__properties">
          <div className="project__property">
            <h4 className="project__subheading">Category</h4>
            <p className="project__detail">{category}</p>
          </div>
          <div className="project__property">
            <h4 className="project__subheading">Tech Stack</h4>
            <p className="project__detail">{tech}</p>
          </div>
          <div className="project__property">
            <h4 className="project__subheading">Date</h4>
            <p className="project__detail">{date}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
