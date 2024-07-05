import React from 'react'
import Image from 'next/image'
import NudgeBanner from '@/components/ui/NudgeBanner'
import PageTitle from '@/components/ui/PageTitle'

const Contact = () => {
  return (
    <main>
      <PageTitle title="CONTACT US" img="/assets/contact/bg.jpg" />

      <div className="max-w-screen-xl mx-auto flex lg:flex-row flex-col items-center justify-center">
        <div className="lg:w-[50%] w-full h-full flex items-center justify-center mt-24">
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
                  Call our team Mon-Fri from 9:30 am to 6:30 pm
                </p>
              </div>
              <h1 className="font-semibold underline text-primary">
                <a href='tel:+91 1141082575'
                >+91 11-4108-2575</a>
              </h1>
              <h1 className="font-semibold underline text-primary">
                <a href='tel:+91 8750446500'
                >+91 87504-46500</a>
              </h1>
            </div>

            <div className="flex  flex-col items-start justify-center gap-2">
              <div>
                <h1 className="text-xl font-semibold font-canelaThin text-primary">
                  Visit<span className="text-sm">(by Appointment Only)</span>
                </h1>
              </div>
              <p className="text-sm text-[#937767]">Registered office + 20,000 sq. ft. Showroom</p>
              <h1 className="font-semibold text-primary">
                327 Main Road Burari, Delhi - 110084
              </h1>
              <p className="text-sm text-[#937767] mt-4">
              2,000 sq. ft. Showrooms Expo Mart, Greater Noida Showroom
              </p>
              <h1 className="font-semibold text-primary">
                Aisle C-05 - Mart 05-07 (2nd Floor)
                <br />
                Aisle C-08 - Mart 07-09 (2nd Floor)
                <br />
                Aisle D-07 - Mart 46-48 (3rd Floor)
              </h1>
              <p className="text-sm text-[#937767] mt-4">Kundali Factory + 5,000 sq. ft. Showroom</p>
              <h1 className="font-semibold text-primary">
                Narela Road, Kundli Distt Sonepat, Haryana
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
