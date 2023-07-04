import { Component } from 'react';
import './Counter.scss'

type CounterType={
    count: number;
};

export class Counter extends Component<{}, CounterType>{
    state = {
        count: 0,
    }

    handleMinus=()=>{
        this.setState((prev)=>{
            return {count: prev.count-1}
        })
    }

    handlePlus=()=>{
        this.setState((prev)=>({count: prev.count+1}));
    }
    
    render(){
        const {count}=this.state;
        return(
        <div>
            <button className='btn-minus' onClick={this.handleMinus}>-</button>
            <span className='span-count'>{count}</span>
            <button className='btn-plus' onClick={this.handlePlus}>+</button>
        </div>
        )
    }

}