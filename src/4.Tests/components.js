import PropTypes from 'prop-types';
import React from 'react';

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

export class Page extends React.Component {
    render () {
        return (
            <div>
                <h1>Список работников</h1>
                <Table list={users} />
            </div>
        );
    }
}

export class Table extends React.Component {
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

    onChange = (value) => {
        console.log(value);
    };
}

Table.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        surname: PropTypes.string,
        date: PropTypes.string,
    }))
};

export class Row extends React.Component {
    render () {
        const { name, surname, date } = this.props;

        return (
            <tr>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{date}</td>
                <td><button onClick={ this.onClick }>Изменить</button></td>
            </tr>
        );
    }

    onClick = () => {
        const { name, surname, date } = this.props;

        this.props.onChange(surname, name, date);
    };
}

Row.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    date: PropTypes.string,
    onChange: PropTypes.func,
};