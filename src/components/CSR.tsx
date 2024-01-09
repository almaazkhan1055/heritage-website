const posts = [
  {
    id: 1,
    title: 'Friendicoes',
    description: 'Friendicoes is dedicated to animal welfare, focusing on rescuing and rehabilitating injured animals, re-homing cats and dogs, and running sterilization programs. They also provide animal helpline services and manage sanctuaries for various animals in India.',
    href: 'https://friendicoes.org',
    imageUrl: '/content/about/CSR-Friendicoes.png',

  },
  {
    id: 2,
    title: 'HelpAge India',
    description: 'HelpAge India is a leading charity platform in India working with and for disadvantaged elderly. They help improve the quality of life of destitute elders primarily in the rural areas through its welfare projects by providing free rations, free medicines and consultations and conduct free cataract surgeries.',
    href: 'https://www.helpageindia.org/',
    imageUrl: '/content/about/CSR-HelpAge.jpg',
  },
{
    id: 3,
    title: 'SOS Children\'s Villages of India',
    description: 'SOS Children\'s Villages of India is a non-profit organisation that provides long-term family-based care to parentless and abandoned children in India. They provide children with a family, a mother and siblings, and a home, where they can grow up in a safe and secure environment.',
    href: 'https://www.soschildrensvillages.in/',
    imageUrl: '/content/about/CSR-SOS.jpg'
}
]

export default function CSR() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-5 text-3xl font-bold leading-6 text-primary group-hover:text-secondary transition-colors duration-800 group-hover:cursor-pointer font-canelaThin">
                      <span className="absolute inset-0" />
                      {post.title}
                 
                  </h3>
                  <p className="mt-5 line-clamp-5 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
           
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
