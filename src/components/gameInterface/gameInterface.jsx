import './gameInterface.scss';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ContextMenu from '../../components/contextMenu/contextMenu';
import { useSelector, useDispatch } from 'react-redux';
import { addGameToDownload } from '../../redux/actions';

export default function GameInterface(props) {
    const choosenGameState = useSelector((state) => (state.setChoosenGameReducer));
    const downloadsState = useSelector((state) => (state.downloadReducer));
    
    const dispatch = useDispatch();

    return (
        <div className="game-interface">
            <h1 className='game-interface__title'>{props.name}</h1>
            <img className='game-interface__image'
                src={props.icon ? props.icon : ''}
                alt={props.icon ? props.name : ''} />
            <div className='game-interface__buttons-wrapper'>
                <button
                    className='game-interface__add-button'
                    style={{
                        display: props.button === true ? 'flex' : 'none',
                    }}
                    onClick={() => {
                        const isAdded = downloadsState.some((e) => {
                            return e.name === choosenGameState.name
                        })

                        if (isAdded) {
                            return
                        } else { dispatch(addGameToDownload(choosenGameState)) }
                    }}
                >
                    <DownloadForOfflineOutlinedIcon />
                    <span>Добавить в загрузку</span>
                </button>
                <button
                    className='game-interface__context-menu-button'
                    onClick={() => {
                        document.querySelector('.context-menu-list').classList.toggle('context-menu-list--hidden');
                        window.addEventListener('click', (e) => {
                            // if(e.target.classList.value !== 'context-menu-item') {
                            //     document.querySelector('.context-menu-list').classList.add('context-menu-list--hidden');
                            // }
                        })
                    }}
                    style={{
                        display: props.button === true ? 'flex' : 'none',
                    }}
                >
                    <KeyboardArrowDownOutlinedIcon />
                </button>
                <ContextMenu elements={['Загрузить']} choosenGameState={choosenGameState} />
            </div>
        </div>
    )
}