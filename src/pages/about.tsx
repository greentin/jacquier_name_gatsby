import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Jodie" desc="Hi. I'm LekoArts! You can visit my website or my other Gatsby projects." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Antoine Jacquier</h1>
        <p>Bienvenue sur ma page personnelle. </p>
        <p>Photographe amateur depuis de nombreuses années, vous trouverez ici des photos de mes voyages, ainsi que des photos regroupées par thèmes.</p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
