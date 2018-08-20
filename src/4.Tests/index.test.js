import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import { Page, Table, Row } from './components';

configure({ adapter: new Adapter() });

/**
 *  1. Сейчас два теста не работают. Почини их!
 *   - 'click with right argument' — этот тест написан правильно, проблема в компоненте
 *   - 'right amount of click' — тут ошибка в тесте
 *  2. Напиши тесты для таблицы.
 *   - С несколькими строчками
 *   - С одной строчкой
 *   - С нулем строчек
 */

describe('<Page>', () => {
    test('render Table', () => {
        const wrapper = shallow(<Page />);
        expect(wrapper.find(Table).length).toBe(1);
    });
    test('render Table with 3 rows', () => {
        const wrapper = mount(<Page />);
        expect(wrapper.find(Row).length).toBe(2);
    });
});

describe('<Row>', () => {
    test('render 4 cells', () => {
        const wrapper = shallow(<Row name='I' surname='b' date='2015-01-02' />);
        expect(wrapper.find('td').length).toBe(4);
    });
    test('click with right argument', () => {
        let mockOnClick = jest.fn();

        const wrapper = shallow(<Row name='I' surname='b' date='2015-01-02' onChange={mockOnClick} />);
        wrapper.find('button').simulate('click');
        expect(mockOnClick).toHaveBeenCalledWith('I', 'b', '2015-01-02');
    });
    test('right amount of click', () => {
        let mockOnClick = jest.fn();

        const wrapper = shallow(<Row name='I' surname='b' date='2015-01-02' onChange={mockOnClick} />);
        wrapper.find('button').simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(10);
    });
});
