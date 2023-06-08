import Link from "next/link";
import styles from "./Button.module.css";
const Button = ({ text, url }: any) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;
