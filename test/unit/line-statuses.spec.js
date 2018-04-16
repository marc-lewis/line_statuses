// Import Vue and the component being tested
import Vue from 'vue';
import axios from 'axios';
import moxios from 'moxios';
import sinon from 'sinon';
import MockData from '../mocks/tlf_api_response.js';


import lineStatuses from '../../src/components/line-statuses/line-statuses.vue';

// Here are some Jasmine 2.0 tests
describe('line-statuses', () => {

    // Inspect the raw component options
    it('has a created hook', () => {

        expect(typeof lineStatuses.data).toBe('function');

    });

    // Evaluate the results of functions in
    // the raw component options
    it('sets the correct default data', () => {

        expect(typeof lineStatuses.data).toBe('function');
        const defaultData = lineStatuses.data();

        expect(defaultData.TFL_APPLICATION_ID).toBe('{%TFL_APPLICATION_ID%}');
        expect(defaultData.TFL_APPLICATION_KEY).toBe('{%TFL_APPLICATION_KEY%}');

    });

    it('GETS line statuses from http://api.tfl.gov.uk/Line/Mode/Tube/Status', (done) => {

        moxios.install(); 

        moxios.stubRequest(/.*api\.tfl\.gov\.uk.*/, {

            status: 200,
            response: {

                data: MockData

            }

        });
        
        const VM = new Vue(lineStatuses);

        moxios.wait(() => {

            Vue.nextTick(() => {

                expect(VM.$data.lineStatuses.data.length).toBe(14);
                done();

            });

        });

    });

    // it displays the children when it has the array data

});