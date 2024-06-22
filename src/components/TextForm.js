import React, { useState } from 'react';


export default function TextForm(props) {
    document.title = 'TextUtils - Home';
    const handleUpClick = () => {
        console.log("Upper Button was clicked");
        let inp = text;
        let inp1 = inp.toUpperCase();
        props.showAlert('Converted to Uppercase','success');
        setText(inp1);
    }
    const handleLowClick = () => {
        console.log("Lower Button was clicked");
        let inp = text;
        let inp1 = inp.toLowerCase();
        props.showAlert('Converted to Lowercase','success');
        setText(inp1);
    }
    const handleChange = (event) => {
        console.log("Onchange");
        setText(event.target.value)
    }
    const clearText = () =>{
        setText("");
        console.log("TextArea cleared");
        props.showAlert('Textarea cleared','danger');
    }
    const [text, setText] = useState("");
    // text = "Text 2"; wrong way
    // setText("Text 1");right way
    let t = 0.008 * text.length
    let timeRead = parseFloat(t).toFixed(4);
    let leng = 0;
    if (text === '' ) {
        leng = 0
    }else if(text.endsWith(" ")){
        leng = text.split(' ').length-1 ;
    }else{
        leng = text.split(' ').length ;
    }
       
    return (
        <>
            <h4>{props.heading}</h4>
            <div className={`container c`}>
                <div className={`mb-3 bg-${props.mode}text-${props.mode === 'dark'?'light':'dark'}`}>
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`} value={text} onChange={handleChange} id="myBox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    Convert to upper case
                </button>
                <button className="btn btn-secondary mx-2" onClick={handleLowClick}>
                    Convert to lower case
                </button>
                <button className="btn btn-outline-danger mx-2" onClick={clearText}>
                    Clear Text
                </button>
            </div>
            <div className="container my-3">
                <h2>Text Summary</h2>
                
                <p>Your text has {leng} words </p>
                <p>Your text has {text.length} characters</p>
                <p>{timeRead} nimutes read</p>
                {/* <p>{0.008* text.split(" ").length} minutes Read</p> */}
            </div>
            <div className="container my-3">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>


        </>
    )
}
