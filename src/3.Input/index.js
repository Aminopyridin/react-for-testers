import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import Gapped from '@skbkontur/react-ui/Gapped';
import Input from '@skbkontur/react-ui/Input';
import Button from '@skbkontur/react-ui/Button';
import Modal from '@skbkontur/react-ui/Modal';

import './styles.css';

/**
 * Посмотри, как работает input: введенные данные постоянно сохраняются в стейте, и именно данные из стейта
 * показываются в инпуте. Если убрать вызов onChange, то любые действия в поле ничего не изменят. Данные из поля
 * ввода при изменении сообщают об этом родителю (компоненту App), и родитель пишет значение в консоль.
 *
 * 1. Добавь в state новое поле 'isModalOpen', в начале равное false
 * 2. Допиши метод 'onModalOpen', чтобы он менял значение поля isModalOpen на true
 * 3. Добавь атрибут onClick кнопке и передай в него метод onModalOpen
 * 4. Раскомментируй строчку с вызовом рендера модального окна
 * 5. Проверь, что модальное окно открывается после клика по кнопке
 * 6. Допиши функцию закрытия модального окна по аналогии с открытием окна
 */


class Form extends React.Component {
    constructor () {
        super();

        this.state = {
            value: 'Hi!'
        };
    }

    render () {
        return (
            <Gapped gap={20} vertical>
                <Input value={this.state.value} onChange={this.onChange} type="text"/>
                <Button>Сохранить</Button>
                {/*this.state.isModalOpen && this.renderModal() */}
            </Gapped>
        );
    }

    renderModal () {
        return (
            <Modal onClose={this.onModalClose} width={500}>
                <Modal.Header>Сохранение</Modal.Header>
                <Modal.Body>Данные успешно сохранены</Modal.Body>
                <Modal.Footer>
                    <Button use='primary' size='large' onClick={this.onModalClose}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    onChange = (_, value) => {
        this.setState({
            value: value,
        });

        this.props.onChange(value);
    };

    onModalOpen = () => {
        // write your code here
    };

    onModalClose = () => {
        // write your code here
    };
}

Form.propTypes = {
    onChange: PropTypes.func,
};

class App extends React.Component {
    render () {
        return (
            <Form onChange={this.onChange} />
        );
    }

    onChange = (value) => {
        console.log(value);
    };
}

ReactDom.render(
    <App />,
    document.getElementById('app'),
);
