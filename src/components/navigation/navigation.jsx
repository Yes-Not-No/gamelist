import './navigation.scss';
import { Link } from 'react-router-dom';

const navigationItems = [
    {
        title: 'Главная',
        link: '/',
    },
    {
        title: 'Библиотека',
        link: '/library',
    }
]

export default function Navigation() {
    return (
        <ul className='navigation'>
            {
                navigationItems.map((item) => {
                    return (
                        <li  key={item.title} className='navigation-item'>
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}