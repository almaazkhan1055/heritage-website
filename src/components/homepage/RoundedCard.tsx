import Image from 'next/image'
import React, { FC } from 'react'

interface RoundedCardProps {
  img: string
  title: string
}

const RoundedCard: FC<RoundedCardProps> = ({ img, title }) => {
  return (
    <div className="flex items-center  justify-center flex-col">
      <div className=" h-80 w-96 relative overflow-hidden flex items-end justify-center">
        <div className=" h-80 w-80 borderGrd absolute -bottom-12   flex items-center justify-center rounded-t-full border border-b-0 border-primary box-border ">
          <div className=" w-[95%] h-[95%] absolute  borderGrd   flex items-center justify-center rounded-t-full border border-b-0 border-primary box-border ">
            <div className=" w-[95%] h-[95%] absolute  borderGrd   flex items-center justify-center rounded-t-full border border-b-0 border-primary box-border ">
              <div className=" w-[95%] h-[95%] absolute  borderGrd   flex items-center justify-center rounded-t-full border border-b-0 border-primary box-border ">
                <div className=" w-[95%] h-[95%] absolute  borderGrd   flex items-center justify-center rounded-t-full border border-b-0 border-primary box-border ">
                  <div className=" w-[95%] h-[95%] absolute  borderGrd flex items-center justify-center rounded-t-full border border-b-0 border-primary box-border ">
                    <div className="  w-[95%] h-[95%] absolute    rounded-t-full overflow-hidden border-gray-400">
                      <Image
                        alt="img"
                        src={img}
                        width={200}
                        height={200}
                        className="w-full h-full hover:scale-110 transition-all duration-200 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 px-12 py-5 ">
        <h1 className="font-canelaThin text-primary font-thin text-3xl text-center ">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default RoundedCard
