import React, { Component } from 'react';
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-solarized_dark";
import * as ace from "ace-builds"
import AceEditor from "react-ace";

class HtmlEditor extends Component{
    state={
        html:''
    }
    onhtmlChange=(html)=>{
        this.setState({html:html})
        this.props.onhtmlChange(html)

    }
    render(){
        ace.config.set('basePath', "https://unpkg.com/ace-builds@1.4.12/src-noconflict")
        return(
            <AceEditor
            mode="html"
             theme="solarized_dark"
             onChange={this.onhtmlChange}
             showPrintMargin={false}
             value={this.state.html}
             name="UNIQUE_ID_OF_DIV"
             editorProps={{ $blockScrolling: true }}
             style={{height:300,width:900,backgroundColor: "black"}}
             
         />
        )
    }
}
export default HtmlEditor;