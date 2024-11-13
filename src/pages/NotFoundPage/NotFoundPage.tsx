import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  const image = "/carbassot.webp";
  const imageAlt = "Carbassot image";
  const imageWidthSize = 320;

  return (
    <div className="page-not-found-container">
      <h2 className="page-not-found__title">🙅🏼‍♂️ Page not found! 🙅🏼‍♂️</h2>
      <img
        className="page-not-found__image"
        src={image}
        alt={imageAlt}
        width={imageWidthSize}
      />
    </div>
  );
};

export default NotFoundPage;
