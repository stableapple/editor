import React, { Component } from 'react';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";
import * as ace from "ace-builds"
import AceEditor from "react-ace";

class JavascriptEditor extends Component{
    state={
        js:''
    }
    onjsChange=(js)=>{
        this.setState({js:js})
        this.props.onjsChange(js)

    }
    render(){
        ace.config.set('basePath', "https://unpkg.com/ace-builds@1.4.12/src-noconflict")
        return(
            <AceEditor
            mode="javascript"
             theme="solarized_dark"
             onChange={this.onjsChange}
             showPrintMargin={false}
             value={this.state.js}
             name="UNIQUE_ID_OF_DIV"
             editorProps={{ $blockScrolling: true }}
             style={{height:300,width:900,backgroundColor: "black"}}
             
         />
        )
    }
}
export default JavascriptEditor;