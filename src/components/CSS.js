import React, { Component } from 'react';
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-solarized_dark";
import * as ace from "ace-builds"
import AceEditor from "react-ace";

class CssEditor extends Component{
    state={
        css:''
    }
    oncssChange=(css)=>{
        this.setState({css:css})
        this.props.oncssChange(css)

    }
    render(){
        ace.config.set('basePath', "https://unpkg.com/ace-builds@1.4.12/src-noconflict")
        return(
            <AceEditor
            mode="css"
             theme="solarized_dark"
             onChange={this.oncssChange}
             showPrintMargin={false}
             value={this.state.css}
             name="UNIQUE_ID_OF_DIV"
             editorProps={{ $blockScrolling: true }}
             style={{height:300,width:900,backgroundColor: "black"}}
             
         />
        )
    }
}
export default CssEditor;