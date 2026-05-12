export interface Profile {
  name: string
  titles: string[]
  photoLight: string
  photoDark: string
  summary: string
}

export interface Experience {
  title: string
  company: string
  type: string
  location: string
  period: string
  descriptions: string[]
  skills: string[]
}

export interface Education {
  school: string
  degree: string
  period: string
}

export const profile: Profile = {
  name: "Andrian Muzakki Firmansyah",
  titles: ["Software Developer", "AI Engineer", "Technical Contributor"],
  photoLight: "/profile.webp",
  photoDark: "/profile-dark.webp",
  summary:
    "Full-stack engineer and AI practitioner with over 10 years of experience building software across Indonesia and Taiwan. Specialized in Android (Kotlin), iOS, React, and AI/ML — from mobile apps and enterprise systems to IoT and smart logistics platforms. Currently working as an independent contractor, maintaining internal tools and integrating AI pipelines for logistics companies in Taiwan.",
}

export const experience: Experience[] = [
  {
    title: "Remote Software Engineer",
    company: "Freelance",
    type: "Independent Contractor",
    location: "Taiwan (Remote)",
    period: "Jun 2025 – Present",
    descriptions: [
      "Maintaining and enhancing existing internal tools and systems for companies in Taiwan",
      "Building full-stack solutions using React, NestJS, Kotlin, Jetpack Compose, and SwiftUI",
      "Integrating AI capabilities into existing pipelines and workflows",
      "Collaborating directly with company stakeholders from requirements to deployment",
    ],
    skills: ["React", "NestJS", "Kotlin", "Jetpack Compose", "SwiftUI", "AI Integration", "Full-Stack Development"],
  },
  {
    title: "CTO",
    company: "PT INOVASI ARTIFISIAL CERDAS",
    type: "Full-time",
    location: "Bandung, West Java, Indonesia",
    period: "Apr 2024 – Mei 2025",
    descriptions: [
      "Leading AI research and development initiatives across multiple projects",
      "Architecting Deep Learning solutions for OCR, Object Detection, and Image Segmentation",
      "Overseeing end-to-end AI implementation from model development to production deployment",
      "Building and mentoring the engineering team on AI/ML best practices and scalable architecture",
    ],
    skills: ["Deep Learning", "OCR", "Object Detection", "Image Segmentation", "PyTorch"],
  },
  {
    title: "Senior Software Developer",
    company: "TWSBP",
    type: "Full-time",
    location: "Tainan City, Taiwan",
    period: "Oct 2018 – Apr 2024",
    descriptions: [
      "Developed enterprise web and mobile applications using various frameworks",
      "Built backend systems integrated with existing company databases",
      "Designed and integrated business systems and ERP workflows",
      "Collaborated with cross-functional international teams across multiple projects",
    ],
    skills: ["Django", "React", "Mobile Development", "Full-Stack Development"],
  },
  {
    title: "Software Engineer",
    company: "Freelance",
    type: "Freelance",
    location: "Tainan City, Taiwan",
    period: "Dec 2015 – Sep 2018",
    descriptions: [
      "Developed Android and web applications for diverse client projects",
      "Built and integrated ERP systems for business process automation",
      "Designed and implemented IoT-based smart parking management systems",
      "Connected hardware sensors with backend services for real-time monitoring and control",
    ],
    skills: ["Android", "Web Development", "ERP", "IoT", "Full-Stack Development"],
  },
  {
    title: "Junior Software Engineer",
    company: "EZONE",
    type: "Full-time",
    location: "Madou, Taiwan",
    period: "Nov 2014 – Dec 2015",
    descriptions: [
      "Developed Android applications using Java",
      "Implemented image processing algorithms and computer vision features",
      "Built camera-based features including filters, cropping, and LPR (License Plate Recognition) integration",
      "Assisted in maintaining and optimizing existing mobile applications",
    ],
    skills: ["Android", "Java", "Image Processing", "LPR"],
  },
  {
    title: "Web Developer",
    company: "Freelance",
    type: "Freelance",
    location: "",
    period: "Mar 2010 – Apr 2014",
    descriptions: [
      "Developed websites using WordPress and customized themes and plugins",
      "Built and maintained online communities with phpBB forum systems",
      "Managed forum moderation, user management, and community engagement features",
      "Integrated third-party APIs and payment systems into web platforms",
    ],
    skills: ["WordPress", "PHP", "phpBB", "SEO", "Web Development"],
  },
]

export const education: Education[] = [
  {
    school: "Taiwan Shoufu University",
    degree: "Multimedia And Game Design",
    period: "Jul 2014 – Sep 2018",
  },
  {
    school: "SIIBT",
    degree: "Mandarin Business",
    period: "2012 – 2014",
  },
  {
    school: "Surabaya Hotel School",
    degree: "Hospitality",
    period: "2011 – 2012",
  },
  {
    school: "Stikom Surabaya",
    degree: "Information System",
    period: "Jul 2007 – Dec 2011",
  },
]

export const skills: string[] = [
  "React",
  "Android",
  "iOS",
  "Machine Learning",
  "Deep Learning",
  "Full-Stack Development",
  "Kotlin",
  "TypeScript",
  "Swift",
  "DevOp",
  "Software Architecture",
]
