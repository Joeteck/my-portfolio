import Image from 'next/image'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import AchievementsSection from './components/AchievementsSection'
import ProjectsSection from './components/ProjectsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
        <NavBar/>
      <div class="container px-12 py-4  mx-auto mt-24" >
        <HeroSection/>  
        <AchievementsSection />
        <AboutSection/>
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer/>
    </main>
  )
}


// #064E3B
// websafe version is hex #006666
// A complement of this color would be #660000, and the grayscale version is #474747.
// A 20% lighter version of the original color is #499999, and #003637 is the 20% darker color. If you saturate the color by 10%, you get #006666, and if you desaturate by 10%, it is #0A6666.