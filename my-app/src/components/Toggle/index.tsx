import { Component } from 'react';
import './Toggle.scss'

type ToggleType={
    isClicked: boolean,
}


export class Toggle extends Component<{},ToggleType>{
    constructor(props: any){
        super(props);
        this.state={
            isClicked: true,
        }
        // const {isClicked} = props;
    }
    
    handleToggle=()=>{
        this.setState(prev=>({isClicked: !prev.isClicked}))
    }

    render(){
        const {isClicked}=this.state
        return(
            <div>
                <button onClick={this.handleToggle}>{isClicked?'Włączone':'Wyłączone'}</button>
            </div>
        )
    }
}