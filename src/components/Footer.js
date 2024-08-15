import React from 'react'

export default function Footer(props) {
  return (
    <>
        <div className={`card text-center bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`}>
  <div className={`card-header bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`}>
    Featured
  </div>
  <div className={`card-body bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`}>
    <h5 className={`card-title bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`}>Text Utils</h5>
    <p className={`card-text bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`}>Supporting you to write</p>
    <a href="https://www.wikipedia.org/ " className="btn btn-primary">Wickipedia</a>
  </div>
  <div className={`card-footer text-body-secondary bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`} >
    3 days ago
  </div>
</div>
    </>
  )
}
