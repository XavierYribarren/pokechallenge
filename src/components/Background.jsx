import { Environment, MeshReflectorMaterial, Sparkles, Stars, useTexture } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'
function Background() {


  return (
   <>

   <Environment
        preset='dawn'
      files={'kiara_5_noon.jpg'}
        //  background 
        
         blur={.3}
         />
         
         <Sparkles count={50} size={2} opacity={.1} position={[0,6,-10]} scale={[40,6,1]} speed={0.041}/>
   </>
  )
}

export default Background