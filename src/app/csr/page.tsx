import React from 'react'
import Image from 'next/image'
import NudgeBanner from '@/components/ui/NudgeBanner'
import PageTitle from '@/components/ui/PageTitle'
import CSR from '@/app/csr/sections/CSR'
import Hero from './sections/Hero'
import Section from './sections/Section'



const Career = () => {
  return (
    <main>
      <Hero />

      <Section
        text={[
          'Friendicoes SECA, a pioneering animal welfare organization based in New Delhi, India, has been at the forefront of providing care and shelter to distressed animals since 1979. Known for its comprehensive approach to animal welfare, Friendicoes offers a range of services including rescue operations, medical treatment, sterilization programs, and adoption services, striving to improve the lives of animals and promote human-animal coexistence.',
          'In collaboration with Friendicoes, our initiative focused on supporting the Animal Birth Control Program, targeting low-income areas in Delhi to manage and improve the welfare of stray dog and cat populations. By funding the sterilization and vaccination of 135 dogs, our partnership aimed to reduce                   suffering, control stray populations effectively, and foster a healthier community environment for both animals and humans.                   This project underscores our commitment to animal welfare and                   our efforts to make a tangible difference in the lives of animals through strategic partnerships and targeted action.',
        ]}
        title="Friendicoes"
        link="https://friendicoes.org"
        media={
          <iframe
            className="w-full h-72"
            src="https://drive.google.com/file/d/19UwZjmRM7vLzRgExi1T4RJEvNfU6Pgmc/preview"
            allow="autoplay"
          ></iframe>
        }
      />

      <Section
        text={[
          'HelpAge India, a leading charity in India working for the care and welfare of older persons, has established its first directly managed Old Age Home for women in the Eastern Region, named "Kalyan Ashram." This initiative is dedicated to providing shelter and care to needy elderly women from low-income groups, integrating services like a weekly Stationary Medicare Unit, a toll-free Elders Helpline, and a well-equipped Physiotherapy Centre to support the holistic well-being of the elderly.',
          'In partnership with HelpAge India, our organization supported the operational expenditure of the Kalyan Ashram Physiotherapy Centre, focusing on enhancing the quality of life for the elderly. By contributing to the provision of physiotherapy services, we aimed to address common geriatric issues such as arthritis, joint and muscle pain, and post-stroke paralysis among the low-income and destitute elderly population. This collaboration underscores our commitment to social responsibility and the improvement of elderly care services, demonstrating our dedication to making a significant impact in the lives of the elderly community.',
        ]}
        title="HelpAge India"
        link="https://www.helpageindia.org/"
        media={
          <Image
            className="w-full"
            src="/content/csr/HelpAge.jpg"
            width={500}
            height={500}
            alt=""
          />
        }
      />

      <Section
        title="SOS Villages of India"
        link="https://www.soschildrensvillages.in/"
        media={
          <Image
            src="/content/csr/SOS.jpg"
            className="w-full"
            width={500}
            height={500}
            alt=""
          />
        }
        text={[
          "SOS Children's Villages of India, with its inception in 1964, has become a hallmark of support for orphaned and abandoned children across 22 states, providing a family-like environment through its 32 villages. It focuses on holistic development including education, health, and psychological well-being, ensuring children grow up in nurturing surroundings.",
          "Our collaboration with SOS Children's Villages supported the education and overall development of 55 children in Bawana, Delhi. By funding their schooling, including fees, books, and uniforms, along with extracurricular activities, we aim to empower these children towards a brighter, self-reliant future, ensuring their fundamental rights to education, development, and protection. This partnership reflects our dedication to changing lives and fostering positive societal contributions.",
        ]}
      />

      <Section
        text={[
          "CRY (Child Rights and You) is a leading Indian NGO dedicated to ensuring the rights of underprivileged children, focusing on education, healthcare, and protection from exploitation. The organization's project, highlighted in the provided document, targets children and adolescents in Madhya Pradesh, aiming to address issues such as high dropout rates, child labor, and gender disparities in education through a comprehensive approach that includes digital learning centers, child activity and resource centers, and community mobilization efforts.",
          'Our partnership with CRY supported their initiatives in Indore and Dewas, contributing to the establishment of digital learning centers and child activity resource centers. This collaboration aimed to reduce educational gaps, promote gender equality, and empower children and adolescents with the skills and knowledge necessary for their holistic development. Our contribution underlines our commitment to fostering educational and social opportunities for underprivileged youth, aligning with our broader mission to support impactful community projects.',
        ]}
        title="CRY India"
        link="https://www.cry.org/"
        media={
          <Image
            src="/content/csr/CRY.jpg"
            className="w-full"
            width={500}
            height={500}
            alt=""
          />
        }
      />

      <NudgeBanner
        title="explore our craft"
        label="Explore"
        route="/products"
      />
    </main>
  )
}

export default Career
