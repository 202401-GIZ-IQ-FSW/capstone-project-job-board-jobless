import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import JobCategories from "../components/JobCategories";
import FeaturedEmployers from "../components/FeaturedEmployers";
import ProfileSettings from "../components/ProfileSettings ";
import AdvanceYourCareer from "../components/AdvanceYourCareer";

export default function LandPage(){

    return(

        <div >
        <Navbar />
        <HeroSection/>
        <JobCategories/>
        <FeaturedEmployers/>
        <AdvanceYourCareer/>
        <ProfileSettings/>
        
      </div>
    )
}