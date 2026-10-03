import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'
import type { Image } from '@/types'

const builder = imageUrlBuilder(client)

export function urlFor(source: Image) {
  return builder.image(source)
}
