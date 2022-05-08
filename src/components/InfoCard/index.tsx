import classNames from "classnames";
import styles from "./index.module.scss";

type Props = {
  label: string;
  content: string;
  icon: string;
  variant?: "blue" | "orange" | "purple" | "green" | "yellow";
};

export function InfoCard(props: Props) {
  return (
    <div
      className={classNames(styles.infoCardContainer, {
        [styles.blueBackground]: props.variant === "blue",
        [styles.orangeBackgrund]: props.variant === "orange",
        [styles.purleBackground]: props.variant === "purple",
        [styles.greenBackground]: props.variant === "green",
        [styles.yellowbackground]: props.variant === "yellow",
      })}
    >
      <div className={styles.infoCardCenter}>
        <div>
          <span className={styles.label}>{props.label}</span>
        </div>
        <div className={styles.contentContainer}>
          <img alt={props.label} src={props.icon} />
          <span>{props.content}</span>
        </div>
      </div>
    </div>
  );
}
