import React from 'react'

export default function Java(props) {
  document.title = 'TextUtils - Java';
  let overviewJava = <pre>{`Java is a high-level, object-oriented programming language developed by Sun Microsystems.`};
  </pre>
  let dataStructuresJava = `
  Java offers a rich set of data structures that are fundamental for storing, organizing, and manipulating data efficiently.`;
 
 let OOCInJAva = `Java is an object-oriented programming language.`;

 
 
 
  return (
    <>

      <div className={`Container bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} >
        <h1>Java</h1><h3>The global language</h3>
        <div className="accordion" id="accordionExample">
          <div className={`accordion-item bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'} my-4`}>
            <h2 className={`accordion-header my-1 bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}  `}>
              <button className={`accordion-button bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Overview
              </button>
            </h2>
            <div id="collapseOne" className={`accordion-collapse collapse show bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} data-bs-parent="#accordionExample">
              <div className={`accordion-body bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <strong>Java:</strong> {overviewJava}
              </div>
            </div>
          </div>
          <div className={`accordion-item bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <h2 className={`accordion-header my-1 bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
              <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                Java Data Structures
              </button>
            </h2>
            <div id="collapseTwo" className={`accordion-collapse collapse bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} data-bs-parent="#accordionExample">
              <div className={`accordion-body bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <strong>Data Structures</strong> {dataStructuresJava}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                Object Orientation in java
              </button>
            </h2>
            <div id="collapseThree" className={`accordion-collapse collapse bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} data-bs-parent="#accordionExample">
              <div className={`accordion-body bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} >
                {OOCInJAva}
              </div>
            </div>
          </div>
        </div>
        {/* <button className={`btn btn-${props.mode}`} onClick={toggleView}>{btnText}</button> */}
      </div>
    </>
  )
}
