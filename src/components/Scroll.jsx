import React, { useRef } from 'react'

const Scroll = () => {
    const scrollRef = useRef(null);
    const scroll = () => {
        scrollRef.current.scrollIntoView();
    }
  return (
    <div>
        <div ref={scrollRef} style={{height: "150vh"}}>
            <h1>This is scroll into view example</h1>
        </div>
        <button onClick={scroll}>Scroll to div</button>
    </div>
  )
}

export default Scroll