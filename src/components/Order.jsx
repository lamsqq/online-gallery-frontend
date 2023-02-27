import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../utilities/consts'

export const Order = () => {
  const form = useRef();

  const history = useNavigate()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zvr17eb', 'template_1moqa4w', form.current, 'qqoCBs3scURmfuGdD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='wrapper'>
        <div className='order'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Ваше имя</label>
                <input type="text" name="user_name" />
                <label>Ваша почта</label>
                <input type="email" name="user_email" />
                <label>Номер вашей карты</label>
                <input type="text" name="user_card" />
                <label>CVC</label>
                <input type="text" name="user_card" />
                <button type="submit" value="Send" onClick={history(HOME_ROUTE)}>Оформить</button>
            </form>
        </div>
    </div>
  );
};
