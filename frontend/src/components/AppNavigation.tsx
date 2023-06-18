import Link from "next/link";
import styles from "@/styles/Nav.module.css";

export default function AppNavigation({}) {
  return (
    <ul className={styles.linkArea}>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/collectibles"}>My Collection</Link>
      </li>
      <li>
        <Link href={"/holders"}>The Patronage Perks</Link>
      </li>
      <li>
        <Link href={"/experiences"}>Experiences</Link>
      </li>
    </ul>
  );
}
