import Image from "next/image";
import heroImage from "../public/hero-image.png"

export const HeroLeftSide = () => {
  return (
    <div>
         <div>
            <Image src={heroImage} alt="hero image" />
        </div>
    </div>
  )
}
