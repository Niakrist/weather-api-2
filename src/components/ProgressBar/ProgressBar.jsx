import styles from './ProgressBar.module.css';

const ProgressBar = ({ current, type }) => {
  const position = Math.round(current);
  return (
    <div className={styles['progress-bar-wrapper']}>
      <input
        type="range"
        className={styles['progress-bar']}
        min="1"
        max="100"
        value={current}
        readOnly
        style={{
          mask: `radial-gradient(
            circle at calc(${position}%),
            transparent clamp(0.313rem, 0.78vw, 0.375rem),
            black clamp(0.313rem, 0.78vw, 0.375rem),
            black clamp(0.313rem, 0.78vw, 0.375rem)
          )`,
          background: type
            ? 'radial-gradient(50% 2344966.00% at 50% 50%, rgba(84, 84, 84, 0.4) 0%, rgba(138, 138, 138, 0.4) 45.12%, rgb(218, 218, 218) 100%, rgba(218, 218, 218, 0.4) 100%)'
            : '',
        }}
      />
      <div
        className={styles['ellipse']}
        style={{
          left: `calc(${position}% - clamp(0.188rem, -0.125rem + 0.78vw, 0.25rem))`,
        }}
      ></div>
    </div>
  )
}

export default ProgressBar;