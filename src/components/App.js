
import React, { Component , useEffect} from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";
import * as ace from "ace-builds"
import './App.css'


class App extends Component {
  
    state={html:'',css:'',js:'',newValue:'',editor:'',fileDownloadUrl:null,annotations:[]}
    fileNames = {
    	html: "index.html",
      styles: "styles.css",
      text: "states.txt"
    }    

  
  
    onhtmlChange=(html)=>{
        this.setState({html:html})
        
        
      }
      oncssChange=(css)=>{
        this.setState({css:css})
        
      }
      onjsChange=(js)=>{
        this.setState({js:js})
        
      }
      
      
    componentDidUpdate=()=>{
        this.runCode();
    }
    download= () => {
      let output;
      // Prepare the file
      
        
          // Prepare data:
          output = '';
          
            output += `${this.state.html}\n`
      
      
        
        // Download it
        const blob = new Blob([output]);
        const fileDownloadUrl = URL.createObjectURL(blob);
        this.setState ({fileDownloadUrl: fileDownloadUrl}, 
          ()=>{
            this.dofileDownload.click() 
            URL.revokeObjectURL(fileDownloadUrl);  // free up storage--no longer needed.
            this.setState({fileDownloadUrl: ""})
          })

        }
    
    runCode=() => {
        const { html, css, js } = this.state;
    
        const iframe = this.refs.iframe;
        const document = iframe.contentDocument;
        const documentContents = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <style>
              ${css}
            </style>
          </head>
          <body>
            ${html}
    
            <script type="text/javascript">
              ${js}
            </script>
          </body>
          </html>
        `;
    
        document.open();
        document.write(documentContents);
        document.close();
      };
    
    render() {
      ace.config.set('basePath', "https://unpkg.com/ace-builds@1.4.12/src-noconflict")
        const { html, js, css } = this.state;
        return(
        <div>
              <div className="editor">
              <div className="editor-header">HTML</div>
              <button onClick={this.download}>
                Download the file!
              </button>
              <a style={{display: "none"}}
              download="state.txt"
              href={this.state.fileDownloadUrl}
              ref={e=>this.dofileDownload = e}
              >download it</a>
            <AceEditor
               mode="html"
                theme="solarized_dark"
                onChange={this.onhtmlChange}
                showPrintMargin={false}
                value={html}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                style={{height:300,width:900,backgroundColor: "black"}}
                
            />
 
          <div className="editor-header">CSS</div>
           <AceEditor
               mode="css"
                theme="solarized_dark"
                onChange={this.oncssChange}
                showPrintMargin={false}
                value={css}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                  useWorker:true
                }}
                style={{height:300,width:900,backgroundColor: "black"}}
                
            />
            <div className="editor-header">Javascript</div>
              <AceEditor
               mode="javascript"
                theme="solarized_dark"
                onChange={this.onjsChange}
                showPrintMargin={false}
                value={js}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                  useWorker:true
                }}
                style={{height:300,width:900,backgroundColor: "black"}}
                
            />
            <iframe title="result" class="iframe" ref="iframe" />
          </div>
 
     
            
            </div>
        )
    }
}
export default App;