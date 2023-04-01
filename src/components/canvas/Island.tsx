import { useGLTF } from "@react-three/drei"
import { Object3DNode } from "@react-three/fiber"
import { Vector3, Mesh } from "three"

interface MyObjectProps extends Object3DNode<Mesh, typeof Mesh> {
  position: Vector3;
}



export default function Island(props: MyObjectProps){
    const gltf = useGLTF("/island.glb")
    const { position, ...rest } = props
     return(
         <mesh position={[0, 2, 0]} scale={[0.4, 0.4, 0.4]}>
         <primitive args={[50, 50]} object={gltf.scene}/>
         </mesh>
     )
}
