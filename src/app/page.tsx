import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/sections/HeroSection";
import { invitationData } from "@/data/invitation";
import WeddingSection from "@/components/sections/WeddingSection";
import InvitationSection from "@/components/sections/InvitationSection";
import LoverSection from "@/components/sections/LoverSection";
import CoupleSection from "@/components/sections/CoupleSection";
import HeroWeddingSection from "@/components/sections/HeroWeddingSection";
import SingleImageSection from "@/components/sections/SingleImageSection";
import CalendarSection from "@/components/sections/CalendarSection";
import SweetSection from "@/components/sections/SweetSection";
import GallerySection from "@/components/sections/GallerySection";
import RSVPSection from "@/components/sections/RSVPSection";
import GiftSection from "@/components/sections/GiftSection";
export default function Home() {
  const data = invitationData.nhaGai;

  return (
    <MainLayout>
      <HeroSection data={data} />
      <WeddingSection />
      <InvitationSection data={data} />
      <LoverSection data={data} />
      <CoupleSection data={data} />
      <HeroWeddingSection data={data} />
      <SingleImageSection data={data} />
      <CalendarSection data={data} />
      <SweetSection data={data} />
      <GallerySection data={data} />
      <RSVPSection data={data} />
      <GiftSection data={data} />
    </MainLayout>
  );
}