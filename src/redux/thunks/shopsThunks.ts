import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../constants/constants';

const getStores = (baseUrl: string) => {
    return fetch(`${baseUrl}/api/shops/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => {
        if (!res.ok) {
            throw new Error('Ошибка');
        }
        return res.json()
        .then()
    });
};

export const fetchStores = createAsyncThunk('stores/fetchStores', async () => {
    const baseUrl = BASE_URL;
    return await getStores(baseUrl);
});




