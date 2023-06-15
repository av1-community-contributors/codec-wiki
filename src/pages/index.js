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
        Welcome! This place is your future one-stop-shop for all media encoding documentations and beginners guides including x264, x265, Vapoursynth, and much more! </p>
        <p className="hero__subtitle">
          Currently this website is in a very very very heavy work in progress, some parts will be altered or even overhauled completely based on fellow encoders input, new research, and our knowledge.
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
