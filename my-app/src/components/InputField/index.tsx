import { ChangeEvent, useState } from 'react';
import './InputField.scss'

export const InputField=()=>{
    const [sentence, setSentence]=useState("");

    const handleSentence=(event: ChangeEvent<HTMLInputElement>)=>{
        setSentence(event.target.value);
    }

    return(
        <div>
            <input className='input-field' type="text" placeholder="napisz coś" onChange={handleSentence} />
            <span className='input-sentence'>Zdanie: {sentence}</span>
        </div>
    )
}