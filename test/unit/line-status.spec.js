import Vue from 'vue';
import LineStatus from '../../src/components/line-status/line-status.vue';

// Here are some Jasmine 2.0 tests
describe('line-status', () => {

    let vm;

    beforeEach(() => {

        const Constructor = Vue.extend(LineStatus)
        vm = new Constructor({ propsData: {

            name: 'Bakerloo',
            status: 'good service',
            id: 'bakerloo',
            index: 3
            
        }}).$mount()

    });

    afterEach(() => {

        vm.$destroy();

    });

    it('sets the name', () => {

        expect(vm.$props.name).toBe('Bakerloo');

    });

    it('displays the correct name', () => {

        expect(vm.$el.querySelector('.line-status__name').textContent).toBe('Bakerloo');

    });

    it('sets the status of the line', () => {

        expect(vm.$props.status).toBe('good service');

    });

    it('displays the service of the line', () => {

        expect(vm.$el.querySelector('.line-status__service-status').textContent).toBe('good service');

    });

    it('sets the correct class modifier', () => {

        expect(vm.$el.classList.contains('line-status--bakerloo')).toBe(true);

    });

    it('sets the correct tab index', () => {

        expect(vm.$el.getAttribute('tabindex')).toBe('4');

    })

});