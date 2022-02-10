import { useSelector } from 'react-redux';
import './downloadsPopUp.scss';
import DownloadsPopUpItem from './downloadsPopUpItem';

export default function DownloadsPopUp() {
    const downloadsState = useSelector(state => state.downloadReducer);

    return (
        <div className='downloads-popup-wrapper'
            onClick={(e) => {
                if (e.target.classList.value === 'downloads-popup-wrapper') {
                    document.querySelector('.downloads-popup-wrapper').setAttribute('style', 'display: none;')
                }
            }}
        >
            <div className='downloads-popup'>
                {
                    downloadsState.map((element) => {
                        return (
                            <DownloadsPopUpItem item={element} />
                        )
                    })
                }
            </div>
            <a
                className='downloads-popup__download-button'
                href={downloadsState.length === 0 ? '#' :
                    'data:text/json; charset=utf-8,' + encodeURIComponent(JSON.stringify(downloadsState))
                }
                download='games.json'
            >
                Download
            </a>
        </div>
    )
}