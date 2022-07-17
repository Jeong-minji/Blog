import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "./layout.module.css";
import utilStyles from "../../styles/utils.module.css";

import profile_image from "../../public/images/profile.png";

const name = "DDangji";
export const siteTitle = "DDangji-log";

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Welcome to Ddangji FE blog!" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src={profile_image}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src={profile_image}
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
