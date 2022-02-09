import './contextMenu.scss';

export default function ContextMenu(props) {
    return (
        <ul className='context-menu-list context-menu-list--hidden'>
            {
                props.elements.map((element) => {
                    if (element === 'Загрузить') {
                        return <li key={element} className='context-menu-item'>
                            <a
                                href={'data:text/json; charset=utf-8,' + encodeURIComponent(JSON.stringify(props.choosenGameState))}
                                download={props.choosenGameState.name + '.json'}>
                                {element}
                            </a>
                        </li>
                    }
                    return <li key={element} className='context-menu-item'>{element}</li>
                })
            }
        </ul>
    );
}