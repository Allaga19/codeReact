import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';
// import { App } from './components';

// карточка товара
const Product = ({ photo, header, price, description, click }) => (
   <div className="product" onClick={click}>
      <img className="product__photo" src={photo} alt=""/>
      <div className="product__information">
         <h2 className="product__header">{header}</h2>
         <div className="product__price">Цена: {price} рублей</div>
         <div className="product__description">{description}</div>
      </div>
   </div>
)
Product.propTypes = {
   photo: PropTypes.string,
   header: PropTypes.string,
   price: PropTypes.number,
   description: PropTypes.string,
   click: PropTypes.func
}
Product.defaultProps = {
   photo: '/img/0.jpg',
   header: 'Неизвестный продукт',
   price: '0',
   description: '...',
   click: () => alert('Неизвестный продукт')
}
// const Hello = ({name, children}) => (
//    <div>
//       Hello, {name}!
//       {children}
//    </div>
// )

// Hello.propTypes = {
//    name: PropTypes.string.isRequired
// }
// // значение по умолчанию
// Hello.defaultProps = {
//    name: 'no name'
// }

const app = (
   <Fragment>
      <Product/>
      <Product
         photo="/img/3.jpg"
         header="Кросовки"
         price={1000}
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
         click={()=> alert('Кросовки')}
      />
       <Product
         photo="/img/1.jpg"
         header="Фотоаппарат"
         price={4000}
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
         click={()=> alert('Фотоаппарат')}
      />
       <Product
         photo="/img/2.jpg"
         header="Наушники"
         price={2000}
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
         click={()=> alert('Наушники')}
      />
       <Product
         photo="/img/4.jpg"
         header="Часы"
         price={3000}
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
         click={()=> alert('Часы')}
      />
   </Fragment>
)

ReactDOM.render(app, document.getElementById('root'))
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
