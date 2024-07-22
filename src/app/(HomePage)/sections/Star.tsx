import Image from 'next/image'
import React from 'react'

const Star = () => {
  return (
    // <div className="w-full flex flex-col items-center justify-center gap-8 py-32 px-[10vw]">
    //   <Image
    //     src="/assets/stars/stars.png"
    //     alt="2 Stars"
    //     quality={100}
    //     className="h-36 w-auto"
    //     width={1000}
    //     height={1000}
    //   />

    // <div className="flex flex-col items-center justify-center gap-4">
    //   <p className="text-primary text-5xl font-light font-canelaThin text-center">
    //     2 Star Export House
    //   </p>
    //   <p className="text-secondary text-3xl font-bold font-canelaThin text-center">
    //     recognized by Government of India
    //   </p>
    // </div>
    // </div>
    <div className="w-full flex flex-col items-center justify-center gap-8 mt-20 lg:mt-0">
      <div className="lg:h-[550px] h-[350px] w-full relative overflow-hidden flex items-end justify-center">
        <div className=" h-full w-full borderGrd absolute -right-24 flex items-center justify-center border border-b-0 border-primary box-border borderGrd-r">
          <div className=" w-[95%] h-[95%] absolute  borderGrd   flex items-center justify-center border border-b-0 border-primary box-border borderGrd-r">
            <div className=" w-[95%] h-[95%] absolute  borderGrd   flex items-center justify-center border border-b-0 border-primary box-border borderGrd-r">
              <div className=" w-[95%] h-[95%] absolute  borderGrd   flex items-center justify-center border border-b-0 border-primary box-border borderGrd-r">
                <div className=" w-[95%] h-[95%] absolute  borderGrd   flex items-center justify-center border border-b-0 border-primary box-border borderGrd-r">
                  <div className=" w-[95%] h-[95%] absolute  borderGrd flex items-center justify-center border border-b-0 border-primary box-border borderGrd-r">
                    <div className="w-[95%] h-[95%] absolute overflow-hidden border-gray-400 borderGrd-r flex items-center justify-center flex-col gap-5 bg-[#93776713]">
                      <Image
                        alt="img"
                        src="/assets/stars/stars.png"
                        width={200}
                        height={200}
                        className="hover:scale-110 transition-all duration-200 object-cover"
                      />
                      <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-primary lg:text-2xl text-xl font-light font-canelaThin text-center">
                          3 Star Export House
                        </p>
                        <p className="text-secondary lg:text-xl text-[12px] font-bold font-canelaThin text-center">
                          recognized by Government of India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Star
