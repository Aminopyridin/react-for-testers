import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * 1. Создай еще одну строку в таблице (данные для нее придумай сам)
 * 2. Добавь после таблицы новый заголовок "Список детей"
 * 3. Создай таблицу такую же как с users, только из массива children
 */

const users = [
    {
        name: 'Петр',
        surname: 'Васильев',
        date: '12.05.1991',
    },
    {
        name: 'Мария',
        surname: 'Васильева',
        date: '23.10.1995',
    },
];

const children = [
    {
        name: 'Арина',
        surname: 'Васильева',
        date: '13.02.2015',
    },
    {
        name: 'Валерий',
        surname: 'Васильев',
        date: '05.12.2012',
    }
];

class Page extends React.Component {
    render () {
        return (
            <div>
                <h1>Список работников</h1>
                <Table list={users} />
            </div>
        );
    }
}

class Table extends React.Component {
    render () {
        return (
            <table className='table'>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Дата рождения</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.list.map(item =>
                        <Row name={item.name} surname={item.surname} date={item.date} key={item.name + item.surname} />
                    )}
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        surname: PropTypes.string,
        date: PropTypes.string,
    }))
};

class Row extends React.Component {
    render () {
        const { name, surname, date } = this.props;

        return (
            <tr>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{date}</td>
            </tr>
        );
    }
}

Row.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    date: PropTypes.string,
};

ReactDom.render(
    <Page />,
    document.getElementById('app'),
);
