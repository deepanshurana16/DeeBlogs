import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import  Post  from "@/components/Post";
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <div className={styles.post}>
      <Post/>
      </div>
    </main>
  );
}
