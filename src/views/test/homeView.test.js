import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import HomeView from '../HomeView.vue'
import { createPinia, setActivePinia } from "pinia";


describe('Home View Page', () => {

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Renders the page', () => {
        const wrapper = mount(HomeView)
        expect(wrapper).toBeTruthy()
    })
});