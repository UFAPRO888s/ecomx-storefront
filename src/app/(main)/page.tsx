import { getCollectionsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "CHANGYED STORE",
  description:
    "จัดสเปคคอม ประกอบคอม คอมพิวเตอร์ประกอบ เล่นเกมส์ ตามความต้องการจากผู้เชี่ยวชาญ คุณภาพดี สเปคแรง ราคาดี ผ่อน 0% ส่งฟรี ภายใน 5 ชั่วโมง",
}

export default async function Home() {
  const { collections, count } = await getCollectionsList(0, 3)

  return (
    <>
      <Hero />
      <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        <FeaturedProducts collections={collections} />
      </Suspense>
    </>
  )
}
