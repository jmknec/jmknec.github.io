import "./Banner.scss";

export default function Banner(props) {
  const { title, image, altText, text } = props;

  return (
    <div className="banner">
      <div className="banner__title-container banner__title-container--mobile">
        <h1 className="banner__page-title">{title}</h1>
      </div>
      <div className="banner__illustration-container">
        <img className="banner__illustration" src={image} alt={altText} />
      </div>
      <div className="banner__text-container">
        <div className="banner__title-container banner__title-container--desktop">
          <h1 className="banner__page-title">{title}</h1>
        </div>
        <p className="banner__paragraph">{text}</p>
      </div>
    </div>
  );
}
