import React, {memo} from 'react'

 function Child({Learning}) {
    console.log('child component rendered!!!')
  return (
    <div>
      <h3>child component</h3>
    </div>
  )
}

export default memo(Child)
