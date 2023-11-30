import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Loader, OrbitControls, ScrollControls, Stage, useScroll } from '@react-three/drei'
import { Poke } from './Poke'
import Background from './Background'
import { Bloom, ColorAverage, DepthOfField, EffectComposer, SelectiveBloom, ToneMapping } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, BlendFunction } from 'postprocessing'
import { Forest } from './Forest'
import {Perf} from 'r3f-perf'
import {Text} from './Text'
import { styles } from './loaderStyle'
function Scene() {

  const scroll = useScroll()

const envIntensity = 0.031
const bloomRef = useRef()
const bloomRef2 = useRef()
const lightRef = useRef()
  return (
    <div className='scene'>
      
      
      <Canvas shadows dpr={1.5} gl={{antialias: true, powerPreference: 'high-performance', alpha: true}}  >
<Suspense fallback={null}>

      <directionalLight ref={lightRef} angle={10} position={[0,.2,-2.5]} intensity={.75} castShadow        shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={0}
          shadow-camera-far={100}
        color={"#18d7d7"}

          />
          <ScrollControls pages={3}>  
          <group position={[0,-.5,4]}>
    
           <Background envIntensity={envIntensity}/>
      <Poke envIntensity={envIntensity} bloomRef={bloomRef} bloomRef2={bloomRef2}/>
    
          </group>
       </ScrollControls>
<EffectComposer disableNormalPass>
<Bloom luminanceThreshold={1} mipmapBlur luminanceSmoothing={2} intensity={1} />


  <DepthOfField
      focusDistance={0.0017} // where to focus
      focalLength={0.01295} // focal length
      bokehScale={24} // bokeh size
      target={[0,0.71,2]}
  />
  <ToneMapping
    blendFunction={BlendFunction.NORMAL} // blend mode
    adaptive={true} // toggle adaptive luminance map usage
    resolution={256} // texture resolution of the luminance map
    middleGrey={0.6} // middle grey factor
    maxLuminance={16.0} // maximum luminance
    averageLuminance={1.0} // average luminance
    adaptationRate={1.0} // luminance adaptation rate
    
  />
</EffectComposer>

{/* <Perf/> */}</Suspense>
      </Canvas>
      <Loader className="loader" containerStyles={{...styles.container}}
        dataStyles={{...styles.data}}
        />
      </div>
  )
}

export default Scene