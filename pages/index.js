import Head from "next/head";
import { useCallback } from "react";
import rhino3dm from "rhino3dm";
import styles from "../styles/Home.module.css";

export default function Home() {
  const onClick = useCallback(() => {
    rhino3dm().then((Module) => {
      const sphere = new Module.Sphere([0, 0, 0], 16);
      console.log(`rhino3dm sphere:${sphere.radius}`);
    });
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Rhino Compute Test</title>
        <meta name="description" content="NextJs + Rhino3dm test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Rhino Compute Test</h1>
        <button onClick={onClick}> Load rhino3dm</button>
      </main>
    </div>
  );
}
