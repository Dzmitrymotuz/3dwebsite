import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useFrame } from '@react-three/fiber'


const Bird = () => {
    const {scene, animations} = useGLTF(birdScene)
    const ref = useRef()
    const {actions} = useAnimations(animations, ref)

    useEffect(()=>{
        actions['Take 001'].play()
    }, [actions])

    useFrame(()=>{
        const speed = 0.1
        const currentPosition = ref.current.position;
        const time = window.performance.now() * 0.001;//counts time
        const newX = Math.sin(time * speed) * 7; // Adjust the range and speed as needed
        const newY = Math.cos(time * speed) + 2; // Adjust the range and speed as needed
        const newZ = Math.sin(time * speed) - 3;

        currentPosition.set(newX, newY, newZ);

        })

  return (
    <mesh ref={ref} position={[3, 2,-3]} scale={[0.003, 0.003, 0.003]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird
