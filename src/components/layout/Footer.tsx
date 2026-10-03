import Link from 'next/link'
import Image from 'next/image'
import { footerLinks, contactInfo } from '@/constants/navigation'
import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/REFLECT STUDIO.png"
                alt="REFLECT STUDIO"
                width={360}
                height={203}
                className="h-28 w-auto brightness-0 invert"
                priority
              />
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <a href={`mailto:${contactInfo.email}`} className="text-sm text-white hover:text-primary transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-400">Téléphone</p>
              <a href={`tel:${contactInfo.phone}`} className="text-sm text-white hover:text-primary transition-colors">
                {contactInfo.phone}
              </a>
              <a href={`tel:${contactInfo.phone2}`} className="block text-sm text-white hover:text-primary transition-colors">
                {contactInfo.phone2}
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-400">Adresse</p>
              <p className="text-sm text-white">{contactInfo.address}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} REFLECT STUDIO. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              {Object.entries(siteConfig.links).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <span className="text-sm capitalize">{platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
