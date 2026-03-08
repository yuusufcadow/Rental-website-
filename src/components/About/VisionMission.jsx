import React, { useEffect, useState } from 'react'
import { Target, Lightbulb, Gem, CheckCircle } from 'lucide-react'
import foundationImge from '../../assets/heroimage.jpg'

function Foundation() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const values = [
    'Trust – We provide reliable and verified property listings.',
    'Transparency – We ensure clear communication between renters and landlords.',
    'Customer Focus – We prioritize the needs of every home seeker.',
    'Innovation – We use technology to simplify the rental process.',
    'Accountability – We deliver dependable and responsible service.',
  ]

  return (
    <section className="overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
      <div className="container mx-auto p-4">
        <div
          className={`mx-auto mb-10 flex flex-col items-center transition-all duration-700 ${
            show ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <h2 className="text-center text-2xl font-bold leading-tight text-[#111827] sm:text-3xl lg:text-4xl">
            Our Foundations
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#1447e6]" />
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-[0.85fr_1.2fr]">
          <div className="grid gap-5">
            <div
              className={`rounded border border-[#dde2eb] bg-[#f5f6fa] p-5 sm:p-6  transition-all duration-700 hover:-translate-y-1 ${
                show ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded bg-[#1447e6] text-white sm:h-12 sm:w-12">
                <Target className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-xl font-bold leading-tight text-[#111827] sm:text-2xl">
                Our Mission
              </h3>

              <p className="mt-3 max-w-[350px] text-sm leading-6 text-slate-500 sm:text-base">
                To make house renting easier through verified listings, simple
                search tools, and a smooth digital experience that connects
                renters with trusted landlords quickly and transparently.
              </p>
            </div>

            <div
              className={`rounded border border-[#dde2eb] bg-[#f5f6fa] p-5 sm:p-6  transition-all duration-700 delay-150 hover:-translate-y-1 ${
                show ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#1447e6] text-white sm:h-12 sm:w-12">
                <Lightbulb className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-xl font-bold leading-tight text-[#111827] sm:text-2xl">
                Our Vision
              </h3>

              <p className="mt-3 max-w-[350px] text-sm leading-6 text-slate-500 sm:text-base">
                To become the most trusted and modern platform for finding rental
                homes, helping people discover safe, comfortable, and affordable
                places to live with confidence.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <div
              className={`overflow-hidden rounded transition-all duration-700 ${
                show ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
            >
              <img
                src={foundationImge}
                alt="Foundation"
                className="h-[180px] w-full object-cover sm:h-[210px] lg:h-[185px]"
              />
            </div>

            <div
              className={`rounded border border-[#dde2eb] bg-[#f5f6fa] p-5 sm:p-6  transition-all duration-700 delay-150 hover:-translate-y-1 ${
                show ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#1447e6] text-white sm:h-12 sm:w-12">
                <Gem className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-xl font-bold leading-tight text-[#111827] sm:text-2xl">
                Core Values
              </h3>

              <div className="mt-5 space-y-4">
                {values.map((item, index) => {
                  const [title, description] = item.split(' – ')

                  return (
                    <div
                      key={item}
                      className={`flex items-start gap-3 transition-all duration-700 ${
                        show
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${250 + index * 100}ms` }}
                    >
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-[#1447e6]" />
                      <p className="text-sm leading-6 text-slate-700 sm:text-base">
                        <span className="font-semibold text-[#111827]">
                          {title}
                        </span>{' '}
                        – {description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Foundation