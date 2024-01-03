import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Github } from "@medusajs/icons"
import Image from "next/image"
import Link from "next/link"
import Input from "@modules/common/components/input"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Ecommerce Artificial Intelligence
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Powered by ChangYed
          </Heading>
        </span>
        <Link
          href="#"
          target="_blank"
        >
          <Button variant="secondary">
            View on XVIDEO
            <Image className="w-5 h-auto object-contain" src={"/x.webp"} alt="" width={100} height={100} />
          </Button>
        </Link>
        <div className="relative mt-6">
          <input
            type="text"
            placeholder="พิมพ์ความต้องการที่นี่"
            aria-label="ai text"
            className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
          />
          <div className="absolute inset-y-1 right-1 flex justify-end">
            <button
              type="submit"
              aria-label="Submit"
              className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
            >
              <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
