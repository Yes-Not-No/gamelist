import './input.scss';

export default function Input(props) {
    return (
        <input className="searchInput" type="text" onChange={props.onChange} placeholder='Поиск' />
    )
}