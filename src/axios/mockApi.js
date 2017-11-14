import axios from './axios';
import mockAdapter from 'axios-mock-adapter';
let schoolRange = require('../server/schoolRange.json'); 
let schoolArea = require('../server/schoolArea.json');
let tableList = require('../server/tableList.json');
let overall = require('../server/general.json')
var mocker = new mockAdapter(axios);
mocker.onGet('/chooseExam/selectedConitions').reply(200, {
    msg: '',
    result: 12345,
    success: 'true',
    status: 1000
}) 
mocker.onGet('/src/server/schoolRange.json').reply(200, schoolRange);
mocker.onGet('/src/server/schoolArea.json').reply(200, schoolArea);
mocker.onGet('/src/server/tableList.json').reply(200, tableList);
mocker.onGet('/src/server/general.json').reply(200, overall);