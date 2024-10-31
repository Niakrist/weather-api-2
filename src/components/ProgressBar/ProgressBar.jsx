import styles from "./ProgressBar.module.css";
import { PRESSURE } from "../../constants/constants";

export default function ProgressBar({ title, current, type }) {
  const mask =
    window.innerWidth > 767
      ? {
          mask: `radial-gradient(circle at calc(0.936 * ${current}% + 3.6px), white 4px, transparent 4px, transparent 6px, rgba(218, 218, 218, 0.4) 6px)`,
        }
      : {
          mask: `radial-gradient(circle at calc(0.91 * ${current}% + 3.3px), white 3px, transparent 3px, transparent 4.5px, rgba(218, 218, 218, 0.4) 4.5px)`,
        };

  return (
    <input
      type="range"
      name={title}
      className={
        type === PRESSURE ? styles.barProgressPressure : styles.barProgress
      }
      min={0}
      max={100}
      step="any"
      value={current}
      style={mask}
      disabled
    />
  );
}
