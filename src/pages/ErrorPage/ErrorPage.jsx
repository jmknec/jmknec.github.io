import "./ErrorPage.scss";
import error from "../../assets/images/not-found.svg";
import Banner from "../../components/Banner/Banner";

export default function ErrorPage() {
  return (
    <>
      <main className="main">
        <Banner
          title="Uh-oh...Looks like something went sideways!"
          image={error}
          altText="Illustration of woman shrugging"
          text={`Don't panic. Just click the link at the top to head back home—it's safe there, I promise.`}
        />
      </main>
    </>
  );
}
