import React from 'react'
import { Html, useProgress } from '@react-three/drei'

// Loader component shows the progress of the load of the modal as a %
const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className='canvas-loader'>

      </span>

      {/* Show the progress of the load of the modal. Render progress to 2 decimals */}
      <p
        style={{ 
          color: '#f1f1f1',
          fontSize: 14, 
          fontWeight: 800,
          marginTop: 40
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader