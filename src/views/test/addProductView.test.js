import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import AddProductView from '../AddProductView.vue'
import { createPinia, setActivePinia } from "pinia";


describe('Add Product View Page', () => {

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Renders the page', () => {
        const wrapper = mount(AddProductView)
        expect(wrapper).toBeTruthy()
    })

    it('Adds a new book to shop', () => {
        /*const wrapper = mount(AddProductView)
        wrapper.find('.form__submit').trigger('click')


        expect(createNewBook()).toHaveBeenCalled();*/
    })

    it('Check if read image is working'), () => {
        const wrapper = mount(AddProductView)
        wrapper.find('#images').trigger('change')

        expect(readImage(e)).toHaveBeenCalled()
    }

    it('Check if title changes when triggered', () => {
        const wrapper = mount(AddProductView)

        wrapper.find('#title').trigger('change')

        expect(wrapper.title).not.toBeNull();
    })


    it('Check if author changes when triggered', () => {
        const wrapper = mount(AddProductView)

        wrapper.find('#author').trigger('change')

        expect(wrapper.author).not.toBeNull();
    })
});