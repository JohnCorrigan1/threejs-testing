import { useGLTF } from "@react-three/drei";
import { Object3DNode } from "react-three-fiber";
import { Vector3, Mesh } from "three";

interface MyObjectProps extends Object3DNode<Mesh, typeof Mesh>{
  position: Vector3;
}



export default function Ship(props: MyObjectProps){
    const { position, ...rest } = props;
    const gltf = useGLTF("/Sail Ship.glb");

    return (
        <mesh position={position} scale={[4, 4, 4]}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}
