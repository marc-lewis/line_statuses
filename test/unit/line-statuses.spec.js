// Import Vue and the component being tested
import Vue from 'vue';
import lineStatuses from '../../src/components/line-statuses/line-statuses.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
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

    // Mount an instance and inspect the render output
    it('renders the correct message', () => {

        const Constructor = Vue.extend(lineStatuses);
        const vm = new Constructor().$mount();

        expect(vm.$el.textContent).toBe('{%TFL_APPLICATION_ID%} {%TFL_APPLICATION_KEY%}');

    });

});