import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState(""); // hooks
    // text = "new text"; // Wrong way to change the state
    // setText("new state"); // Right way to change the state

    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to upper case", "primary");
    }
    const handleLwClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lower case", "danger");
    }
    const handleClClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '));
        props.showAlert("Extra spaces cleared", "secondary");
    }
    const handleCopy = () => {
        //let text = document.getElementById('myBox');
        //text.select();
        navigator.clipboard.writeText(text);
        //document.getSelection().removeAllRanges();
        props.showAlert("Text copied", "warning");
    }

    const capitalize = () => {
        let standardArr = text.split(" ");
        let char = '';
        standardArr.forEach(e => {
            console.log(e);
            let standard = e.toLowerCase();
            standard = standard.charAt(0).toUpperCase() + standard.slice(1);
            char = standard + ' ' + char;
        });
        setText(char);
        props.showAlert("Text converted to standard case", "info");
    }

    // const handleLightTheme = () => {
    //     document.querySelector('body').style.backgroundColor = "white";
    //     document.querySelector('body').style.color = "black";
    // }
    // const handleDarkTheme = () => {
    //     document.querySelector('body').style.backgroundColor = "black";
    //     document.querySelector('body').style.color = "white";
    // }

    return (
        <>
            <div className="container" style={{ color: props.mode !== 'light' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div htmlFor="myBox" className="mb-3">
                    <textarea className="form-control" spellCheck='false'  value={text} style={{ backgroundColor: props.mode === 'dark' ? '#24274e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} disabled={text.length === 0}>Uppercase</button>
                <button className="btn btn-danger mx-2 my-2" onClick={handleLwClick} disabled={text.length === 0}>Lowercase</button>
                <button className="btn btn-success mx-2 my-2" onClick={handleClClick} disabled={text.length === 0}>Clear Text</button>
                <button className="btn btn-secondary mx-2 my-2" onClick={handleExtraSpaces} disabled={text.length === 0}>Clear Extra Space</button>
                <button className="btn btn-warning mx-2 my-2" onClick={handleCopy} disabled={text.length === 0}>Copy Text</button>
                <button className="btn btn-info mx-2 my-2" onClick={capitalize} disabled={text.length === 0}>Standard Text</button>
                {/* <button className="btn btn-light mx-2" onClick={handleLightTheme}>Light Theme</button>
        <button className="btn btn-dark mx-2" onClick={handleDarkTheme}>Dark Theme</button> */}
            </div>
            <div className="container" style={{ color: props.mode !== 'light' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
                {/* <p><b>{0.008 * (text.length > 0 ? text.split(" ").length : 0)}</b> Minutes read</p> */}
                <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'No text to preview.'}</p>
            </div>
        </>
    )
}

