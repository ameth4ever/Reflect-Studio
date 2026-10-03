export interface SiteSettings {
  title: string
  description: string
  logo: Image
  favicon: Image
  socialLinks: SocialLink[]
  seo: SEO
}

export interface SocialLink {
  platform: string
  url: string
}

export interface SEO {
  title: string
  description: string
  keywords: string[]
}

export interface Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface Homepage {
  heroTitle: string
  heroSubtitle: string
  heroImage: Image
  heroVideo?: string
  cta: CTA
  services: Service[]
  projects: Project[]
}

export interface CTA {
  label: string
  link: string
}

export interface About {
  title: string
  content: any[]
  mission: string
  vision: string
  values: Value[]
  timeline: TimelineEvent[]
}

export interface Value {
  title: string
  description: string
  icon: string
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
}

export interface Service {
  _id: string
  title: string
  slug: Slug
  excerpt: string
  description: any[]
  icon: string
  coverImage: Image
  gallery: Image[]
  benefits: string[]
  process: ProcessStep[]
  seo: SEO
}

export interface Slug {
  current: string
  _type: 'slug'
}

export interface ProcessStep {
  title: string
  description: string
}

export interface Project {
  _id: string
  title: string
  slug: Slug
  client: string
  category: Category
  description: any[]
  cover: Image
  gallery: Image[]
  video?: string
  results: string[]
  testimonial?: Testimonial
  seo: SEO
  publishedAt: string
}

export interface Category {
  _id: string
  title: string
  slug: Slug
}

export interface BlogPost {
  _id: string
  title: string
  slug: Slug
  excerpt: string
  content: any[]
  featuredImage: Image
  category: Category
  author: Author
  seo: SEO
  publishedAt: string
}

export interface Author {
  _id: string
  name: string
  photo: Image
  bio: string
  socialLinks: SocialLink[]
}

export interface TeamMember {
  _id: string
  name: string
  position: string
  photo: Image
  bio: any[]
  socialLinks: SocialLink[]
}

export interface Testimonial {
  _id: string
  clientName: string
  company: string
  photo: Image
  rating: number
  review: string
}

export interface FAQItem {
  _id: string
  question: string
  answer: string
}

export interface Partner {
  _id: string
  name: string
  logo: Image
  website: string
}

export interface Contact {
  email: string
  phone: string
  address: string
  mapsUrl: string
}

export interface Career {
  _id: string
  title: string
  slug: Slug
  department: string
  location: string
  type: string
  description: any[]
  requirements: string[]
  publishedAt: string
}
