import { mount } from "@vue/test-utils";
import { describe, expect, it, test, vi } from "vitest";
import Stars from '../Stars.vue'
import { createPinia, setActivePinia } from "pinia";

describe("Stars rating section", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("Check that the star image starts off undefined", () => {
        const wrapper = mount(Stars)

        expect(wrapper.starImg).toBeUndefined();
    })
});