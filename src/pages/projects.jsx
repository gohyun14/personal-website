import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  {
    name: 'Portfolio App',
    description: 'Track and visualize your stock/crypto portfolio performance.',
    link: {
      href: 'https://portfolio-app-beta-six.vercel.app/',
      label: 'portfolio-app-beta-six.vercel.app',
    },
    color: 'bg-green-500',
  },
  {
    name: 'LensLists',
    description:
      "Create a list of your favorite Lens accounts to follow, and view/follow others' lists.",
    link: { href: 'https://www.lenslists.xyz/', label: 'lenslists.xyz' },
    color: 'bg-indigo-500',
  },
  {
    name: 'Crypto App',
    description:
      "Search a wallet's NFTs, mint/stake custom NFTs for token rewards, send/swap multiple tokens.",
    link: {
      href: 'https://dnft-interface.vercel.app/',
      label: 'dnft-interface.vercel.app',
    },
    color: 'bg-sky-500',
  },
  {
    name: 'Great Quotes',
    description: "Post your favorite quotes, and comment on others' quotes.",
    link: {
      href: 'https://quotes-site.vercel.app/?sort=newest',
      label: 'quotes-site.vercel.app',
    },
    color: 'bg-amber-500',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ProjectCard({ name, description, link, color }) {
  return (
    <li className="group relative flex flex-col items-start">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <div className={`h-8 w-8 rounded-full ${color}`} unoptimized />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
        <Link href={link.href} target="_blank" rel="noreferrer">
          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span className="relative z-10">{name}</span>
        </Link>
      </h2>
      <div className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </div>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
        <LinkIcon className="h-6 w-6 flex-none" />
        <span className="ml-2">{link.label}</span>
      </p>
    </li>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Gabriel Hyun</title>
        <meta
          name="description"
          content="Projects I've created on my web dev journey."
        />
      </Head>
      <SimpleLayout
        title="Projects I've made on my web dev journey."
        intro="Right now I'm trying to be a web developer (either frontend or fullstack), so all of the projects I'm proud of are web applications. I'm constantly trying to learn, so I'm always starting new projects to incorporate new technologies I want to learn, or to improve my overall web dev skills! (All of the project github repos can be found on my Resume page)"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              link={project.link}
              description={project.description}
              color={project.color}
            />
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
