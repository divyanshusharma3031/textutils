import React,{useState} from "react";
import PropTypes from 'prop-types'
export default function TextForm(props) {
  const [text,setText]=useState("Enter Text Here");
  // text cant be updated like a normal variable in react.
  const handleOnChange=(event)=>{
    // console.log("Upper Case was Changed");
    setText(event.target.value);
  }
  const handleUpClick=()=>{
    
      // console.log("Upper Case was Clicked");
      props.showalert("Converted to upper Case","success")
      let newtext=text.toUpperCase();
      setText(newtext);
    // setText("You have clicked on upper text");

  }
  const RemoveExtra=()=>
  {
    let newText=text.split(/[ ]+/);
    props.showalert("Extra Spaces Removed","success")

    setText(newText.join(' '));
  }
  const handleUpClick2=()=>{

      // console.log("Upper Case was Clicked");
      let newtext=text.toLowerCase();
      props.showalert("Converted to Lower Case","success")

      setText(newtext);

    // setText("You have clicked on upper text");

  }
  const clearclick=()=>{
    setText('');
    props.showalert("Cleared","success")

  }
  const SmartConvert=()=>{
    props.showalert("Every Word's First Letter Capitalize","success")

    let newtext='';
    let array=text.split(" ");
    for (let index = 0; index < array.length; index++) {
      if(array[index][0]>='a' && array[index][0]<='z')
      {
          newtext+=array[index].charAt(0).toUpperCase();
          newtext+=array[index].substr(1);
          newtext+=" ";
      }
      else
      {
        newtext+=array[index];
        newtext+=" ";

      }
    }
    setText(newtext)
  }
  const NoOfWords=(array)=>
  {
    let x=0;
    for (let index = 0; index < array.length; index++) {
      if(array[index].length!==0)
      {
        x++;
      }
    }
    return x;
  }
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>
          {props.textarea} 
        </h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text} onChange={handleOnChange}
            rows="3"
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleUpClick2}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={SmartConvert}>Smart Convert</button>
        <button className="btn btn-primary mx-2" onClick={RemoveExtra}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={clearclick}>Clear Text</button>
      </div>
      <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        {/* my-2 will give 2 margin same goes for my-x gives x margin in y. */}
        <h1> Your Text Summary</h1>
        <p>
          {NoOfWords(text.split(" "))} words and {text.length} characters
        </p>
        <p>
          Expected time to read:{text.split(" ").length*0.008} Minutes
        </p>
      </div>
    </>
  );
}
TextForm.propTypes={
  textarea:PropTypes.string.isRequired
  //is required se ye field [title ] required field ho gayi it means that we have to pass a title for sure otherwise it will generate a warning
}