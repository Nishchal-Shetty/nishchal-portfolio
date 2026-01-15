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
const GITHUB = 'https://github.com/Nishchal-Shetty'
const RESUME_URL = '/resume.pdf'  // file in public/
const HERO_URL = '/myimage.png'
const BACKGROUND_URL = '/background.jpg' // background in public/

// ====== TYPES ======
type Logo = {
  src: string
  alt: string
}

type ExperienceItem = {
  company: string
  role: string
  period: string
  bullets: string[]
  logo?: Logo
}

type ProjectItem = {
  name: string
  summary: string
  impact: string
  stack: string[]
  client?: string
  clientLogo?: Logo
}

type EducationItem = {
  school: string
  degree: string
  period: string
  logo?: Logo
}

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

const experience: ExperienceItem[] = [
  {
    company: 'Splunk (a Cisco Company)',
    role: 'Site Reliability Engineer Intern',
    period: 'Sep 2025 – DEC 2025',
    logo: {
      src: '/logos/splunk.jpeg',
      alt: 'Splunk logo',
    },
    bullets: [
      'Collaborate with the Infrastructure Foundations team to enhance the Instance Bootstrap Alerting pipeline, extending InstanceStatus tags and improving automated alert routing for Cloudworks, NOC, and TechOps teams.',
      'Contribute to reliability improvements across Splunk Enterprise Cloud provisioning pipelines spanning AWS, GCP, and Azure, strengthening hybrid-cloud observability and CI/CD workflows.',
      'Partner with senior engineers to document architectural dependencies, streamline incident resolution, and improve alert visibility through Puppet automation and tag-based telemetry.',
    ],
  },
  {
    company: 'Hewlett Packard Enterprise (HPE)',
    role: 'Cloud Developer',
    period: 'Sep 2021 – Jun 2024',
    logo: {
      src: '/logos/hpe.png',
      alt: 'Hewlett Packard Enterprise logo',
    },
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
    logo: {
      src: '/logos/hpe.png',
      alt: 'HPE logo',
    },
    bullets: [
      'Automated provisioning with Ansible to standardize VM setups.',
      'Streamlined deployment to ESXi / Hyper-V for iLO Amplifier Pack at-scale.',
      'Authored technical docs enabling repeatable, self-serve deployments.',
    ],
  },
]

const projects: ProjectItem[] = [
  {
    name: 'Wildfire Risk Prediction System',
    summary:
      'ML system using NASA FIRMS + OpenMeteo; feature engineering + XGBoost for risk scoring.',
    impact:
      'Post-optimization accuracy 80.33%; identified drivers (soil temp, RH, wind) → +0.72% F1.',
    stack: ['Python', 'XGBoost', 'Pandas', 'Feature Pipelines'],
  },
  {
    name: 'E-Auction Platform',
    summary:
      'Resale platform built with React + Node on AWS ECS; Redis cache ~ faster high-traffic reads.',
    impact:
      'Improved response times and UX under load; S3 for secured image storage.',
    stack: ['React', 'Node.js', 'AWS ECS', 'Redis', 'S3'],
    client: 'GE Healthcare',
    clientLogo: {
      src: '/logos/ge-healthcare.jpeg',
      alt: 'GE Healthcare logo',
    },
  },
]

const education: EducationItem[] = [
  {
    school: 'University of Colorado Boulder',
    degree: 'M.S. in Computer Science (GPA 3.85/4.0)',
    period: 'Aug 2024 – May 2026',
    logo: {
      src: '/logos/cu-boulder.png',
      alt: 'University of Colorado Boulder logo',
    },
  },
  {
    school: 'RV College of Engineering, India',
    degree: 'B.E. in Computer Science and Engineering (GPA 8.97/10)',
    period: 'Aug 2017 – Aug 2021',
    logo: {
      src: '/logos/rvce.jpg',
      alt: 'RV College of Engineering logo',
    },
  },
]

// ====== UI ======
function ActivityBar({ onSection }: { onSection: (id: string) => void }) {
  const Item = ({ icon: Icon, id }: { icon: LucideIcon; id: string }) => (
    <button
      onClick={() => onSection(id)}
      className="p-3 hover:bg-zinc-800/70 text-zinc-300 hover:text-zinc-50 transition"
      aria-label={id}
    >
      <Icon className="h-5 w-5" />
    </button>
  )
  return (
    <aside className="hidden md:flex flex-col items-center bg-zinc-900/85 border-r border-zinc-700/70">
      <Item icon={FolderTree} id="about" />
      <Item icon={FileCode2} id="experience" />
      <Item icon={TerminalSquare} id="projects" />
      <Item icon={Settings} id="skills" />
    </aside>
  )
}

function TopBar() {
  return (
    <header className="flex items-center justify-between bg-zinc-900/80 backdrop-blur border-b border-zinc-700/70 px-4 py-2">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-red-500" />
        <div className="h-2 w-2 rounded-full bg-yellow-400" />
        <div className="h-2 w-2 rounded-full bg-emerald-500" />
        <div className="text-xs text-zinc-300 ml-3">portfolio — README.md</div>
      </div>
      <div className="text-xs text-zinc-300">VS Code • Dark+</div>
    </header>
  )
}

// Top navigation bar
function TopNav({
  active,
  onSection,
}: {
  active: string
  onSection: (id: string) => void
}) {
  const items = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-30 bg-zinc-950/75 backdrop-blur border-b border-zinc-700/70">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap gap-2 py-2 text-xs md:text-sm">
          {items.map((item) => {
            const isActive = active === item.id
            return (
              <button
                key={item.id}
                onClick={() => onSection(item.id)}
                className={[
                  "inline-flex items-center rounded-full px-3 py-1 transition border",
                  isActive
                    ? "bg-zinc-100 text-zinc-900 border-zinc-100 shadow-sm"
                    : "text-zinc-100/80 border-zinc-500/0 hover:bg-zinc-800/60 hover:text-white"
                ].join(" ")}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-600 px-2 py-0.5 text-xs text-zinc-100/90 bg-zinc-900/60">
      {children}
    </span>
  );
}

function LogoBadge({ logo, label }: { logo?: Logo; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-600 bg-zinc-900/80 px-3 py-1.5">
      {logo && (
        <div className="relative h-7 w-7 overflow-hidden rounded-sm bg-zinc-800 flex-shrink-0">
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            className="object-contain p-1"
          />
        </div>
      )}
      <span className="text-sm text-zinc-50">{label}</span>
    </div>
  )
}

function CompanyPill({ logo, label }: { logo?: Logo; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 px-3 py-1.5">
      {logo && (
        <div className="relative h-6 w-6 overflow-hidden rounded-sm bg-white/20 flex-shrink-0">
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            className="object-contain"
          />
        </div>
      )}
      <span className="text-[0.8rem] text-white">{label}</span>
    </div>
  )
}

export default function PortfolioVSCode() {
  const [activeSection, setActiveSection] = useState('about')

  const scrollTo = (id: string) => {
    setActiveSection(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="relative min-h-screen text-zinc-50 font-sans">
      {/* Full-page background image */}
      <div className="fixed inset-0 -z-20">
        <Image
          src={BACKGROUND_URL}
          alt="Site background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Brighter colored gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/50 via-zinc-900/70 to-emerald-950/70" />
      </div>

      {/* Main content layer */}
      <div className="relative min-h-screen bg-transparent">
        <div className="flex">
          <ActivityBar onSection={scrollTo} />

          <div className="flex-1 flex flex-col min-h-screen">
            <TopBar />
            <TopNav active={activeSection} onSection={scrollTo} />

            <main className="max-w-5xl mx-auto w-full px-4 md:px-8 py-8 space-y-20">
              {/* ABOUT / README with background image */}
              <section id="about" className="scroll-mt-24">
                <div className="relative rounded-2xl overflow-hidden min-h-[360px] border border-zinc-600/70 bg-zinc-950/35 backdrop-blur">
                  <Image
                    src={HERO_URL}
                    alt="Hero background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25" />

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative p-6 md:p-10"
                  >
                    <div className="max-w-3xl">
                      <h1 className="text-3xl md:text-5xl font-extrabold text-white">
                        {NAME}
                      </h1>

                      <p className="mt-2 text-lg font-semibold text-white">
                        {TAGLINE}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/95">
                        <MapPin className="h-4 w-4" /> {LOCATION}
                        <span className="opacity-70">•</span>
                        <Mail className="h-4 w-4" />
                        <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                        <span className="opacity-70">•</span>
                        <Phone className="h-4 w-4" /> {PHONE}
                      </div>

                      {/* Current + Previously at logo strips */}
                      <div className="mt-4 space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-[0.7rem] uppercase tracking-[0.18em] text-white/75">
                            Current
                          </span>
                          <CompanyPill
                            label="Splunk — Site Reliability Engineer Intern"
                            logo={{
                              src: '/logos/splunk.jpeg',
                              alt: 'Splunk logo',
                            }}
                          />
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-[0.7rem] uppercase tracking-[0.18em] text-white/75">
                            Previously at
                          </span>
                          <CompanyPill
                            label="Hewlett Packard Enterprise"
                            logo={{
                              src: '/logos/hpe.png',
                              alt: 'Hewlett Packard Enterprise logo',
                            }}
                          />
                          <CompanyPill
                            label="GE Healthcare (project)"
                            logo={{
                              src: '/logos/ge-healthcare.jpeg',
                              alt: 'GE Healthcare logo',
                            }}
                          />
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <a
                          href={LINKEDIN}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-white/40 px-3 py-2 font-semibold text-white hover:bg-white/15"
                        >
                          <Linkedin className="h-4 w-4" /> LinkedIn
                          <ExternalLink className="h-3 w-3 opacity-80" />
                        </a>
                        <a
                          href={GITHUB}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-white/40 px-3 py-2 font-semibold text-white hover:bg-white/15"
                        >
                          <Github className="h-4 w-4" /> GitHub
                          <ExternalLink className="h-3 w-3 opacity-80" />
                        </a>
                        <a
                          href={RESUME_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-white/40 px-3 py-2 font-semibold text-white hover:bg-white/15"
                        >
                          <Download className="h-4 w-4" /> Resume
                        </a>
                      </div>

                      <p className="mt-7 max-w-3xl text-white/95 font-medium">
                        I&apos;m currently a Site Reliability Engineering intern at Splunk (a Cisco company),
                        working on cloud provisioning pipelines and alerting infrastructure across AWS, GCP, and Azure.
                        I enjoy designing and scaling microservices, building data-driven pipelines, and tightening
                        feedback loops with good observability. Previously at HPE, I shipped features on GreenLake
                        Compute Ops Management and automated deployments across AWS.
                      </p>

                      <figure className="mt-6 border-l-2 border-white/40 pl-4 text-white/90 text-sm italic">
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
                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                  {experience.map((job) => (
                    <div
                      key={`${job.company}-${job.role}-${job.period}`}
                      className="rounded-lg border border-zinc-600 bg-zinc-900/80 backdrop-blur-sm p-4 hover:bg-zinc-800/90 transition"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3 flex-1">
                          {job.logo && (
                            <div className="relative h-12 w-12 overflow-hidden rounded-md bg-zinc-800 flex-shrink-0">
                              <Image
                                src={job.logo.src}
                                alt={job.logo.alt}
                                fill
                                className="object-contain p-1.5"
                              />
                            </div>
                          )}
                          <div className="flex flex-col">
                            <span className="font-medium text-sm md:text-base text-zinc-50">
                              {job.role}
                            </span>
                            <span className="text-xs md:text-sm text-zinc-200">
                              {job.company}
                            </span>
                          </div>
                        </div>
                        <div className="text-xs text-zinc-300 flex-shrink-0 text-right whitespace-nowrap">
                          {job.period}
                        </div>
                      </div>
                      <ul className="mt-3 space-y-2 text-sm text-zinc-100/90 list-disc pl-5">
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
                      className="rounded-lg border border-zinc-600 bg-zinc-900/80 backdrop-blur-sm p-4 hover:bg-zinc-800/90 transition"
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="font-medium text-zinc-50">{p.name}</div>
                        {p.client && (
                          <LogoBadge logo={p.clientLogo} label={p.client} />
                        )}
                      </div>
                      <p className="text-sm text-zinc-100/90">{p.summary}</p>
                      <p className="mt-2 text-xs text-zinc-300">{p.impact}</p>
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
                  <div className="rounded-lg border border-zinc-600 bg-zinc-900/80 backdrop-blur-sm p-4">
                    <div className="text-sm text-zinc-200 mb-2">Languages</div>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((x) => (
                        <Chip key={`lang-${x}`}>{x}</Chip>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-zinc-600 bg-zinc-900/80 backdrop-blur-sm p-4">
                    <div className="text-sm text-zinc-200 mb-2">Frameworks</div>
                    <div className="flex flex-wrap gap-2">
                      {skills.frameworks.map((x) => (
                        <Chip key={`fw-${x}`}>{x}</Chip>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-zinc-600 bg-zinc-900/80 backdrop-blur-sm p-4">
                    <div className="text-sm text-zinc-200 mb-2">Tools</div>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((x) => (
                        <Chip key={`tool-${x}`}>{x}</Chip>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-zinc-600 bg-zinc-900/80 backdrop-blur-sm p-4">
                    <div className="text-sm text-zinc-200 mb-2">Databases</div>
                    <div className="flex flex-wrap gap-2">
                      {skills.databases.map((x) => (
                        <Chip key={`db-${x}`}>{x}</Chip>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-lg border border-zinc-600 bg-zinc-900/80 backdrop-blur-sm p-4">
                  <div className="text-sm text-zinc-200 mb-2">Relevant Coursework</div>
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
                  {education.map((ed) => (
                    <div
                      key={`${ed.school}-${ed.period}`}
                      className="rounded-lg border border-zinc-600 bg-zinc-900/80 backdrop-blur-sm p-4"
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3 min-w-0">
                          {ed.logo && (
                            <div className="relative h-12 w-12 overflow-hidden rounded-md bg-zinc-800 flex-shrink-0">
                              <Image
                                src={ed.logo.src}
                                alt={ed.logo.alt}
                                fill
                                className="object-contain p-1.5"
                              />
                            </div>
                          )}
                          <div className="font-medium truncate text-zinc-50">
                            {ed.school}
                          </div>
                        </div>
                        <div className="text-xs text-zinc-300 flex-shrink-0 text-right">
                          {ed.period}
                        </div>
                      </div>
                      <div className="text-sm text-zinc-100/90">{ed.degree}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CONTACT */}
              <section id="contact" className="scroll-mt-24">
                <h2 className="text-xl font-semibold tracking-tight mb-4">Contact</h2>
                <div className="rounded-lg border border-zinc-600 bg-zinc-900/80 backdrop-blur-sm p-4">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-50">
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
                <footer className="text-xs text-zinc-200 text-center mt-10">
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
