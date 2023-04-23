import { Ring } from '@uiball/loaders'

import React from 'react'

export default function Loader() {
  return (
    <Ring 
    size={40}
    lineWeight={5}
    speed={2} 
    color="black" 
    />
  )
}