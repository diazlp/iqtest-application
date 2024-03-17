import React, { Fragment, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import type { Container, Engine } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

export default function Particle(): React.ReactNode {
  const [init, setInit] = useState<boolean>(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container: Container | undefined) => {
    // Empty block statement
  }

  return (
    <Fragment>
      {init && (
        <div className="relative -z-10">
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: 'attract',
                  },
                },
                modes: {
                  attract: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: [
                    '#dab171',
                    '#d6745b',
                    '#659dbd',
                    '#8dc3c7',
                    '#9cb476',
                    '#b57096',
                    '#dab76b',
                    '#edaa61',
                    '#b7bcca',
                    '#a58e61',
                    '#c7ab76',
                  ],
                },
                move: {
                  direction: 'none',
                  enable: true,
                  outModes: {
                    default: 'bounce',
                  },
                  random: false,
                  speed: 3,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    // area: 800,
                  },
                  value: 110,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: 'circle',
                },
                size: {
                  value: {
                    min: 10,
                    max: 10,
                  },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      )}
    </Fragment>
  )
}
