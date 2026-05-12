import profileLight from "/profile.webp"
import profileDark from "/profile-dark.webp"
import type { Lang } from "./components/LangContext"

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

const profileData: Record<Lang, Profile> = {
  en: {
    name: "Andrian Muzakki Firmansyah",
    titles: ["Software Developer", "AI Engineer", "Technical Contributor"],
    photoLight: profileLight,
    photoDark: profileDark,
    summary:
      "Full-stack engineer and AI practitioner with over 10 years of experience building software across Indonesia and Taiwan. Specialized in Android (Kotlin), iOS, React, and AI/ML — from mobile apps and enterprise systems to IoT and smart platforms. Currently working as an independent contractor, maintaining internal tools and integrating AI pipelines for companies in Taiwan.",
  },
  "zh-TW": {
    name: "Andrian Muzakki Firmansyah",
    titles: ["軟體開發工程師", "AI 工程師", "技術貢獻者"],
    photoLight: profileLight,
    photoDark: profileDark,
    summary:
      "擁有超過 10 年經驗的全端工程師與 AI 實踐者，在印尼與台灣跨國開發軟體。專精於 Android（Kotlin）、iOS、React 及 AI/ML，涵蓋行動應用、企業系統、物聯網與智慧平台。目前為獨立承包商，維護內部工具並整合 AI 管線至台灣企業。",
  },
}

const experienceData: Record<Lang, Experience[]> = {
  en: [
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
      period: "Apr 2024 – May 2025",
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
  ],
  "zh-TW": [
    {
      title: "遠端軟體工程師",
      company: "Freelance",
      type: "獨立承包商",
      location: "台灣（遠端）",
      period: "2025 年 6 月 – 至今",
      descriptions: [
        "維護並優化台灣企業的現有內部工具與系統",
        "使用 React、NestJS、Kotlin、Jetpack Compose 及 SwiftUI 建構全端解決方案",
        "將 AI 能力整合至既有管線與工作流程中",
        "直接與企業利害關係人協作，從需求分析到部署上線",
      ],
      skills: ["React", "NestJS", "Kotlin", "Jetpack Compose", "SwiftUI", "AI 整合", "全端開發"],
    },
    {
      title: "技術長（CTO）",
      company: "PT INOVASI ARTIFISIAL CERDAS",
      type: "全職",
      location: "印尼西爪哇省萬隆市",
      period: "2024 年 4 月 – 2025 年 5 月",
      descriptions: [
        "領導跨多個專案的 AI 研究與開發計畫",
        "設計深度學習解決方案，涵蓋 OCR、物件偵測及影像分割",
        "監督端到端 AI 實作，從模型開發到生產部署",
        "建立並指導工程團隊在 AI/ML 最佳實踐與可擴展架構方面",
      ],
      skills: ["深度學習", "OCR", "物件偵測", "影像分割", "PyTorch"],
    },
    {
      title: "資深軟體開發工程師",
      company: "TWSBP",
      type: "全職",
      location: "台灣台南市",
      period: "2018 年 10 月 – 2024 年 4 月",
      descriptions: [
        "使用各種框架開發企業級網頁與行動應用程式",
        "建置與現有企業資料庫整合的後端系統",
        "設計並整合商業系統與 ERP 工作流程",
        "與跨職能的國際團隊在多個專案中協作",
      ],
      skills: ["Django", "React", "行動開發", "全端開發"],
    },
    {
      title: "軟體工程師",
      company: "Freelance",
      type: "接案",
      location: "台灣台南市",
      period: "2015 年 12 月 – 2018 年 9 月",
      descriptions: [
        "為各種客戶專案開發 Android 及網頁應用程式",
        "建置並整合 ERP 系統以實現業務流程自動化",
        "設計並實作物聯網智慧停車管理系統",
        "連接硬體感測器與後端服務，實現即時監控與控制",
      ],
      skills: ["Android", "網頁開發", "ERP", "物聯網", "全端開發"],
    },
    {
      title: "初級軟體工程師",
      company: "EZONE",
      type: "全職",
      location: "台灣麻豆",
      period: "2014 年 11 月 – 2015 年 12 月",
      descriptions: [
        "使用 Java 開發 Android 應用程式",
        "實作影像處理演算法與電腦視覺功能",
        "建構相機功能，包括濾鏡、裁切及車牌辨識（LPR）整合",
        "協助維護並優化現有行動應用程式",
      ],
      skills: ["Android", "Java", "影像處理", "車牌辨識"],
    },
    {
      title: "網頁開發工程師",
      company: "Freelance",
      type: "接案",
      location: "",
      period: "2010 年 3 月 – 2014 年 4 月",
      descriptions: [
        "使用 WordPress 開發網站並自訂佈景主題與外掛",
        "使用 phpBB 論壇系統建置並維護線上社群",
        "管理論壇審核、使用者管理及社群互動功能",
        "將第三方 API 與支付系統整合至網頁平台",
      ],
      skills: ["WordPress", "PHP", "phpBB", "SEO", "網頁開發"],
    },
  ],
}

const educationData: Record<Lang, Education[]> = {
  en: [
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
  ],
  "zh-TW": [
    {
      school: "台灣首府大學",
      degree: "多媒體與遊戲設計",
      period: "2014 年 7 月 – 2018 年 9 月",
    },
    {
      school: "SIIBT",
      degree: "華語商業",
      period: "2012 – 2014",
    },
    {
      school: "Surabaya Hotel School",
      degree: "餐旅管理",
      period: "2011 – 2012",
    },
    {
      school: "Stikom Surabaya",
      degree: "資訊系統",
      period: "2007 年 7 月 – 2011 年 12 月",
    },
  ],
}

const skillsData: Record<Lang, string[]> = {
  en: [
    "React",
    "Android",
    "iOS",
    "Machine Learning",
    "Deep Learning",
    "Full-Stack Development",
    "Kotlin",
    "TypeScript",
    "Swift",
    "DevOps",
    "Software Architecture",
  ],
  "zh-TW": [
    "React",
    "Android",
    "iOS",
    "機器學習",
    "深度學習",
    "全端開發",
    "Kotlin",
    "TypeScript",
    "Swift",
    "DevOps",
    "軟體架構",
  ],
}

export interface Interest {
  title: string
  description: string
}

const interestsData: Record<Lang, Interest[]> = {
  en: [
    {
      title: "Game Development",
      description:
        "Beyond software engineering, I have a strong interest in game development — exploring game mechanics, interactive storytelling, and the technical challenges of building immersive digital experiences. This passion drives my curiosity in graphics programming and game design.",
    },
    {
      title: "Traveling",
      description:
        "Living and working across Indonesia and Taiwan has sparked my love for travel. Exploring new cultures, cuisines, and landscapes broadens my perspective and inspires creativity in both life and work.",
    },
    {
      title: "Photography",
      description:
        "I enjoy capturing moments through photography — from street scenes and landscapes to cultural events. It's a creative outlet that complements my technical mindset, training my eye for detail and composition.",
    },
  ],
  "zh-TW": [
    {
      title: "遊戲開發",
      description:
        "除了軟體工程之外，我對遊戲開發有著濃厚的興趣 — 探索遊戲機制、互動敘事，以及建構沉浸式數位體驗的技術挑戰。這份熱情驅動著我對圖形程式設計與遊戲設計的好奇心。",
    },
    {
      title: "旅行",
      description:
        "在印尼與台灣的生活與工作經歷，點燃了我對旅行的熱愛。探索新文化、美食與風景，拓展了我的視野，也為生活與工作帶來創意靈感。",
    },
    {
      title: "攝影",
      description:
        "我喜歡透過攝影捕捉當下的瞬間 — 從街景、風景到文化活動。這是一個與技術思維互補的創作出口，訓練我對細節與構圖的敏銳度。",
    },
  ],
}

export function getProfile(lang: Lang) {
  return profileData[lang]
}

export function getExperience(lang: Lang) {
  return experienceData[lang]
}

export function getEducation(lang: Lang) {
  return educationData[lang]
}

export function getSkills(lang: Lang) {
  return skillsData[lang]
}

export function getInterests(lang: Lang) {
  return interestsData[lang]
}
