import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
export function Text(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/pballANimTXT2.glb");
  const { actions } = useAnimations(animations, group);

  const outline = useRef()
  const inline = useRef()

const [opacityTog, setOpacityTog] = useState(1)

const scroll = useScroll()
  const outlineMat = new THREE.MeshStandardMaterial({color:"#705df2",  envMapIntensity: 0.1, metalness: 0.9, roughness : 0.49})
  const inlineMat = new THREE.MeshStandardMaterial({color:"#ff00ff", transparent: true, envMapIntensity: 0.1, emissive: "#f200ff"})



  useFrame((state, delta) => {
    const action = actions['WYBAction']
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = 1 - scroll.offset
    action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration ) * offset/5, 100, delta)
    // state.camera.position.set(0 , .2+ Math.atan(offset/4) * 2, Math.cos((offset+0.5) / 10) *5)
    actions.WYBAction.time = actions.WYBAction.getClip().duration * scroll.offset

    // setOpacityTog( scroll.offset);
  // console.log(inline.current.material.opacity)
  })
  
  useEffect(() => void (actions.WYBAction.reset().play().paused = true), [])
  

  
  return (
    <group ref={group} {...props} dispose={null} scale={14} position={[0,-0.25,-1.52]} >

        <group name="WYB" scale={0.3}>
          <mesh
          ref={inline}
            name="Text287"
            castShadow
            receiveShadow
            geometry={nodes.Text287.geometry}
            material={inlineMat}
    
        
          />
          <mesh
            name="Text287_1"
            castShadow
            receiveShadow
            geometry={nodes.Text287_1.geometry}
            material={outlineMat}
          />
        </group>

    </group>
  );
}

useGLTF.preload("/pballANimTXT2.glb");