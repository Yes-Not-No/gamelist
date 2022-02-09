import Downloads from '../downloads/downloads';
import Navigation from '../navigation/navigation';
import './header.scss';

export default function Header() {
    return (
        <div className='header-container header'>
            <Navigation />
            <Downloads />
        </div>
    );
}