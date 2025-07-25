import Link from "next/link";
import styles from "./login.module.css";
import { useRouter } from "next/router";

export default function LoginViews() {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/product");
  };
  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold underline">Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <p style = {{color: "blue", border: "1px solid blue", borderRadius: "10px", padding: "10px"}}>
        Belum register sama sekali bro?{" "}
        <Link href="/auth/register">Register</Link>
      </p>
    </div>
  );
}
