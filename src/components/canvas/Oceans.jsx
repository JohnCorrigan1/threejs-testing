import { useState, useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useGLTF, Instances, Instance } from '@react-three/drei'

type props = {
    count: number;
};

type ocean = {
    position: {x: number, z: number};
}

const Oceans: React.FC<props> = ({ count }) => {
    const model = useGLTF('/ocean.glb');
    const [oceans, setOceans] = useState([]);

    useEffect(() => {
        const newOceans: ocean[] = [];
        for (let i = 0; i < count; i++) {
            newOceans.push({
                position: {
                    x: i * 100,
                    z: i * 100
                }
            });
        }
        console.log(newOceans);
        setOceans(newOceans);
    }, [count]);

    return (
        /* <group rotation={[0, 4, 0]}> */
        /* <instancedMesh args={[nodes, materials, count]} /> */
        <Instances
        limit={100}
        range={100}>
        <mesh>
        <primitive object={model.scene}/>
        </mesh>
<Instance position={[1, 2, 3]}/>
        </Instances>
        /* <group>
         * {oceans.map((ocean, index) => (
         *     <object3D key={index} position={[ocean.position.x, 0, ocean.position.z]} scale={[0.1, 0.1, 0.1]}>
         *     <primitive object={model.scene} />
         *     </object3D>
         * ))}
         * {/* </group> */
    )

}

export default Oceans;
