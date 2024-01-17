import logo from "@/public/logo.svg"
import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
    </div>
  )
}
