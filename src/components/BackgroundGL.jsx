import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Dust() {
  const ref = useRef()
  const particlesCount = 800;
  
  // Fixed positions array once
  const positions = useRef(new Float32Array(particlesCount * 3)).current
  
  if (positions[0] === 0) { // initialize once
    for(let i=0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15 // Spread across -7.5 to 7.5
    }
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.05
      ref.current.rotation.y -= delta * 0.03
    }
  })
  
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        color="#c2884a" 
        sizeAttenuation={true} 
        transparent={true} 
        opacity={0.3} 
      />
    </points>
  )
}

export default function BackgroundGL() {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -10, 
      pointerEvents: 'none' 
    }}>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Dust />
      </Canvas>
    </div>
  )
}
