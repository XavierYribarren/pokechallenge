import {
  Environment,
  MeshReflectorMaterial,
  Stars,
  useTexture,
} from '@react-three/drei';
import React from 'react';
import * as THREE from 'three';
import { Forest } from './Forest';
import { Flower } from './Flower';
function Ground(props) {
  const grassColor = useTexture('/grassmin/wispy-grass-meadow_albedo.png');
  grassColor.flipY = false;
  const grassNorm = useTexture('/grassmin/wispy-grass-meadow_normal-ogl.png');
  grassNorm.flipY = false;
  const grassHeight = useTexture('/grassmin/wispy-grass-meadow_height.png');
  grassHeight.flipY = false;
  const grassRoughness = useTexture(
    '/grassmin/wispy-grass-meadow_roughness.png'
  );
  grassRoughness.flipY = false;
  const grassAO = useTexture('/grassmin/wispy-grass-meadow_ao.png');
  grassAO.flipY = false;

   grassColor.wrapS = THREE.RepeatWrapping;
   grassColor.wrapT = THREE.RepeatWrapping;
   grassNorm.wrapS = THREE.RepeatWrapping;
   grassNorm.wrapT = THREE.RepeatWrapping;
   grassHeight.wrapS = THREE.RepeatWrapping;
   grassHeight.wrapT = THREE.RepeatWrapping;
   grassRoughness.wrapS = THREE.RepeatWrapping;
   grassRoughness.wrapT = THREE.RepeatWrapping;
   grassAO.wrapS = THREE.RepeatWrapping;
   grassAO.wrapT = THREE.RepeatWrapping;

  const repeatnb = 20;

  grassColor.repeat.x = repeatnb;
  grassColor.repeat.y = repeatnb*1.5;
  grassNorm.repeat.x = repeatnb;
  grassNorm.repeat.y = repeatnb*1.5;
  grassHeight.repeat.x = repeatnb;
  grassHeight.repeat.y = repeatnb*1.5;
  grassRoughness.repeat.x = repeatnb;
  grassRoughness.repeat.y = repeatnb*1.5;
  grassAO.repeat.x = repeatnb;
  grassAO.repeat.y = repeatnb*1.5;
  return (
    <>
      <mesh
        rotation={[-Math.PI * 0.5, 0, 0]}
        position={[0, -0.1, 0]}
        receiveShadow
      >
        <planeGeometry args={[20, 20, 20, 20]} />
        <meshStandardMaterial
          map={grassColor}
          normalMap={grassNorm}
          // displacementMap={grassHeight}
          // displacementScale={0.01}
          // displacementBias={0.0001}
          roughnessMap={grassRoughness}
          roughness={0.8}
          
          metalness={0.71}
          // aoMap={grassAO}
          // aoMapIntensity={2}
          envMapIntensity={props.envIntensity}
        />
      </mesh>
      <Flower envIntensity={props.envIntensity}/>
      <pointLight intensity={20} position={[-.372,.12,-.424]} castShadow color={"#18d7d7"}/>
      <Forest position={[-2,-0.1,0]} envIntensity={props.envIntensity}/>
      <Forest position={[2,-0.1,-5]} rotation={[0,-.8,0]} scale={[-1,1,1]} envIntensity={props.envIntensity}/>
    </>
  );
}

export default Ground;
