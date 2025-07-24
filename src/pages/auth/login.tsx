import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/product");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <p>
        Belum register sama sekali bro? <br />
        <Link href="/auth/register">Register</Link>
      </p>
    </div>
  );
}
