import { useState, useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

type props = {
    count: number;
};

type ocean = {
    position: {x: number, z: number};
}

const Oceans: React.FC<props> = ({ count }) => {
    const model = useLoader(GLTFLoader, '/ocean.glb');
    const [oceans, setOceans] = useState([]);
    const goal: any = [[0, 1, 2], [3, 4, 5], [6, 7, 8,]]

useEffect(() => {
  const newOceans: ocean[] = [];
  const numSpirals = count;
  const spiralSize = 200;

  for (let i = 0; i < count * 10; i++) {
    const angle = i * 0.5;
    const radius = spiralSize * Math.sqrt(i / (numSpirals * 10 * Math.PI));
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);

    newOceans.push({
      position: {
        x,
        z,
      },
    });
  }

  setOceans(newOceans);
}, [count]);

    /* useEffect(() => {
     *     const newOceans: ocean[] = [];
     *     for (let i = 0; i < count * 10; i++) {
     *         newOceans.push({
     *             position: {
     *                 x: i % 10 * 100,
     *                 z: i % 10 * 100
     *             }
     *         });
     *     }
     *     console.log(newOceans);
     *     setOceans(newOceans);
     * }, [count]); */

    return (
        <group>
            {oceans.map((ocean, index) => (
                <object3D
                    key={index}
                    position={[ocean.position.x, 0, ocean.position.z]}
                    scale={[0.05, 0.05, 0.05]}
                >
                    <primitive object={model.scene.clone()} />
                </object3D>
            ))}
        </group>

   )

}

export default Oceans;
