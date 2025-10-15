import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import FollowersSection from "@/components/FollowersSection";
import LikesSection from "@/components/LikesSection";
import ViewsSection from "@/components/ViewsSection";
import CourseSection from "@/components/CourseSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CustomerShowcase from "@/components/CustomerShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <VideoSection />
      <FollowersSection />
      <LikesSection />
      <ViewsSection />
      <CourseSection />
      <CustomerShowcase />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
