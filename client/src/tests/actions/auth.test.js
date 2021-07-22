import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import { startLogin, startRegister, startChecking } from '../../actions/auth';
import { types } from '../../types/types';
import * as fetchModule from '../../helpers/fetch';



const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {};
let store = mockStore( initState );

Storage.prototype.setItem = jest.fn();

let token ='';

describe('Pruebas en las acciones Auth', () => {

    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });


    test('startLogin correcto', async () => {

        await store.dispatch(startLogin('isaac@ghotmail.com', '79054773'));

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                id: expect.any(Number),
                name: expect.any(String)
            }
        })

        expect(localStorage.setItem).toHaveBeenCalledWith('token', expect.any(String));
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-date', expect.any(Number));

        token = localStorage.setItem.mock.calls[0][1];
        // console.log(localStorage.setItem.mock.calls[0][1])

    });


    test('startLogin incorrecto', async () => {

        await store.dispatch(startLogin('isaac@ghotmail.com', '123456789'));
        let actions = store.getActions();
        expect(actions).toEqual([]);

    });


});