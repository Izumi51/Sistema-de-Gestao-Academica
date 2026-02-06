import { HomeHeader } from '../components/landingPage/HomeHeader/HomeHeader'
import { HeroSection } from '../components/landingPage/HeroSection/HeroSection'
import { ResourceSection } from '../components/landingPage/ResourceSection/ResourceSection'

export function Home(){
    return(
        <>
            <HomeHeader/>
            <HeroSection/>
            <ResourceSection/>
        </>
    )
}