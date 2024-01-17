import { DownloadButton } from "./DownloadButton";
import { HeroLeftSide } from "./HeroLeftSide";
import { HeroRightSide } from "./HeroRightSide";

const HeroSection = () => {
  return (
    <div className="bg-[#18C0FF] h-[95vh] rounded-bl-[9.375rem]">
      <div className="relative top-52 container mx-auto lg:px-0">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <HeroLeftSide />
          {/* Right side */}
          <div>
            <HeroRightSide />
            <DownloadButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
