import { ReactElement } from "react"

export default function Section({
  media,
  title,
  text,
  link,
}: {
  media: ReactElement
  title: string
  text: string[]
  link: string
}) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            {media}
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-canela">
                {title}
              </h1>
              <div className="max-w-xl">
                {text.map((t, i) => (
                    <p key={i} className="mt-4">
                        {t}
                    </p>
                ))}
              </div>
            </div>

            <div className="mt-10 flex">
              <a
                href="#"
                className="text-base font-semibold leading-7 text-secondary"
              >
                More Details <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
