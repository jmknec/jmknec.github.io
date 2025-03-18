import "./AboutPage.scss";
import about from "../../assets/images/about-jenna.svg";
import nurse from "../../assets/images/nurse-jenna.svg";
import barbie from "../../assets/images/soft-eng-barbie.svg";
import hobbies from "../../assets/images/jenna-hobbies.svg";
import Banner from "../../components/Banner/Banner";

export default function AboutPage() {
  return (
    <main className="main">
      <Banner
        title="Who, Me?"
        image={about}
        altText="Illustration of woman pointing at herself"
        text={`You really want to hear more about little ol' me? Well, alright then. Grab your tea (or beverage of choice) and get comfy.`}
      />
      <section className="about">
        <div className="about__content">
          <div className="about__text-container">
            <h2 className="about__heading">{`(Former) Nurse Jenna`}</h2>
            <p className="about__text">{`I've worn a lot of hats (and scrubs) in healthcare, but most of my 13-year nursing career was split between a bustling emergency department in Southern Ontario and outpost nursing stations in remote parts of Canada. Think flying-in-on-a-tiny-float-plane level remote. The variety, complexity, and sometimes-chaotic energy of emergency nursing kept things interesting—until it didn't.`}</p>
            <p className="about__text">{`When people ask me why I left nursing, I usually say I was craving better work-life balance. And that's true, but it's also a softer way of admitting I was deeply burnt out. Initially, I wasn't even sure I'd touch HealthTech with a ten-foot pole. But stepping away from the bedside for a while let me heal, reflect, and reconnect with my passion for healthcare from a completely different angle. Now, I’m excited to leverage technology to make meaningful, scalable improvements in healthcare—not just for patients, but for the incredible professionals caring for them, too.`}</p>
          </div>
          <div className="about__illustration-container">
            <img
              className="about__illustration"
              src={nurse}
              alt="Illustration of a nurse"
            />
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about__content about__content--middle">
          <div className="about__text-container">
            <h2 className="about__heading">Soft-Eng Barbie</h2>
            <p className="about__text">{`My transition into tech started with a software engineering bootcamp. After two weeks of online prep, my first day on campus brought a surprise: I was the only woman in my cohort. Naturally, inspired by the recent Mean Girls revival, I committed to wearing pink every Wednesday and privately dubbed myself "Soft-Eng Barbie." Sure, it was partly a joke—but it was also a way to own being different and to inject a bit of fun into a daunting new world.`}</p>
            <p className="about__text">{`Since then, the nickname stuck (at least to my brain), and honestly, so did the reality check. Even though my class was small, it was an eye-opening glimpse into tech's gender dynamics. Now I'm determined not just to build great software, but also to help build an inclusive tech community where being the only woman in the room is far less common.`}</p>
          </div>
          <div className="about__illustration-container">
            <img
              className="about__illustration"
              src={barbie}
              alt="Illustration of woman working on laptop."
            />
          </div>
        </div>
      </section>
      <section className="about about--bottom">
        <div className="about__content">
          <div className="about__text-container">
            <h2 className="about__heading">Just...Regular Jenna</h2>
            <p className="about__text">{`Outside of work, I'm usually exploring new cities, vibing at concerts, or spending quality time with my favourite people (including both two- and four-legged nieces and nephews). I'm equally happy introverting at home—usually teaching myself a new hobby or skill, whether it's crafting, baking, or taking another shot at learning to play the ukulele.`}</p>
            <p className="about__text">{`I have a strong "I could totally do that" gene—as long as "that" isn't even remotely athletic. Seriously, if coordination is involved, I'm out. But give me a DIY project or an obscure craft tutorial on YouTube, and suddenly I'm unstoppable.`}</p>
          </div>
          <div className="about__illustration-container">
            <img
              className="about__illustration"
              src={hobbies}
              alt="Illustration of woman and various hobbies."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
