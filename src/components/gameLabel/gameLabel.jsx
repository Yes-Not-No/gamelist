import './gameLabel.scss';
import { useDispatch } from 'react-redux';
import { setChoosenGame } from '../../redux/actions';

export default function GameLabel(props) {
    const dispatch = useDispatch()

    function clickHandler() {
        dispatch(setChoosenGame(props.object));
        document.querySelector('.context-menu-list').classList.add('context-menu-list--hidden');
    }

    return (
        <li className="game-label" onClick={clickHandler} >
            <img className='game-label__icon' src={props.icon} alt={props.title} />
            <span>{props.title}</span>
        </li>
    );
}