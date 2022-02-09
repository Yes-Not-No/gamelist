import './downloads.scss';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { useSelector } from 'react-redux';

export default function Downloads() {
    const downloadsState = useSelector(state => state.downloadReducer)

    return (
        <div className="downloads">
            <a
                href={downloadsState.length === 0 ? '#' :
                    'data:text/json; charset=utf-8,' + encodeURIComponent(JSON.stringify(downloadsState))
                }
                download='games.json'
            >
                <CloudDownloadIcon />
            </a>
            {downloadsState.length === 0 ? '' : <div className='downloads__counter'>{downloadsState.length}</div>}
        </div>
    )
}