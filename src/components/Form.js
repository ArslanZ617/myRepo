
import React , {useState} from "react";

export default function Form(prop) {

    let [text, setText] = useState("");

    let changeCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    let resetValue = () => {
        setText("");
    }

    let targetValue = (event) => {
        setText(event.target.value);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

      const copyText = () => {
        // var text = document.getElementById("myTextForm");
        // text.select();
        // navigator.clipboard.writeText(text.value);

        navigator.clipboard.writeText(text);
      }

      let removeSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
      }

    return (
    <div style={{color: prop.mode==="dark"?"white":"black"}}>
      <div className="container my-3">
        <h3>{prop.name}</h3>
        <form action="">
          <div className="form-group my-3">
            <textarea className="form-control" placeholder="Start writing here..." style={{backgroundColor: prop.mode==="dark"?"#3f6e6e":"white", color: prop.mode==="dark"?"white":"black"}} value={text} onChange={targetValue} id="myTextForm" rows="5" />
          </div>
        </form>
        <button className="btn btn-primary" disabled={text.length===0} onClick={changeCase}>Upper Case</button>
        <button className="btn btn-primary mx-3" disabled={text.length===0} onClick={resetValue}>Reset Value</button>
        <button className="btn btn-success" disabled={text.length===0} onClick={speak} >Speak</button>
        <button className="btn btn-warning mx-3" disabled={text.length===0} onClick={copyText} >Copy Text</button>
        <button className="btn btn-danger" disabled={text.length===0} onClick={removeSpace} >Remove Extra Spaces</button>
      </div>

      <div className="container my-3">
        <h3>Your Text Summary...</h3>
        <p><b>{text.split(/\s+/).filter((e)=>{return e.length!=0}).length}</b> Words and <b>{text.length}</b> Characters.</p>
        <p>The entire paragraph will take about <b>{0.008 * text.split(" ").filter((e)=>{return e.length!=0}).length}</b> minutes to read.</p>

        <h2 className="my-4">Preview</h2>
        <p>"{text.length>0 ? text : "Enter something to preview"}"</p>
      </div>

    </div>
  );
}