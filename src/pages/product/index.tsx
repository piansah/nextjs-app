// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import styles from "./product.module.css";

export default function ProductPage() {
  // const [isLogin] = useState(false);
  // const { push } = useRouter();

  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // }, [isLogin, push]);

  return (
    <div className={styles.product}>
      <h1>Product Page</h1>
    </div>
  );
}
