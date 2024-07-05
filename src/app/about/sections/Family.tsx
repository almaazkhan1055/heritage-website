const images = [
  'content/about/family_3.jpg',
  'content/about/family_4.jpg',
  'content/about/family_1.jpg',
  'content/about/family_2.jpg',
]
export default function Family() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h1 className="lg:text-6xl md:text-6xl text-4xl font-canelaThin font-thin text-primary">
              The Heritage Family
            </h1>
            <p className="mt-6 leading-8 text-secondary font-vietnam">
              At the heart of our company is our family of dedicated employees.
              We believe in taking care of our team, ensuring that every member
              feels valued and supported. Our work environment fosters growth,
              learning, and a sense of belonging. We understand that our
              strength lies in our people, and we are committed to their
              wellbeing, viewing each employee as an integral part of the
              Heritage family.
            </p>
            <div className="mt-10 flex"></div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src={images[0]}
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                src={images[1]}
                alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                src={images[2]}
                alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                src={images[3]}
                alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
