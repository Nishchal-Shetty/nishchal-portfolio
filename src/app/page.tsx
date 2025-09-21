'use client'
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  FolderTree,
  FileCode2,
  TerminalSquare,
  Settings,
  MapPin,
  ExternalLink,
  Quote,
} from 'lucide-react'

// ====== QUICK SETTINGS ======
const NAME = 'Nishchal Shetty'
const TAGLINE = 'Backend & Cloud Engineer — building reliable, scalable systems'
const LOCATION = 'Boulder, CO'
const EMAIL = 'Nishchal.Shetty@colorado.edu'
const PHONE = '+1 (720) 472-4420'
const LINKEDIN = 'https://www.linkedin.com/in/nishchalshetty/'
const GITHUB = 'https://github.com/Nishchal-Shetty' // add your handle
const RESUME_URL = '/resume.pdf' // file in public/
const HERO_URL = '/myimage.png' // put your image in public/myimage.png

// ====== DATA (from resume) ======
const skills = {
  languages: ['Python', 'C++', 'SQL', 'JavaScript', 'HTML', 'CSS'],
  frameworks: ['FastAPI', 'React', 'Node.js', 'GraphQL'],
  tools: [
    'Git',
    'Docker',
    'Kubernetes',
    'AWS (EC2, RDS, S3, ECS, EKS, ELB)',
    'RabbitMQ',
    'Kafka',
    'Elasticsearch',
    'Hadoop',
    'Hive',
    'Helm',
    'Grafana',
    'GitHub Actions',
  ],
  databases: ['Postgres', 'MySQL', 'MongoDB', 'Redis'],
  coursework: [
    'Data Mining',
    'Advanced Algorithms',
    'Computer Networks',
    'Operating Systems',
    'Compiler Design',
    'Data Structures',
    'DBMS',
    'AI',
    'Big Data Analytics',
    'Datacenter Scale Computing',
    'Cybersecurity',
  ],
}

const experience = [
  {
    company: 'Hewlett Packard Enterprise (HPE)',
    role: 'Cloud Developer',
    period: 'Sep 2021 – Jun 2024',
    bullets: [
      'Enhanced HPE GreenLake Compute Ops Management (firmware compliance, OS install, downgrade) using Python, REST APIs, PostgreSQL.',
      'Deployed and operated microservices on AWS EC2 across regions with ALBs + auto-scaling for HA and cost efficiency.',
      'Built a log-parsing service for encoded HPE server logs → cut debugging time by ~25% for customers/support.',
      'Hardened reliability with comprehensive unit/component tests → cut integration issues ~30%.',
      'Created Humio dashboards to increase operational visibility (~20% efficiency uplift).',
      'Automated data flows from HPE InfoSight; early anomaly detection improved by ~25%.',
    ],
  },
  {
    company: 'Hewlett Packard Enterprise (HPE)',
    role: 'Software Engineering Intern',
    period: 'Jan 2021 – Jun 2021',
    bullets: [
      'Automated provisioning with Ansible to standardize VM setups.',
      'Streamlined deployment to ESXi / Hyper-V for iLO Amplifier Pack at-scale.',
      'Authored technical docs enabling repeatable, self-serve deployments.',
    ],
  },
]

const projects = [
  {
    name: 'Wildfire Risk Prediction System',
    summary:
      'ML system using NASA FIRMS + OpenMeteo; feature engineering + XGBoost for risk scoring.',
    impact:
      'Post-optimization accuracy 80.33%; identified drivers (soil temp, RH, wind) → +0.72% F1.',
    links: [] as { label: string; href: string }[],
    stack: ['Python', 'XGBoost', 'Pandas', 'Feature Pipelines'],
  },
  {
    name: 'E-Auction Platform (GE Healthcare)',
    summary:
      'Resale platform built with React + Node on AWS ECS; Redis cache ~ faster high-traffic reads.',
    impact:
      'Improved response times and UX under load; S3 for secured image storage.',
    links: [],
    stack: ['React', 'Node.js', 'AWS ECS', 'Redis', 'S3'],
  },
]

// ====== UI ======
function ActivityBar({ onSection }: { onSection: (id: string) => void }) {
  const Item = ({ icon: Icon, id }: { icon: LucideIcon; id: string }) => (
    <button
      onClick={() => onSection(id)}
      className="p-3 hover:bg-zinc-800/60 text-zinc-400 hover:text-zinc-100 transition"
      aria-label={id}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
  return (
    <aside className="hidden md:flex flex-col items-center bg-zinc-900 border-r border-zinc-800">
      <Item icon={FolderTree} id="about" />
      <Item icon={FileCode2} id="experience" />
      <Item icon={TerminalSquare} id="projects" />
      <Item icon={Settings} id="skills" />
    </aside>
  );
}

function Explorer({ onSection }: { onSection: (id: string) => void }) {
  const LinkBtn = ({ id, label }: { id: string; label: string }) => (
    <button
      onClick={() => onSection(id)}
      className="w-full text-left px-3 py-2 rounded hover:bg-zinc-800/60 text-sm text-zinc-300"
    >
      {label}
    </button>
  )
  return (
    <aside className="w-64 bg-zinc-950/60 backdrop-blur border-r border-zinc-800 hidden md:block">
      <div className="px-3 py-3 text-xs uppercase tracking-wide text-zinc-500">
        Explorer
      </div>
      <div className="px-2 pb-3">
        <div className="text-zinc-400 px-2 py-1 text-xs">portfolio</div>
        <div className="space-y-1">
          <LinkBtn id="about" label="README.md" />
          <LinkBtn id="experience" label="experience.ts" />
          <LinkBtn id="projects" label="projects.tsx" />
          <LinkBtn id="skills" label="skills.json" />
          <LinkBtn id="education" label="education.md" />
          <LinkBtn id="contact" label="contact.ts" />
        </div>
      </div>
    </aside>
  )
}

function TopBar() {
  return (
    <header className="flex items-center justify-between bg-zinc-900/80 backdrop-blur border-b border-zinc-800 px-4 py-2">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-red-500" />
        <div className="h-2 w-2 rounded-full bg-yellow-400" />
        <div className="h-2 w-2 rounded-full bg-emerald-500" />
        <div className="text-xs text-zinc-400 ml-3">portfolio — README.md</div>
      </div>
      <div className="text-xs text-zinc-400">VS Code • Dark+</div>
    </header>
  )
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300">
      {children}
    </span>
  );
}

export default function PortfolioVSCode() {
  const [_, setActive] = useState('about')
  const scrollTo = (id: string) => {
    setActive(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 font-sans">
      <div className="flex">
        <ActivityBar onSection={scrollTo} />
        <div className="flex-1 flex min-h-screen">
          <Explorer onSection={scrollTo} />
          <div className="flex-1 flex flex-col">
            <TopBar />

            <main className="max-w-5xl mx-auto w-full px-4 md:px-8 py-8 space-y-20">
              {/* ABOUT / README with background image */}
              <section id="about" className="scroll-mt-24">
                <div className="relative rounded-2xl overflow-hidden min-h-[360px]">
                  <Image
                    src={HERO_URL}            // e.g., '/myimage.png'
                    alt="Hero background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                  {/* softer overlay so the image is clearly visible */}
                  <div className="absolute inset-0 bg-black/15 dark:bg-black/35" />

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative p-6 md:p-10"
                  >
                    <div className="max-w-3xl">
                      <h1 className="text-3xl md:text-5xl font-extrabold text-white">
                        {NAME}
                      </h1>

                      <p className="mt-2 text-lg font-semibold text-white/95">
                        {TAGLINE}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/90">
                        <MapPin className="h-4 w-4" /> {LOCATION}
                        <span className="opacity-60">•</span>
                        <Mail className="h-4 w-4" />
                        <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                        <span className="opacity-60">•</span>
                        <Phone className="h-4 w-4" /> {PHONE}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <a
                          href={LINKEDIN}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-white/30 px-3 py-2 font-semibold text-white hover:bg-white/10"
                        >
                          <Linkedin className="h-4 w-4" /> LinkedIn
                          <ExternalLink className="h-3 w-3 opacity-70" />
                        </a>
                        <a
                          href={GITHUB}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-white/30 px-3 py-2 font-semibold text-white hover:bg-white/10"
                        >
                          <Github className="h-4 w-4" /> GitHub
                          <ExternalLink className="h-3 w-3 opacity-70" />
                        </a>
                        <a
                          href={RESUME_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-white/30 px-3 py-2 font-semibold text-white hover:bg-white/10"
                        >
                          <Download className="h-4 w-4" /> Resume
                        </a>
                      </div>

                      <p className="mt-7 max-w-3xl text-white/90 font-medium">
                        I enjoy designing and scaling microservices, building data-driven
                        pipelines, and tightening feedback loops with good observability.
                        Previously at HPE, I shipped features on GreenLake Compute Ops
                        Management and automated deployments across AWS.
                      </p>

                      <figure className="mt-6 border-l-2 border-white/30 pl-4 text-white/80 text-sm italic">
                        <Quote className="inline h-4 w-4 mr-2 -mt-1" />
                        Sometimes the best way to solve a problem is to help others.
                      </figure>
                    </div>
                  </motion.div>

                </div>
              </section>

              {/* EXPERIENCE */}
              <section id="experience" className="scroll-mt-24">
                <h2 className="text-xl font-semibold tracking-tight mb-4">Experience</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {experience.map((job) => (
                    <div
                      key={`${job.company}-${job.role}-${job.period}`}
                      className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 hover:bg-zinc-900/70 transition"
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-medium">
                          {job.role} · {job.company}
                        </div>
                        <div className="text-xs text-zinc-400">{job.period}</div>
                      </div>
                      <ul className="mt-3 space-y-2 text-sm text-zinc-300 list-disc pl-5">
                        {job.bullets.map((b, i) => (
                          <li key={`${job.company}-${i}`}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* PROJECTS */}
              <section id="projects" className="scroll-mt-24">
                <h2 className="text-xl font-semibold tracking-tight mb-4">Selected Projects</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {projects.map((p) => (
                    <div
                      key={p.name}
                      className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 hover:bg-zinc-900/70 transition"
                    >
                      <div className="font-medium">{p.name}</div>
                      <p className="mt-2 text-sm text-zinc-300">{p.summary}</p>
                      <p className="mt-2 text-xs text-zinc-400">{p.impact}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <Chip key={`${p.name}-${s}`}>{s}</Chip>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SKILLS */}
              <section id="skills" className="scroll-mt-24">
                <h2 className="text-xl font-semibold tracking-tight mb-4">Skills</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
                    <div className="text-sm text-zinc-400 mb-2">Languages</div>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((x) => (
                        <Chip key={`lang-${x}`}>{x}</Chip>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
                    <div className="text-sm text-zinc-400 mb-2">Frameworks</div>
                    <div className="flex flex-wrap gap-2">
                      {skills.frameworks.map((x) => (
                        <Chip key={`fw-${x}`}>{x}</Chip>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
                    <div className="text-sm text-zinc-400 mb-2">Tools</div>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((x) => (
                        <Chip key={`tool-${x}`}>{x}</Chip>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
                    <div className="text-sm text-zinc-400 mb-2">Databases</div>
                    <div className="flex flex-wrap gap-2">
                      {skills.databases.map((x) => (
                        <Chip key={`db-${x}`}>{x}</Chip>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
                  <div className="text-sm text-zinc-400 mb-2">Relevant Coursework</div>
                  <div className="flex flex-wrap gap-2">
                    {skills.coursework.map((x) => (
                      <Chip key={`course-${x}`}>{x}</Chip>
                    ))}
                  </div>
                </div>
              </section>

              {/* EDUCATION */}
              <section id="education" className="scroll-mt-24">
                <h2 className="text-xl font-semibold tracking-tight mb-4">Education</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      school: 'University of Colorado Boulder',
                      degree: 'M.S. in Computer Science (GPA 3.85/4.0)',
                      period: 'Aug 2024 – May 2026',
                    },
                    {
                      school: 'RV College of Engineering, India',
                      degree:
                        'B.E. in Computer Science and Engineering (GPA 8.97/10)',
                      period: 'Aug 2017 – Aug 2021',
                    },
                  ].map((ed) => (
                    <div
                      key={`${ed.school}-${ed.period}`}
                      className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4"
                    >
                      <div className="font-medium">{ed.school}</div>
                      <div className="text-sm text-zinc-300 mt-1">{ed.degree}</div>
                      <div className="text-xs text-zinc-400">{ed.period}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CONTACT */}
              <section id="contact" className="scroll-mt-24">
                <h2 className="text-xl font-semibold tracking-tight mb-4">Contact</h2>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <a
                      className="inline-flex items-center gap-2 underline"
                      href={`mailto:${EMAIL}`}
                    >
                      <Mail className="h-4 w-4" /> {EMAIL}
                    </a>
                    <span>•</span>
                    <span className="inline-flex items-center gap-2">
                      <Phone className="h-4 w-4" /> {PHONE}
                    </span>
                    <span>•</span>
                    <a
                      className="inline-flex items-center gap-2 underline"
                      href={LINKEDIN}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                  </div>
                </div>
                <footer className="text-xs text-zinc-500 text-center mt-10">
                  © {new Date().getFullYear()} {NAME}. Built with React & Tailwind.
                </footer>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
