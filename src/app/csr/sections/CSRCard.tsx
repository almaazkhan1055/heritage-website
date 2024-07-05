'use client'

import { Button } from '../../../components'

export default function CSRCard({ post }: any) {
  return (
    <article key={post.id} className="flex flex-col items-start justify-start">
      <div className="relative w-full">
        <img
          src={post.imageUrl}
          alt=""
          className="aspect-[16/9] w-full object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
      </div>
      <div className="max-w-xl">
        <div className="group relative">
          <h3
            onClick={() => window.open(post.href, '_blank')}
            className="mt-5 text-3xl font-bold leading-6 text-primary group-hover:text-secondary transition-colors duration-800 group-hover:cursor-pointer font-canelaThin"
          >
            <span className="absolute inset-0" />
            {post.title}
          </h3>
          <p className="mt-5 line-clamp-5 text-sm leading-6 text-gray-600">
            {post.description}
          </p>
        </div>

        <div className="mt-5 flex justify-center">
          <Button label="View Details" color="white" route={post.proposal} />
        </div>
      </div>
    </article>
  )
}
