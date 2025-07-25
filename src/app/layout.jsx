/* eslint-env node */
import { Footer, Layout, Navbar, Link } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'


import { } from 'nextra'
export const metadata = {
  description: 'SUI Sentinel is the ultimate battle arena to test the security of autonomous AI agents. Deploy your AI, fortify it with master prompts, and challenge the world to break its defenses',
  metadataBase: new URL('https://docs.suisentinel.xyz/'),
  keywords: [
    'AI AGENTS',
    "SUI",
    "Zero Knowledge",
    "WEB3",
    "BLOCKCHAIN",
    "PRIVACY"
  ],
  title: {
    default: 'Sui Sentinel | ultimate battle arena',
    template: '%s - Sui Sentinel'
  },
  applicationName: 'Sui Sentinel',
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: './',
    siteName: 'Sui Sentinel',
    locale: 'en_US',
    type: 'website'
  },
  generator: 'Next.js',
  appleWebApp: {
    title: 'Sui Sentinel'
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://x.com/suisentinel'
  }
}


const banner = (
  <Banner dismissible={false}>
    🎉 Sui Sentinel is live on Testnet.
    <Link href="https://app.suisentinel.xyz/" className="text-current!">
      Try Now
    </Link>
    .
  </Banner>
)

const navbar = (
  <Navbar
    logo={
      <span>
        <img
          src="/img/logo.png"
          alt="Sui Sentinel Logo"
          width="32"
          style={{ marginRight: '8px' }}
        />
      </span>
    }
    chatIcon={
        <span>
        <img
          src="/img/icons/telegram.png"
          alt="Sui Sentinel Logo"
          width="24"
          style={{ marginRight: '8px' }}
        />
      </span>
    }
    chatLink="https://t.me/suisentinel"
  />
)

const footer = (
  <Footer className="flex-col items-center md:items-start">
    <a
      className="x:focus-visible:nextra-focus flex items-center gap-1"
      target="_blank"
      rel="noreferrer"
      title="aztec network"
      href="https://aztec.network/"
    >
      All Rights Reserved
    </a>
    <p className="mt-6 text-xs">
      © {new Date().getFullYear()} Cyphronix Software.
    </p>
  </Footer>
)

export default async function RootLayout({ children }) {

  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/shuding/nextra/blob/main/examples/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
