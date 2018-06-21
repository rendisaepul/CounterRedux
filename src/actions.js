import { INCREMENT, DECREMENT, TOGGLE_COLOR } from './constants';

export function increment() {
    return {
        type: INCREMENT
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}

export function toggleColor(status) {
    return {
        type: TOGGLE_COLOR,
        status
    };
}