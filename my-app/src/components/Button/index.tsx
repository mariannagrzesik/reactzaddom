import './Button.scss'

export const Button = () => {
    
    const handleClick = () =>
        alert('Przycisk został kliknięty!');
    
        return(
            <button className="btn-click" onClick={handleClick}>
                Kliknij mnie!
            </button>
    );
};