import { mount } from "@vue/test-utils";
import { describe, expect, it, test, vi } from "vitest";
import HomeBookFav from '../HomeBookFav.vue'
import { createPinia, setActivePinia } from "pinia";

describe("Home book favorites section", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("Check if the button that changes whats showing works", () => {
        const wrapper = mount(HomeBookFav)

        wrapper.find('#favorites').trigger('click');

        expect(wrapper.showInfo).not.toBeNull();
    })
});