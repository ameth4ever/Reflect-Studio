import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`

export const homepageQuery = groq`*[_type == "homepage"][0]{
  ...,
  services[]->,
  projects[]->{
    ...,
    category->
  }
}`

export const servicesQuery = groq`*[_type == "service"] | order(title asc)`

export const serviceQuery = groq`*[_type == "service" && slug.current == $slug][0]`

export const projectsQuery = groq`*[_type == "project"] | order(publishedAt desc) {
  ...,
  category->
}`

export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  ...,
  category->,
  testimonial->
}`

export const projectsByCategoryQuery = groq`*[_type == "project" && category->slug.current == $categorySlug] | order(publishedAt desc) {
  ...,
  category->
}`

export const blogPostsQuery = groq`*[_type == "blog"] | order(publishedAt desc) {
  ...,
  category->,
  author->
}`

export const blogPostQuery = groq`*[_type == "blog" && slug.current == $slug][0]{
  ...,
  category->,
  author->
}`

export const blogPostsByCategoryQuery = groq`*[_type == "blog" && category->slug.current == $categorySlug] | order(publishedAt desc) {
  ...,
  category->,
  author->
}`

export const categoriesQuery = groq`*[_type == "category"] | order(title asc)`

export const teamQuery = groq`*[_type == "author"] | order(name asc)`

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(clientName asc)`

export const faqQuery = groq`*[_type == "faq"] | order(_createdAt asc)`

export const partnersQuery = groq`*[_type == "partner"] | order(name asc)`

export const contactQuery = groq`*[_type == "contact"][0]`

export const careersQuery = groq`*[_type == "career"] | order(publishedAt desc)`

export const careerQuery = groq`*[_type == "career" && slug.current == $slug][0]`
