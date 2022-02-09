import GameLabel from '../../components/gameLabel/gameLabel';
import './library.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setGameList } from '../../redux/actions';
import GameInterface from '../../components/gameInterface/gameInterface';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Input from '../../components/input/input';

export default function Library() {
    const gameListState = useSelector((state) => (state.gameListReducer));
    const choosenGameState = useSelector((state) => (state.setChoosenGameReducer));

    const dispatch = useDispatch()

    function searchHandler() {
        fetch('https://api.npoint.io/817eebf87e3033d5dc99')
            .then(res => res.json())
            .then((data) => {
                const input = document.querySelector('.searchInput');

                const sortedData = data.data.filter((element) => {
                    return element.name.toLowerCase().includes(input.value.toLowerCase())
                })

                dispatch(setGameList(sortedData))
            })
    }

    function azButtonHandler() {
        fetch('https://api.npoint.io/817eebf87e3033d5dc99')
            .then(res => res.json())
            .then((data) => {
                const sortedData = data.data.sort((a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1
                    }

                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return -1
                    }

                    return 0;
                })

                dispatch(setGameList(sortedData))
            })
    }

    function zaButtonHandler() {
        fetch('https://api.npoint.io/817eebf87e3033d5dc99')
            .then(res => res.json())
            .then((data) => {
                const sortedData = data.data.sort((a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1
                    }

                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return 1
                    }

                    return 0;
                })

                dispatch(setGameList(sortedData))
            })
    }

    return (
        <div className="page-contant-wrapper library">
            <div>
                <div className='library__buttons-wrapper'>
                    <button className='library__buttonOrderAZ' onClick={azButtonHandler}><ArrowDropUpIcon /></button>
                    <button className='library__buttonOrderZA' onClick={zaButtonHandler}><ArrowDropDownIcon /></button>
                </div>
                <Input onChange={searchHandler} />
                <ul className="library__game-list">
                    {
                        gameListState.gamelist.map((e) => {
                            return <GameLabel
                                key={e.name}
                                title={e.name}
                                icon={e.icon_url}
                                object={e}
                            />
                        })
                    }
                </ul>
            </div>
            {
                !choosenGameState.name ?
                    <GameInterface name='Выберите игру...' icon={false} button={false} /> :
                    <GameInterface name={choosenGameState.name} icon={choosenGameState.icon_url} button={true} />
            }


        </div>
    );
}