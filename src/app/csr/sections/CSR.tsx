import CSRCard from './CSRCard'

const posts = [
  {
    id: 1,
    title: 'Friendicoes',
    description:
      'Friendicoes is dedicated to animal welfare, focusing on rescuing and rehabilitating injured animals, re-homing cats and dogs, and running sterilization programs. They also provide animal helpline services and manage sanctuaries for various animals in India.',
    href: 'https://friendicoes.org',
    imageUrl: '/content/csr/Friendicoes.jpg',
    proposal: '/content/csr/Friendicoes.pdf',
  },
  {
    id: 2,
    title: 'HelpAge India',
    description:
      'HelpAge India is a leading charity platform in India working with and for disadvantaged elderly. They help improve the quality of life of destitute elders primarily in the rural areas through its welfare projects by providing free rations, free medicines and consultations and conduct free cataract surgeries.',
    href: 'https://www.helpageindia.org/',
    imageUrl: '/content/csr/HelpAge.jpg',
    proposal: '/content/csr/HelpAge.pdf',
  },
  {
    id: 3,
    title: 'SOS Villages',
    description:
      "SOS Children's Villages of India is a non-profit organisation that provides long-term family-based care to parentless and abandoned children in India. They provide children with a family, a mother and siblings, and a home, where they can grow up in a safe and secure environment.",
    href: 'https://www.soschildrensvillages.in/',
    imageUrl: '/content/csr/SOS.jpg',
    proposal: '/content/csr/SOS.pdf',
  },
  {
    id: 4,
    title: 'CRY India',
    description:
      'CRY (Child Rights and you) is a non-profit organisation that believes in every child’s right to a childhood – to live, learn, grow and play. They work to ensure lasting change for children, especially those who are marginalised and deprived.',
    href: 'https://www.cry.org/',
    imageUrl: '/content/csr/CRY.jpg',
    proposal: '/content/csr/CRY.pdf',
  },
]

export default function CSR() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
     
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {posts.map((post) => (
            <CSRCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
