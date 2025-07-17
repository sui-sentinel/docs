import React from 'react'

const config = {
  logo: (
    <span>
      <img
        src="/img/logo.png"
        alt="Sui Sentinel Logo"
        height="32"
        style={{ marginRight: '8px' }}
      />
    </span>
  ),
  project: {
    link: 'https://github.com/sui-sentinel/docs',
  },
  docsRepositoryBase: 'https://github.com/sui-sentinel/docs/tree/master',
  footer: {
    text: `© ${new Date().getFullYear()} Sui Sentinel. All rights reserved.`,
  },
  head: (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta
        name="description"
        content="Sui Sentinel documentation"
      />
      <meta
        name="og:title"
        content="Sui Sentinel: Privacy-focused NFT Marketplace"
      />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Sui Sentinel Docs',
    }
  },
  // banner: {
  //   key: 'sui-testnet',
  //   text: '⚠️ Sui Sentinel is currently running on sui Testnet. Use with caution.',
  // },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  primaryHue: 275.59,
  navigation: {
    prev: true,
    next: true,
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
}

export default config
