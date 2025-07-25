import Link from "next/link";
import styles from "./register.module.css";

export default function RegisterViews() {
  return (
    <div className={styles.register}>
      <h1>Register Page</h1>
      <p>
        Sudah register bro? coba {" "}
        <Link href="/auth/login">Login</Link>
      </p>
    </div>
  );
}
