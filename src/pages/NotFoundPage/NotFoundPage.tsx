import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="page-not-found-container">
      <h2 className="page-not-found__title">🙅🏼‍♂️ Page not found! 🙅🏼‍♂️</h2>
      <img
        className="page-not-found__image"
        src="/images/carbassot.webp"
        alt={
          "Illustration of a page not found error with a pumpkin-shaped character"
        }
        width={300}
        height={301}
      />
    </div>
  );
};

export default NotFoundPage;
