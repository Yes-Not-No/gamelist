import './downloads.scss';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { useSelector } from 'react-redux';

export default function Downloads() {
    const downloadsState = useSelector(state => state.downloadReducer)

    return (
        <div className="downloads">
            <button
                className='downloads__list-button'
                onClick={() => {
                    document.querySelector('.downloads-popup-wrapper').setAttribute('style', 'display: flex;')
                }}
                disabled={
                    downloadsState.length === 0 ? true : false
                }
            >
                <CloudDownloadIcon />
            </button>
            {downloadsState.length === 0 ? '' : <div className='downloads__counter'>{downloadsState.length}</div>}
        </div>
    )
}