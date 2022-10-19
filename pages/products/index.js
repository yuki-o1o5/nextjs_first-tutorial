import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function ProductsList() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>products list</h2>
        <ul>
          <li>
            <Link href="/products/smartphone">
              <a>smart Phone</a>
            </Link>
          </li>
          <li>
            <Link href="/products/pc">
              <a>personal computer</a>
            </Link>
          </li>
          <li>
            <Link href="/products/headphone">
              <a>headphone</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
