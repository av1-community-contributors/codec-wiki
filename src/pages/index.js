import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/prequisites">
            Start learning!
          </Link>
        </div>
      </div>
      <div className="container centered-text">
        <p className="hero__subtitle">
        The Codec Wiki aims to be a complete source of multimedia documentation & & general codec knowledge. </p>
        <p className="hero__subtitle">
          Currently this website is under heavy development, so ensure you are cautious in trusting the absolute legitimacy of any material you read here for the time being.
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="${siteConfig.tagline}">
      <HomepageHeader />
    </Layout>
  );
}
