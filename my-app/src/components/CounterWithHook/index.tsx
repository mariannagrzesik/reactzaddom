
import './CounterWithHook.scss'
import { useCounter } from './hooks/useCounter'

export const CounterWithHook = ()=>{
    const {count, handlePlus} = useCounter();

    return(
        <div>
            <button onClick={useCounter().handleMinus}>-1</button>
            <span>{count}</span>
            <button onClick={handlePlus}>+1</button>
        </div>
    )
}