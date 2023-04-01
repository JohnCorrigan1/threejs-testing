import { useGLTF } from "@react-three/drei";

import { Object3DNode, useFrame } from 'react-three-fiber';
import { Vector3, Mesh } from 'three';

interface MyObjectProps extends Object3DNode<Mesh, typeof Mesh> {
  position: Vector3;
}


export default function Ocean(props: MyObjectProps){
    const { position, ...rest } = props;
    const gltf = useGLTF("/ocean.glb")

    return (
        <instancedMesh count={10} position={[Math.random() * 100, Math.random() * 100,Math.random() * 100]} scale={[0.05, 0.05, 0.05]}>
        <primitive object={gltf.scene}/>
        </instancedMesh>
    )
    /* return (
     *     <instancedMesh count={10} {...rest}  position={position} scale={[0.05, 0.05, 0.05]}>
     *         <primitive object={gltf.scene} />
     *     </instancedMesh>
     * ) */
}
