import { removeFromDownload } from '../../redux/actions';
import { useDispatch } from 'react-redux';


export default function DownloadsPopUpItem(props) {
    const dispatch = useDispatch();

    return (
        <div className='downloads-popup__item'
            onClick={() => {
                dispatch(removeFromDownload(props.item))
            }}
        >
            <img src={props.item.icon_url} alt={props.item.name} />
            <p>{props.item.name}</p>
        </div>
    )
}