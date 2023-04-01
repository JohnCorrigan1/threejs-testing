import dynamic from 'next/dynamic'
import { Vector3 } from 'three'

const Island = dynamic(() => import('@/components/canvas/Island'), { ssr: false })
const Ship = dynamic(() => import('@/components/canvas/Ship'), { ssr: false })
const Ocean = dynamic(() => import('@/components/canvas/Ocean'), { ssr: false })
const Oceans = dynamic(() => import('@/components/canvas/Oceans'), { ssr: false })
// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

// Dom components go here
export default function Page(props) {
  return (
   <>
    </>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => {
  /* const ocean = [new Vector3(0, 0, 0), new Vector3(-100, 0, 0)] */


    return (
      <>

        <Oceans count={3} />
        {/*
            <Ocean position={new Vector3(100, 0, 100)}/>
            <Ocean position={new Vector3(0, 0, 0)} /> */}
        <Island position={new Vector3(20, 2, 20)} />

        <Ship position={new Vector3(60, 2, 60)} />

      </>
    )
}


export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
