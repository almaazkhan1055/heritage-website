import React from 'react'
import Image from 'next/image'
import NudgeBanner from '@/components/NudgeBanner'
import PageTitle from '@/components/PageTitle'

const Contact = () => {
  return (
    <main>
      <PageTitle title="CONTACT US" img="/assets/contact/bg.jpg" />

      <div className="max-w-screen-xl mx-auto flex lg:flex-row flex-col items-center justify-center">
        <div className="lg:w-[50%] flex items-center justify-center  w-full h-full">
          <section className="text-[#5D4B41] body-font   relative">
            <div className="container px-5 py-24  flex items-center justify-center flex-col ">
              <div className="flex flex-col lg:text-left text-center  w-full mb-6">
                <h1 className="sm:text-5xl text-3xl font-medium title-font mb-2 font-canela text-primary">
                  Contact Form
                </h1>
              </div>

              <div className="lg:w-full md:w-2/3  ">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 font-semibold text-sm text-[#5D4B41]"
                      >
                        Choose Topic
                      </label>
                      <select
                        id="cars"
                        className="w-full bg-white  rounded border border-[#B49F93] focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary-200 text-base outline-none text-primary py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        name="cars"
                      >
                        <option value="volvo">Product Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 font-semibold text-sm text-[#5D4B41]"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="w-full  bg-opacity-50 rounded border border-[#B49F93] focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary-200 text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 font-semibold text-sm text-[#5D4B41]"
                      >
                        Last Name
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Surname"
                        className="w-full  bg-opacity-50 rounded border border-[#B49F93] focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary-200 text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 font-semibold text-sm text-[#5D4B41]"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="yourmail@xyz.com"
                        className="w-full  bg-opacity-50 rounded border border-[#B49F93] focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary-200 text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 font-semibold text-sm text-[#5D4B41]"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Enter your query in detail"
                        className="w-full  bg-opacity-50 rounded border border-[#B49F93] focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary-200 h-32 text-base outline-none text-primary py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 font-canela w-full">
                    <button className="flex  w-full text-white bg-[#937767] border-0 py-2 px-8 focus:outline-none item-center justify-center rounded text-lg">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="lg:w-[50%] w-full h-full flex items-center justify-center ">
          <div className="flex flex-col  gap-10">
            <div className="flex  flex-col items-start justify-center gap-2">
              <div className="flex  flex-col items-start justify-center gap-2">
                <div>
                  <h1 className="text-xl font-semibold font-canelaThin text-primary">
                    Email
                  </h1>
                  <p className="text-sm text-[#937767]">
                    Reach Out to Us Anytime
                  </p>
                </div>
                <h1 className="font-semibold underline text-primary">
                  <a href="mailto:info@heritage-exports.com">
                    info@heritage-exports.com
                  </a>
                </h1>
              </div>
            </div>

            <div className="flex  flex-col items-start justify-center gap-2">
              <div>
                <h1 className="text-xl font-semibold font-canelaThin text-primary">
                  Call
                </h1>
                <p className="text-sm text-[#937767]">
                  Call our team Mon-Fri from 8am to 5pm
                </p>
              </div>
              <h1 className="font-semibold underline text-primary">
                +91 6942069420
              </h1>
            </div>

            <div className="flex  flex-col items-start justify-center gap-2">
              <div>
                <h1 className="text-xl font-semibold font-canelaThin text-primary">
                  Visit
                </h1>
                <p className="text-sm text-[#937767]">
                  Come visit us or react us in person in Delhi
                </p>
              </div>
              <h1 className="font-semibold text-primary">
                327 Main Road Burari, Delhi-110084, India.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <NudgeBanner
        title="explore our craft"
        label="Explore"
        route="/products"
      />
    </main>
  )
}

export default Contact
