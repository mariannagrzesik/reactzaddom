import './List.scss'

type ListProps={
    header: string,
    list: string[]
}

export const List=({list, header}: ListProps)=>{
    return(
        <div>
            <h2>{header}</h2>
            <ul className='ul-list'>
                {list.map((item, index)=><li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}