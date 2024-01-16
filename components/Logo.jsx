import logo from "@/public/logo.svg"
import Image from "next/image"

export const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="logo" />
    </div>
  )
}
