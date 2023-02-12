import { colorData } from './colors.makeData'
import { styled } from '../stitches.config'

function ColorsComposition() {
  return (
    <div >
      {colorData.map(color => color.example)}
    </div>
  )
}

export default ColorsComposition