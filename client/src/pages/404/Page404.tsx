import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.css'

type Page404Props={
}
const Page404= ({}: Page404Props): JSX.Element =>{
return (
    <div className="not-found-container">
      <div className="glitch" data-text="404">404</div>
      <p className="not-found-text">КОТИК, ТАКОЙ СТРАНИЧКИ НЕТ</p>
      <Link to="/" className="back-home-button">
        ВЕРНУТЬСЯ НА ГЛАВНУЮ
      </Link>
    </div>
 );

}
export default Page404
