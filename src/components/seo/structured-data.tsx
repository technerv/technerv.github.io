import { useEffect } from 'react'

export function StructuredData() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'TECHNERV',
      url: 'https://technerv.github.io/company_website/',
      logo: 'https://technerv.github.io/company_website/favicon.svg',
      description:
        'TECHNERV builds intelligent digital products: modern websites, scalable web applications, AI-powered solutions, and cloud-ready platforms.',
      foundingDate: '2021',
      sameAs: [
        'https://github.com/',
        'https://linkedin.com/',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@technerv.com',
        contactType: 'customer support',
        availableLanguage: ['English'],
      },
      knowsAbout: [
        'Web Development',
        'AI Solutions',
        'Cloud Technologies',
        'Business Automation',
        'WordPress Development',
        'Custom Software',
      ],
    }

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'TECHNERV Services',
      itemListElement: [
        { '@type': 'Offer', name: 'Modern Website Design', position: 1 },
        { '@type': 'Offer', name: 'WordPress Development', position: 2 },
        { '@type': 'Offer', name: 'E-commerce Solutions', position: 3 },
        { '@type': 'Offer', name: 'Custom Business Applications', position: 4 },
        { '@type': 'Offer', name: 'AI & Automation', position: 5 },
        { '@type': 'Offer', name: 'API Integrations', position: 6 },
        { '@type': 'Offer', name: 'Cloud Deployment', position: 7 },
        { '@type': 'Offer', name: 'Website Maintenance & Security', position: 8 },
      ],
    }

    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'TECHNERV',
      provider: {
        '@type': 'Organization',
        name: 'TECHNERV',
      },
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Solutions',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Solutions' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Services' } },
        ],
      },
    }

    const appScript = document.createElement('script')
    appScript.type = 'application/ld+json'
    appScript.text = JSON.stringify(schema)
    appScript.id = 'schema-organization'

    const serviceScript = document.createElement('script')
    serviceScript.type = 'application/ld+json'
    serviceScript.text = JSON.stringify(serviceSchema)
    serviceScript.id = 'schema-services'

    const personScript = document.createElement('script')
    personScript.type = 'application/ld+json'
    personScript.text = JSON.stringify(personSchema)
    personScript.id = 'schema-profession'

    if (!document.getElementById('schema-organization')) document.head.appendChild(appScript)
    if (!document.getElementById('schema-services')) document.head.appendChild(serviceScript)
    if (!document.getElementById('schema-profession')) document.head.appendChild(personScript)

    return () => {
      document.getElementById('schema-organization')?.remove()
      document.getElementById('schema-services')?.remove()
      document.getElementById('schema-profession')?.remove()
    }
  }, [])

  return null
}
