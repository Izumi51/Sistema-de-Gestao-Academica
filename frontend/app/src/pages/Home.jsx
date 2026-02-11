import { HomeHeader } from '../components/landingPage/HomeHeader/HomeHeader'
import { HeroSection } from '../components/landingPage/HeroSection/HeroSection'
import { ResourceSection } from '../components/landingPage/ResourceSection/ResourceSection'
import { AudienceSection } from '../components/landingPage/AudienceSection/AudienceSection'
import { WorkSection } from '../components/landingPage/HowItsWorkSection/WorkSection'
import { BenefitsSection } from '../components/landingPage/BenefitsSection/BenefitsSection'
import { CtaSection } from '../components/landingPage/CtaSection/CtaSection'

export function Home(){
    return(
        <>
            <HomeHeader/>
            <HeroSection/>
            <ResourceSection/>
            <AudienceSection/>
            <WorkSection/>
            <BenefitsSection/>
            <CtaSection/>
        </>
    )
}