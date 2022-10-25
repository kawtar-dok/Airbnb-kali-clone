import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"
import MediumCard from "../components/MediumCard"
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

const Home = ({exploreDta = [], cardData = []}) => {
  //props.exploreDta 
  return (
    <div className="dark:text-gray-100 dark:bg-gray-900 dark:border-gray-900">
      <Head>
        <title>Kali's Airbnb</title>
        <link rel="icon" href="/icon2.ico" />
      </Head>
      
      {/* Header */}
       <Header />

      {/* Banner */}
      <Banner />
       {/* its the main section who contains the diff types of cards  */}
      <main className='max-w-7xl mx-auto px-8 sm:px-16 '>
         <section className='pt-6'>
            <h2 className='text-4xl font-semibold pb-5'>
              Explore Nearby
            </h2>
            {/* We need to pull some data from the server -API ENdpoint  */} 
         <div className='grid grid-cols-1 sm:grid-cols-2
         lg:grid-cols-3  xl:grid-cols-4'> 
           {exploreDta?.map(({img, distance, location}) => (
             <SmallCard
              key={img}
              img={img}
              distance={distance}
              location={location} />
           ))}
         </div> 
         </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>
            Live Anywhere
          </h2>
        <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {cardData?.map(({img, title}) => (
            <MediumCard 
            key={img}
            img={img}
            title={title}/> 
          ))}
        </div>
        </section>
        <LargeCard 
        img='https://links.papareact.com/4cj'
        title='The Greatest Outdoors'
        description='Wishlists curated by Airbnb.'
        buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  ) 
}

export default Home

//this is gonna do some clever server rendring stuff
export async function getStaticProps() {
  //our API ENDPOINTS :https://links.papareact.com/pyp
  /*
   const exploreDta = await fetch('https://links.papareact.com/pyp/2/zp1').then(
    (res) => res.json()
  );
  */
  const res= await fetch('https://www.jsonkeeper.com/b/4G1G');
  const  exploreDta = await res.json()

  const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props:{
      //exploreDta: exploreDta,
      exploreDta,
      cardData,
    }
  }
}
