import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, children }) {
  return (
    <li className="group relative flex flex-col items-start">
      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        {title}
      </h2>
      <div className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {children}
      </div>
    </li>
  )
}

export default function Uses() {
  const intro = (
    <div className="-mt-16 mb-16 text-zinc-600 dark:text-zinc-400 sm:-mt-20">
      <p className="text-xs">
        San Jose, CA &bull;{' '}
        <a
          href="mailto:name@email.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email Me"
          className="hover:cursor-pointer hover:underline"
        >
          gabe.hyun@gmail.com
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/gohyun14/"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow on GitHub"
          className="hover:cursor-pointer hover:underline"
        >
          github.com/gohyun14
        </a>{' '}
        &bull;{' '}
        <a
          href="https://linkedin.com/in/gabrielhyun/"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow on LinkedIn"
          className="hover:cursor-pointer hover:underline"
        >
          linkedin.com/in/gabrielhyun
        </a>
      </p>
      <p className="mt-3 text-lg">
        Seeking a challenging and immersive Frontend or Fullstack Software
        Engineering position.
      </p>
    </div>
  )

  return (
    <>
      <Head>
        <title>Resume - Gabriel Hyun</title>
        <meta
          name="description"
          content="My full resume: work experience, education, projects, etc."
        />
      </Head>
      <SimpleLayout title={`Gabriel "Gabe" Hyun`} intro="">
        {intro}
        <div className="space-y-20">
          <ToolsSection title="Education">
            <Tool title="California Polytechnic State University, San Luis Obispo">
              <p className="-mt-3 text-xs font-light sm:-mt-4">
                Sept 2017 - Dec 2022
              </p>
              <ul className="mt-1 ml-3 list-disc">
                <li>
                  <span className="font-semibold">
                    B.S + M.S. in Computer Science
                  </span>{' '}
                  - Masters GPA: 3.81, Undergrad GPA: 3.44
                </li>
                <li>
                  <span className="font-semibold">Coursework:</span> Natural
                  Language Processing - Artificial Intelligence - Distributed
                  Computing - Analysis of Algorithms - UI/UX Design and
                  Development - Object Oriented Programming - Data Structures
                </li>
              </ul>
            </Tool>
          </ToolsSection>
          <ToolsSection title="Work Experience">
            <Tool title="SWE Intern (Frontend) - Automation Anywhere">
              <p className="-mt-3 text-xs font-light sm:-mt-4">
                Jun - Sept 2020, Jun - Dec 2021, Jun 2022 - Dec 2022
              </p>
              <ul className="mt-1 ml-3 list-disc">
                <li>
                  Used React, Typescript, Redux, HTML/CSS, React Hooks to work
                  on the frontend of Automation Anywhere IQBot Product
                </li>
                <li>
                  Created and styled many new components such as modals, menus,
                  buttons, cards, and other platform-specific components
                </li>
                <li>
                  Created and styled complex modal-based and form-based
                  components
                </li>
                <li>
                  Furthered my strong understanding of managing React
                  application state using: Redux, Custom React Hooks, Default
                  React Hooks
                </li>
                <li>
                  Created Redux actions to make API calls and reducers to update
                  the application state
                </li>
                <li>
                  Developed a strong understanding of Typescript/Javascript and
                  ES6 syntax/functionality
                </li>
                <li>
                  Developed a strong understanding of React Hooks to manage
                  state when creating/updating components and displaying backend
                  data
                </li>
                <li>
                  Developed a strong understanding of React testing using React
                  Testing Library, React Test Utils, and Jest to write tests for
                  components, hooks, and Redux actions/reducers by simulating
                  Redux store to test different application states
                </li>
                <li>
                  Used SCSS to apply styling and structure to custom components
                  and to make specific, class-level changes to prebuilt
                  components
                </li>
              </ul>
            </Tool>
            <Tool title="SWE Research Assistant - Cal Poly Thermal Comfort">
              <p className="-mt-3 text-xs font-light sm:-mt-4">
                Jan 2020 - Jan 2021
              </p>
              <ul className="mt-1 ml-3 list-disc">
                <li>
                  Used React, Javascript, HTML/CSS, Firebase, AWS to create a
                  web app for the Cal Poly Thermal Comfort research project
                </li>
                <li>
                  Set up and configured Firebase backend, multiple AWS
                  applications such as S3 for hosting, Cloudfront for website
                  domain and HTTPS
                </li>
                <li>
                  <span className="font-semibold">Application features:</span>{' '}
                  login, survey about campus room climate, profile
                  creation/updating, survey data visualization and analytics
                </li>
              </ul>
            </Tool>
          </ToolsSection>
          <ToolsSection title="Personal Projects/Learning">
            <Tool title="Portfolio App">
              <p className="-mt-3 text-xs font-light sm:-mt-4">
                Jan 2023 - Present
              </p>
              <ul className="mt-1 ml-3 list-disc">
                <li>
                  <span className="font-semibold underline decoration-wavy">
                    ***CURRENTLY A WORK IN PROGRESS***
                  </span>
                </li>
                <li>
                  <span className="font-semibold">Main Tech Used: </span>
                  Typescript, React/NextJS, TailwindCSS, React Query, Prisma,
                  tRPC, NextAuth
                </li>
                <li>
                  Fullstack web app, hosted on Vercel <br />
                  <span className="underline">Frontend:</span> Typescript,
                  React/NextJS, TailwindCSS, Jotai (global state) <br />
                  <span className="underline">Backend:</span> NextAuth, tRPC API
                  endpoints using NextJS API routes, React Query (data
                  fetching), PlanetScaleDB MySQL database, Prisma ORM
                </li>
                <li>
                  This is a project based on Lens Protocol, a decentralized
                  social graph. My idea was to recreate the Twitter List feature
                  for Lens users.
                </li>
                <li>
                  <span className="font-semibold">Application features:</span>{' '}
                  login with wallet or as test user, create a list of users to
                  follow, view a list&apos;s page, manage your lists/your
                  followed lists, search lists created by other users, follow
                  lists created by other users.
                </li>
                <li>
                  <span className="font-semibold">Links: </span>
                  <a
                    href="https://portfolio-app-beta-six.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow on GitHub"
                    className="hover:cursor-pointer hover:underline"
                  >
                    portfolio-app-beta-six.vercel.app
                  </a>
                  {'  -  '}
                  <a
                    href="https://github.com/gohyun14/portfolio-app/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow on GitHub"
                    className="hover:cursor-pointer hover:underline"
                  >
                    github.com/gohyun14/portfolio-app
                  </a>
                </li>
              </ul>
            </Tool>
            <Tool title="LensLists">
              <p className="-mt-3 text-xs font-light sm:-mt-4">
                Dec 2022 - Present
              </p>
              <ul className="mt-1 ml-3 list-disc">
                <li>
                  <span className="font-semibold">Main Tech Used: </span>
                  Typescript, React/NextJS, TailwindCSS, React Query, GraphQL,
                  Prisma, tRPC
                </li>
                <li>
                  Fullstack web app, hosted on Vercel <br />
                  <span className="underline">Frontend:</span> Typescript,
                  React/NextJS, TailwindCSS, Jotai (global state) <br />
                  <span className="underline">Backend:</span> Lens GraphQL
                  Endpoints (social media data), Apollo (GraphQL queries), tRPC
                  API endpoints using NextJS API routes, React Query (data
                  fetching), PlanetScaleDB MySQL database, Prisma ORM
                  <br /> <span className="underline">
                    Wallet Management:
                  </span>{' '}
                  Wagmi, Rainbowkit
                </li>
                <li>
                  This is a project based on Lens Protocol, a decentralized
                  social graph. My idea was to recreate the Twitter List feature
                  for Lens users.
                </li>
                <li>
                  <span className="font-semibold">Application features:</span>{' '}
                  login with wallet or as test user, create a list of users to
                  follow, view a list&apos;s page, manage your lists/your
                  followed lists, search lists created by other users, follow
                  lists created by other users.
                </li>
                <li>
                  <span className="font-semibold">Links: </span>
                  <a
                    href="https://www.lenslists.xyz/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow on GitHub"
                    className="hover:cursor-pointer hover:underline"
                  >
                    lenslists.xyz
                  </a>
                  {'  -  '}
                  <a
                    href="https://github.com/gohyun14/lenslists"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow on GitHub"
                    className="hover:cursor-pointer hover:underline"
                  >
                    github.com/gohyun14/lenslists
                  </a>
                </li>
              </ul>
            </Tool>
            <Tool title="Web3 App">
              <p className="-mt-3 text-xs font-light sm:-mt-4">
                Sept 2022 - Present
              </p>
              <ul className="mt-1 ml-3 list-disc">
                <li>
                  <span className="font-semibold">Main Tech Used: </span>
                  Typescript, React/NextJS, TailwindCSS, Solidity, React Query,
                  Wagmi/ethers.js, Alchemy
                </li>
                <li>
                  Fullstack web app, hosted on Vercel <br />
                  <span className="underline">Frontend:</span> Typescript,
                  React/NextJS, TailwindCSS, Jotai (global state) <br />
                  <span className="underline">Backend:</span> Alchemy SDK API
                  (blockchain/NFT data), React Query (data fetching)
                  <br />{' '}
                  <span className="underline">
                    Wallet Management & Blockchain Interaction:
                  </span>{' '}
                  Wagmi, ethers.js
                </li>
                <li>
                  <span className="font-semibold">Application features:</span>{' '}
                  search an Ethereum wallet address to see all the NFTs it holds
                  and click to see data about each NFT, connect wallet,
                  mint/stake custom NFTs for token rewards (written in
                  Solidity), send token to other addresses, swap tokens (Uniswap
                  API)
                </li>
                <li>
                  <span className="font-semibold">Links: </span>
                  <a
                    href="https://dnft-interface.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow on GitHub"
                    className="hover:cursor-pointer hover:underline"
                  >
                    dnft-interface.vercel.app
                  </a>
                  {'  -  '}
                  <a
                    href="https://github.com/gohyun14/dnft-interface/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow on GitHub"
                    className="hover:cursor-pointer hover:underline"
                  >
                    github.com/gohyun14/dnft-interface
                  </a>
                </li>
              </ul>
            </Tool>
            <Tool title="Great Quotes">
              <p className="-mt-3 text-xs font-light sm:-mt-4">
                Jul 2022 – Aug 2022
              </p>
              <ul className="mt-1 ml-3 list-disc">
                <li>
                  <span className="font-semibold">Main Tech Used: </span>
                  Typescript, React/NextJS, TailwindCSS, Prisma, tRPC
                </li>
                <li>
                  Fullstack web app, hosted on Vercel <br />
                  <span className="underline">Frontend:</span> Typescript,
                  React/NextJS, TailwindCSS, Jotai (global state) <br />
                  <span className="underline">Backend:</span> tRPC API Endpoints
                  using NextJS API Routes, React Query (data fetching),
                  PlanetScaleDB MySQL database, Prisma ORM
                </li>
                <li>
                  <span className="font-semibold">Application features:</span>{' '}
                  searview all quotes, sort quotes, add quote, see more details
                  about quotes, delete quotes, add comments to quotes
                </li>
                <li>
                  <span className="font-semibold">Links: </span>
                  <a
                    href="https://quotes-site.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow on GitHub"
                    className="hover:cursor-pointer hover:underline"
                  >
                    quotes-site.vercel.app
                  </a>
                  {'  -  '}
                  <a
                    href="https://github.com/gohyun14/Quotes-Site/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow on GitHub"
                    className="hover:cursor-pointer hover:underline"
                  >
                    github.com/gohyun14/Quotes-Site
                  </a>
                </li>
              </ul>
            </Tool>
            <Tool title="Encode Club Solidity Bootcamp (May 2022 Cohort)">
              <p className="-mt-3 text-xs font-light sm:-mt-4">
                May 2022 – Jul 2022
              </p>
              <ul className="mt-1 ml-3 list-disc">
                <li>
                  Developed strong understanding of the EVM, wallets, and
                  transactions
                </li>
                <li>
                  Learned in depth Solidity syntax and proficiency, smart
                  contract theory/development/security/testing/deployment
                </li>
                <li>
                  <span className="font-semibold">Full curriculum: </span>
                  <a
                    href="https://encodeclub.notion.site/Solidity-Bootcamp-Curriculum-65b0b3812dea4e89acf2363e2a216dc0"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow on GitHub"
                    className="hover:cursor-pointer hover:underline"
                  >
                    encodeclub.notion.site/Solidity-Bootcamp-Curriculum-65b0b3812dea4e89acf2363e2a216dc0
                  </a>
                </li>
              </ul>
            </Tool>
          </ToolsSection>
          <ToolsSection title="Skills/Technologies">
            <Tool title="Frontend">
              <ul className="ml-3 list-disc">
                <li>Typescript/Javascript (ES6)</li>
                <li>React</li>
                <li>NextJS</li>
                <li>Redux, Jotai, Zustand</li>
                <li>CSS, Tailwind, SCSS</li>
                <li>HTML</li>
                <li>React Query</li>
                <li>React Test Utils</li>
                <li>Jest</li>
              </ul>
            </Tool>
            <Tool title="Blockchain">
              <ul className="ml-3 list-disc">
                <li>ethers.js</li>
                <li>Wagmi</li>
                <li>Rainbowkit</li>
              </ul>
            </Tool>
            <Tool title="Backend">
              <ul className="ml-3 list-disc">
                <li>NextJS</li>
                <li>tRPC</li>
                <li>SQL, MySQL</li>
                <li>Prisma</li>
                <li>Planetscale</li>
                <li>Python</li>
              </ul>
            </Tool>
            <Tool title="Misc">
              <ul className="ml-3 list-disc">
                <li>Git, GitHub, BitBucket</li>
                <li>Vercel</li>
                <li>Figma</li>
              </ul>
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
