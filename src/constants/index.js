import {
  cloud,
  sre,
  engineer,
  shell,
  azure,
  python,
  kubernetes,
  ansible,
  terraform,
  docker,
  telekom,
  accenture,
  jenkins,
  devops,
  argo,
  actions,
  elastic,
  prometheus,
  grafana,
  flux,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "DevOps Engineer",
    icon: devops,
    description:
      "I build CI/CD pipelines with Jenkins, GitHub Actions, and Argo CD, automating builds, tests, and deployments end to end.",
  },
  {
    title: "Platform Engineer",
    icon: engineer,
    description:
      "I create internal platforms and golden paths so teams provision and deploy through self-service instead of tickets.",
  },
  {
    title: "Cloud Engineer",
    icon: cloud,
    description:
      "I design scalable, serverless infrastructure on Azure, defined as code with Terraform and Ansible and deployed through pipelines.",
  },
  {
    title: "Site Reliability Engineer",
    icon: sre,
    description:
      "I run monitoring with Prometheus, Grafana, and Elasticsearch — fault detection, alerting, and recovery that keep services up.",
  },
];

const technologies = [
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Shell",
    icon: shell,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Ansible",
    icon: ansible,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Argo CD",
    icon: argo,
  },
  {
    name: "Flux CD",
    icon: flux,
  },
  {
    name: "GitHub Actions",
    icon: actions,
  },
  {
    name: "Elasticsearch",
    icon: elastic,
  },
  {
    name: "Prometheus",
    icon: prometheus,
  },
  {
    name: "Grafana",
    icon: grafana,
  },
];

const experiences = [
  {
    title: "System Administrator",
    company_name: "Deutsche Telekom",
    icon: telekom,
    iconBg: "#383E56",
    date: "Jul 2020 - Mar 2021",
    points: [
      "Administered the internal IT-Shop and its day-to-day operations.",
      "Provisioned and managed user accounts and workstations.",
      "Monitored systems and services to catch issues before they became outages.",
      "Troubleshot outages and drove them through to resolution.",
    ],
  },
  {
    title: "Application Development Associate",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Dec 2022",
    points: [
      "Deployed and maintained Azure cloud infrastructure under the guidance of senior engineers.",
      "Built and extended CI/CD pipeline stages with Jenkins and GitHub Actions.",
      "Containerized services with Docker and supported their Kubernetes deployments.",
      "Automated routine operations tasks with Python and Bash scripts.",
    ],
  },
  {
    title: "Custom Software Engineering Analyst",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#383E56",
    date: "Dec 2022 - Nov 2023",
    points: [
      "Owned CI/CD pipelines end to end, integrating source control, security scanning, and compliance checks.",
      "Defined infrastructure as code with Terraform and Ansible for repeatable environment deployments.",
      "Provisioned scalable and serverless cloud infrastructure on Azure.",
      "Set up monitoring and alerting with Prometheus, Grafana, and Elasticsearch.",
    ],
  },
  {
    title: "Custom Software Engineering Senior Analyst",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Design and operate the platform infrastructure teams build on — scalable, serverless, and defined entirely as code.",
      "Drive GitOps adoption with Argo CD and Flux CD, making Git the single source of truth for deployments.",
      "Run monitoring systems with fault detection, alerting, and automated recovery.",
      "Cover the full DevOps lifecycle, from packaging and deployment through to operations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "István stands out as a cloud SME/DevOps Engineer, showcasing exceptional technical acumen and a commitment to resolving complex challenges, making him an invaluable asset to any project.",
    name: "Gurpreet Singh Kambo",
    designation: "Senior Manager",
    company: "Bank of Montreal",
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'><rect width='80' height='80' fill='%23915eff'/><text x='40' y='52' text-anchor='middle' font-family='Arial, sans-serif' font-size='30' font-weight='bold' fill='white'>GK</text></svg>",
  },
  {
    testimonial:
      "I highly recommend István for his exceptional problem-solving, rapid learning abilities, and commendable communication skills, making him an invaluable team asset.",
    name: "Harshdeep Ratnani",
    designation: "Application Development Manager",
    company: "Accenture",
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'><rect width='80' height='80' fill='%23151030'/><text x='40' y='52' text-anchor='middle' font-family='Arial, sans-serif' font-size='30' font-weight='bold' fill='%23915eff'>HR</text></svg>",
  },
];

const projects = [
  {
    name: "Kubernetes GitOps with Flux CD",
    description:
      "A GitOps repository managing Kubernetes cluster configuration declaratively with Flux CD. Every change is a commit; the cluster reconciles itself from Git — no kubectl apply, no drift.",
    tags: [
      {
        name: "kubernetes",
        color: "blue-text-gradient",
      },
      {
        name: "fluxcd",
        color: "green-text-gradient",
      },
      {
        name: "gitops",
        color: "pink-text-gradient",
      },
    ],
    image: "https://opengraph.githubassets.com/1/IstvanCsVarga/kcna-flux",
    source_code_link: "https://github.com/IstvanCsVarga/kcna-flux",
  },
  {
    name: "Uptime Monitor & Status Page",
    description:
      "Monitoring as code: an Upptime-powered uptime monitor and public status page for istvanv.dev, run entirely by GitHub Actions and GitHub Pages. No servers — the live status page in this site's footer runs on it.",
    tags: [
      {
        name: "upptime",
        color: "blue-text-gradient",
      },
      {
        name: "github-actions",
        color: "green-text-gradient",
      },
      {
        name: "monitoring",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://opengraph.githubassets.com/1/IstvanCsVarga/istvanv-dev-upttime",
    source_code_link: "https://github.com/IstvanCsVarga/istvanv-dev-upttime",
  },
  {
    name: "Terraform CI/CD Pipeline",
    description:
      "Terraform infrastructure as code provisioned through automated GitHub Actions pipelines: plan on pull request, apply on merge. A complete, auditable review-and-release workflow for infrastructure changes.",
    tags: [
      {
        name: "terraform",
        color: "blue-text-gradient",
      },
      {
        name: "iac",
        color: "green-text-gradient",
      },
      {
        name: "ci-cd",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://opengraph.githubassets.com/1/IstvanCsVarga/learn-terraform-github-actions",
    source_code_link:
      "https://github.com/IstvanCsVarga/learn-terraform-github-actions",
  },
];

export { services, technologies, experiences, testimonials, projects };
