import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/Layouts/MainLayout'
import FeaturedMedia from '../components/UI/Featured/featuredMedia'
import ForYouList from '../components/UI/ForYouList/ForYouList'
import JustAdded from '../components/UI/JustAdded/JustAdded'
import PosterView from '../components/UI/PosterView/PosterView'
import SeriesSection from '../components/UI/SeriesSection/SeriesSection'
import LastChance from '../components/UI/LastChance/LastChance'
import Hubs from '../components/UI/HBOHubs/Hubs'





export default function Home() {
  return (
      <MainLayout>
        <FeaturedMedia />
        <ForYouList />
        <JustAdded />
        <PosterView />
        <SeriesSection />
        <LastChance />
        <Hubs/>
      </MainLayout>
  )
}
