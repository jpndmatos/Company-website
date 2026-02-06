import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { TextureLoader } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

export default function ModelCapitel(props) {
  const { nodes } = useGLTF("/capitelmodel/Capitel_low.gltf");
  const textureLoader = new TextureLoader();
  const baseColorTexture = textureLoader.load(
    "/capitelmodel/Capitel_low_retro_Default OBJ_BaseColor.png"
  );
  const normalTexture = textureLoader.load(
    "/capitelmodel/Capitel_low_retro_Default OBJ_Normal.png"
  );
  const roughnessMetalnessTexture = textureLoader.load(
    "/capitelmodel/Capitel_low_retro_Default OBJ_Metallic-Capitel_low_retro_Default OBJ_Roughness.png"
  );
  const emissiveTexture = textureLoader.load(
    "/capitelmodel/Capitel_low_retro_Default OBJ_Emissive.png"
  );

  const meshRef = useRef();
  const { camera } = useThree();

  const lodLevels = [
    { distance: 0, model: nodes.Capitel_low_retro },
    { distance: 50, model: createLowDetailModel() },
    { distance: 100, model: createMediumDetailModel() },
  ];

  function getCurrentLODIndex(cameraPosition, lodLevels) {
    let currentLODIndex = 0;
    for (let i = 1; i < lodLevels.length; i++) {
      if (
        cameraPosition.distanceTo(lodLevels[i].distance) <
        cameraPosition.distanceTo(lodLevels[currentLODIndex].distance)
      ) {
        currentLODIndex = i;
      }
    }
    return currentLODIndex;
  }

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0;
      meshRef.current.rotation.y += 0.0;
      meshRef.current.rotation.z += 0.001;
    }
    const currentLODIndex = getCurrentLODIndex(camera.position, lodLevels);
    meshRef.current.geometry = lodLevels[currentLODIndex].model.geometry;
    meshRef.current.material = lodLevels[currentLODIndex].model.material;
  });

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/capitelmodel/Capitel_low.gltf",
      (gltf) => {
        meshRef.current.geometry = gltf.scene.children[0].geometry;
        meshRef.current.material = gltf.scene.children[0].material;
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("An error occurred while loading the model.", error);
      }
    );
  }, []);

  return (
    <mesh ref={meshRef} scale={22} translate={[0, 0, 0]} rotation={[96, 0, 4]}>
      <meshStandardMaterial
        map={baseColorTexture}
        normalMap={normalTexture}
        roughnessMap={roughnessMetalnessTexture}
        metalnessMap={roughnessMetalnessTexture}
        emissiveMap={emissiveTexture}
        emissiveIntensity={0}
        rotation={[96, 0, 4]}
        metalness={0.08}
        roughness={0.3}
      />
    </mesh>
  );
}

function createLowDetailModel() {
  // Create and return a low-detail model (replace with your own geometry)
  // Example: Create a cube
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  return { geometry, material };
}

function createMediumDetailModel() {
  // Create and return a medium-detail model (replace with your own geometry)
  // Example: Create a sphere
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  return { geometry, material };
}
