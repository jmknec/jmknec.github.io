import "./HomePage.scss";
import work from "../../assets/images/lkt-working.svg";
import projects from "../../data/project-data.json";
import Banner from "../../components/Banner/Banner";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function HomePage() {
  return (
    <>
      <main className="main">
        <Banner
          title="Welcome to LadyKnech Tech"
          image={work}
          altText="Illustration of a woman working at a standing desk."
          text={`Hey there—I'm Jenna, a registered nurse turned software developer. Yes, you read that right! Curious how a healthcare pro ends up coding? Check out my story on the About page. Or if you're here to see what I've been building lately, keep scrolling to see some of my recent work.`}
        />
        <section className="work">
          <div className="work__text">
            <h2 className="work__heading">
              Check out what I've been coding lately!
            </h2>
            <p className="work__intro">{`I’m just kicking off my journey as a software developer, so my personal portfolio is still a bit of a blank canvas—at least for now! With my brain buzzing with project ideas ranging from HealthTech apps to tools inspired by my endless hobbies, narrowing down what to build next feels like an impossible task. But stay tuned—I’ll be adding more here soon, I promise!`}</p>
            <p className="work__intro">{`In the meantime, if you’d like to collaborate, have a project idea you think I’d love, or just want to geek out over shared interests, let’s connect! (You can find the links below.)`}</p>
          </div>
          <div className="work__gallery">
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  category={project.category}
                  about={project.about}
                  tech={project.tech}
                  date={project.date}
                  repoLink={project.repo}
                  link={project.link}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
