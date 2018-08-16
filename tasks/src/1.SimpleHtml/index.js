import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';

/**
 * 1. Поменяй текст заголовка с 'Этот заголовок уже из Реакта' на 'Доп. информация о пользователе'
 * 2. Поменяй пол по-умолчанию на женский
 * 3. Добавь еще одно текстовое поле для адреса
 * 4. Удали из index.html всю разметку, кроме блока с id=app
 */

class Form extends React.Component {
    render () {
        return (
            <div className='react'>
                <hr/>
                <h3>Этот заголовок уже из Реакта</h3>
                <label className='formRow'>
                    <span className='label'>Место рождения:</span>
                    <input
                        className='input'
                        defaultValue='Тагиииил'
                    />
                </label>
                <label className='formRow'>
                    <span className='label'>Город:</span>
                    <input
                        className='input'
                        defaultValue='Новосибирск'
                    />
                </label>
                <label className='formRow'>
                    <span className='label'>Пол:</span>
                    <label>Мужчина
                        <input
                            className='radio'
                            type='radio'
                            name='gender'
                            value='man'
                            defaultChecked
                        />
                    </label>
                    <label>Женщина
                        <input
                            className='radio'
                            type='radio'
                            name='gender'
                            value='woman'
                        />
                    </label>
                </label>
                <button type='button' className='button' onClick={() => alert('Saved')}>Сохранить</button>
                <hr/>
            </div>
        );
    }
}


ReactDom.render(
    <Form />,
    document.getElementById('app'),
);
