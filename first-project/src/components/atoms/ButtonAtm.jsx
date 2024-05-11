const ButtonAtm = ({btnName, onClickEvt}) => {
    return (
        <button onClick={onClickEvt}>{btnName}</button>
    )
}
export default ButtonAtm;