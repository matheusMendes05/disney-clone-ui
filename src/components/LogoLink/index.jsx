import './styles.css';
export const LogoLink = ({ url }) => {
  return (
    <div className="logo">
      <a href="#">
        <img src={url} alt="logo" />
      </a>
    </div>
  );
};
