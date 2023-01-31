import './styles.css';

export const RowContent = ({ children }) => {
  return (
    <section className="container-r">
      <div>{children}</div>
    </section>
  );
};
