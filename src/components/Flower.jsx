
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three'
export function Flower(props) {
  const { nodes, materials } = useGLTF("/blueflower.glb");
console.log(props.envIntensity)

const envIntensity = props.envIntensity
  const tige = new THREE.MeshStandardMaterial({color :'#012b00', envMapIntensity: envIntensity/2, emissive: "#000", roughness: 0, transparent: true, metalness: 0})

  return (
    <group {...props} dispose={null}>
      <group position={[-0.5, -0.12, -0.72]} scale={0.082} rotation={[0,-2.35,0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={tige}
          
          // material-envMapIntensity={props.envIntensity}
       
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials.Blue}
          // material-emissive={"#00CEE7"}
          // material-emissiveIntensity={1}
          envIntensity={props.envIntensity}
          // material-envMapIntensity={props.envIntensity}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/blueflower.glb");
