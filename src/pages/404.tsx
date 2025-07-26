import styles from "@/styles/404.module.scss";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className={styles.error}>
      <Image src="/notfound.svg" alt="404" width={500} height={300} />
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}
