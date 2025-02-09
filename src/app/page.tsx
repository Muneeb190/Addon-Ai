import React from 'react'
import { Navbar } from './components/ui/Navbar'
import { Intro } from './components/ui/Intro'
import AddonIntro from './components/ui/AddonIntro'
import { Doc } from './components/ui/doc'
import Tokenomics from './components/ui/Tokenomics'
import RoadmapPhases from './components/ui/RoadmapPhases'
import SectionFooter from './components/ui/sectionFooter'
import Footer from '@/app/components/ui/Footer'
import Addon_models from './components/ui/Addon _models'


export default function Page () {
  return (
    <>
    <Navbar/>
    <Intro/>
    <AddonIntro/> 
    <Addon_models />
    <Doc/>
    <Tokenomics/>
    <RoadmapPhases/>
    <SectionFooter/>
    <Footer/> 
    </>
  )
}

