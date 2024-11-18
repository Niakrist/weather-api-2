const Icon = ({ name, className, ...props }) => {
  const imgSrc = require(`../../assets/icon/${name}.svg`);
  return <img className={className} src={imgSrc} alt={name} {...props} />;
};

export default Icon;
