import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Enter Text Here");

    const handleOnchange = (event) => {
        setText(event.target.value);
    }

    const convertUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const convertLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    return (
        <>
            <div className="container ">
                <h2>{props.heading}</h2>
                <div className="my-3">
                    <textarea className="form-control" placeholder='Enter Text Here'
                        onChange={handleOnchange} value={text} id="myBox" rows="10" >
                    </textarea>
                </div>
                <div className="container">
                    <button className="btn btn-outline-success m-2" onClick={convertUpper}>Convert to UpperCase</button>
                    <button className="btn btn-outline-dark m-2" onClick={convertLower}>Convert to LowerCase</button>
                    {/* <button className="btn btn-outline-success m-2" onClick={convertLower}>Convert to LowerCase</button>
                    <button className="btn btn-outline-danger m-2" onClick={convertLower}>Convert to LowerCase</button> */}
                </div>

            </div>
            <div className="container my-4">
                <h2>Your Text Summary</h2>
                <h6 style={{ color: 'red'}}>{text.split(" ").length} Words {text.length} Characters</h6>
                <h6 style={{ color: 'green'}}>{0.004 * text.split(" ").length} Minutes to read.</h6>
                <br />
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>

    )
}
