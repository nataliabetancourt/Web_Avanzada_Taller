import { mount } from "@vue/test-utils";
import { describe, expect, it, test } from "vitest";
import ShopView from '../ShopView.vue'
import { createPinia, setActivePinia } from "pinia";
import { useAuthenticationStore } from "../../stores/authentication";

describe("Shop view page", () => {

    /*vi.mock("../firebase/auth", () => ({ auth: "mock" }))

    vi.mock("../firebase/auth", () => {
        const signInWithEmailAndPassword = vitest.fn(() => Promise.resolve({ user: "1234" }));

        return {
            signInWithEmailAndPassword,
        };
    });*/

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Renders the page', () => {
        const wrapper = mount(ShopView)
        expect(wrapper).toBeTruthy()
    })

    it('Check that uid is undefined to begin with', () => {
        const wrapper = mount(ShopView)
        expect(wrapper.uid).toBeUndefined();
    })

    it('Check that admin is undefined to begin with', () => {
        const wrapper = mount(ShopView)
        expect(wrapper.admin).toBeUndefined();
    })

});