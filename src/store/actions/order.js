import * as actionTypes from './actionTypes';
import instance from '../../axios';

export const purchaseBurgerSuccess = (id, orderData) => {
    return  {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return  {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData) => {

    return dispatch => {

        dispatch(purchaseBurgerStart());

        instance.post('/orders.json', orderData)
        .then(res => {
           dispatch(purchaseBurgerSuccess(res.data, orderData))
        })
        .catch(e => {
            dispatch(purchaseBurgerFail(e));
        });
    }
}