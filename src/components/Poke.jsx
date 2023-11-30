import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useScroll, MeshTransmissionMaterial, useTexture, Float } from "@react-three/drei";
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";
import Ground from "./Ground";
import { Text } from "./Text";
export function Poke(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/pballANim3-2.glb");
  const { actions } = useAnimations(animations, group);

const envIntensity = props.envIntensity


const ironMet = useTexture('/iron/rustediron-streaks_metallic.png')
const ironNorm = useTexture('/iron/rustediron-streaks_normal.png')
const ironRough = useTexture('/iron/rustediron-streaks_roughness.png')
const ironColor = useTexture('/iron/rustediron-streaks_basecolor.png')

const topExtMat = new THREE.MeshStandardMaterial({color : "red",map: ironColor, roughness : 0.95, envMapIntensity: envIntensity, normalMap: ironNorm, roughnessMap: ironRough, metalnessMap: ironMet})
const botExtMat = new THREE.MeshStandardMaterial({color: 'white', roughness : 0.95, envMapIntensity: envIntensity, map: ironMet, normalMap: ironNorm, roughnessMap: ironRough, metalnessMap: ironMet})
const intMat = new THREE.MeshStandardMaterial({color : "black", roughness : 0, envMapIntensity: envIntensity})
const journeyMat = new THREE.MeshStandardMaterial({color: '#ffffff', emissive: '#ff00ff'})


const [index, setIndex] = useState('Bot_extAction')
const scroll = useScroll()



useFrame((state, delta) => {

  const action = actions['Animation']
  const elapsed = state.clock.elapsedTime
  // The offset is between 0 and 1, you can apply it to your models any way you like
  const offset = 1 - scroll.offset
  action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
  state.camera.position.set(0 , .2+ Math.atan(offset/4) * 2, Math.cos((offset+0.5) / 10) *5)
  group.current.position.z = 2*-offset
actions.Animation.time = actions.Animation.getClip().duration * scroll.offset

journeyMat.emissiveIntensity = Math.sin(elapsed*2)*4
})

useEffect(() => void (actions.Animation.reset().play().paused = true), [])

const threeJourney = 'https://threejs-journey.com/'

const handlePointerOver = () => {  (document.body.style.cursor = 'pointer')};
const handlePointerOut = () => { (document.body.style.cursor = 'auto')};
const handleOpenNewTab = (site) => {
 

   let urlToOpen = site

  window.open(urlToOpen, '_blank');
};


return (
    <group ref={group} {...props} dispose={null} scale={5} position={[0,.51,0]} >
       <group name="Scene">
        <group name="Pokeball" rotation={[-0.008, 0, 0.007]}>
          <mesh
            name="Bot_int"
            castShadow
            receiveShadow
            geometry={nodes.Bot_int.geometry}
            material={intMat}
            rotation={[0.038, -0.001, -0.033]}
          />
          <group name="Top_ext" position={[0, -0.005, -0.098]}>
            <mesh
              name="Mesh_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_1.geometry}
              material={topExtMat}
            />
            <mesh
              name="Mesh_2"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_2.geometry}
              material={intMat}
            />
            <mesh
              name="Top_int"
              castShadow
              receiveShadow
              geometry={nodes.Top_int.geometry}
              material={intMat}
              position={[0, 0, 0.001]}
              rotation={[-0.007, 0, 0]}
            >
              <mesh
                name="Button"
                castShadow
                receiveShadow
                geometry={nodes.Button.geometry}
                material={botExtMat}
                position={[0, 0.005, 0.194]}
              />
            </mesh>
          </group>
          <group name="Bot_ext">
            <mesh
              name="Mesh_3"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_3.geometry}
              material={botExtMat}
            />
            <mesh
              name="Mesh_4"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_4.geometry}
              material={intMat}
            />
            <mesh
              name="Plane"
              castShadow
              receiveShadow
              geometry={nodes.Plane.geometry}
              material={intMat}
              position={[0, -0.012, 0]}
            />
          </group>
        </group>
        <mesh
         onClick={() =>  handleOpenNewTab(threeJourney)}
         onPointerOver={() => {handlePointerOver()}}
         onPointerOut={() => {handlePointerOut()}}
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          // material={materials["Blister Plastic (Transparent Sheen)"]}
          rotation={[1.274, 0.216, 0.004]}
          ref={props.bloomRef2}
        >      <meshPhysicalMaterial emissive={"#ff00ff"} emissiveIntensity={10} transmission={1} transparent={true} opacity={0.5} ior={1} reflectivity={0.7} clearcoat={1} roughness={0.04} metalness={1}color={"#ff00ff"}/>
      </mesh>
          <group name="Plane001">
            <mesh
               ref={props.bloomRef}
               rotation={[1.274, 0.216, 0.004]}
              name="Plane001_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_1.geometry}
              material={journeyMat}
            />
     
          </group>
       
      </group>
      <Ground envIntensity={envIntensity}/>
      <group position={[0,0.02,.11]} scale={0.05}>
<Float floatIntensity={0.42} rotationIntensity={0.2} speed={0.5}>

      <Text/>
</Float>
      </group>
    </group>
  );
}

useGLTF.preload("/pballANim3-2.glb");
