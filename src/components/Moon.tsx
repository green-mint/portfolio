"use client";
import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Scene, Mesh, PerspectiveCamera, TextureLoader } from "three";

const textureURL =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg";
const displacementURL =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg";
const worldURL =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/hipp8_s.jpg";
const textureLoader = new TextureLoader();
const texture = textureLoader.load(textureURL);
const displacementMap = textureLoader.load(displacementURL);

const materialAttributes: THREE.MeshPhongMaterialParameters = {
  color: 0xffffff,
  map: texture,
  displacementMap: displacementMap,
  displacementScale: 0.06,
  bumpMap: displacementMap,
  bumpScale: 0.04,
  reflectivity: 0,
  shininess: 0,
};

const Moon = ({  }) => {
  const sceneRef = useRef<Scene>(null);
  const moonRef = useRef<Mesh>(null);
  const cameraRef = useRef<PerspectiveCamera>(null);

  return (
    <Canvas style={{ width: "175px" ,height: "175px" }}>
      <scene ref={sceneRef}>
        <mesh ref={moonRef}>
          <sphereGeometry args={[3, 64, 64]} />
          <meshPhongMaterial {...materialAttributes} />
        </mesh>
        <directionalLight
          color={0xffffff}
          intensity={0.6}
          position={[-2, -1, 0]}
        />
      </scene>
      <perspectiveCamera ref={cameraRef} args={[75, 1000 / 700, 0.1, 1000]} />
    </Canvas>
  );
};

export default Moon;
