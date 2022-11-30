import { mount } from "@vue/test-utils";
import { describe, expect, it, test } from "vitest";
import CartView from '../CartView.vue'
import { createPinia, setActivePinia } from "pinia";
import { useAuthenticationStore } from "../../stores/authentication";
import { createTestingPinia } from '@pinia/testing'

test('Renders the page', () => {

    /*const wrapper = mount(CartView, {
        global: {
          plugins: [createTestingPinia({
            initialState: {
                getUser: { uid: '1234'},
                uid: '1234'
            }
          })],
        },
      })

    const authentication = useAuthenticationStore();

    expect(wrapper).toBeTruthy()*/
})