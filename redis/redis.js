import {client} from './client.js';

async function getFromRedis(cacheKey) {
    try {
        const getRedisTime = Date.now();
        const data =  await client.get(cacheKey);
        const getRedisTimeEnd = Date.now();
        const parseTime = Date.now();
        const pasedData = JSON.parse(data);
        const parseTimeEnd = Date.now();
        return {
            data: pasedData.length,
            getRedisTime: getRedisTimeEnd - getRedisTime,
            parseTime: parseTimeEnd - parseTime
        }
    } catch (error) {
        console.log('🚀 ~ getFromRedis ~ error:', error);
        return null;
    }
}


async function setToRedis(cacheKey, value, expiration = 20) {
    try {
        const parseTime = Date.now();
        const data = JSON.stringify(value)
        const parseTimeEnd = Date.now();
        const setRedisTime = Date.now();
        const ins = await client.set(cacheKey, data, 'EX', expiration)
        const setRedisTimeEnd = Date.now();
        return {
            setRedisTime: setRedisTimeEnd - setRedisTime,
            parseTime: parseTimeEnd - parseTime,
            data: data.length
        }
    } catch (error) {
        console.log('🚀 ~ setToRedis ~ error:', error)
    }
}

export { getFromRedis, setToRedis }