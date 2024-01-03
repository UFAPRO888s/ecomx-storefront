import { Text } from "@medusajs/ui"
import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Powered by
      <a href="#" target="_blank" rel="noreferrer">
        CHANGYED
      </a>
      &
      <a href="#" target="_blank" rel="noreferrer">
        NOOK
      </a>
    </Text>
  )
}

export default MedusaCTA
