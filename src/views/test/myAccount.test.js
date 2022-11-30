import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it, test } from "vitest";
import MyAccount from '../MyAccount.vue'
import { createTestingPinia } from '@pinia/testing'


test('Renders the page', () => {
    const wrapper = mount(MyAccount, {
        global: {
            plugins: [createTestingPinia()],
        },
    });

    expect(wrapper).toBeTruthy();
})

test('Make sure sign up button does not show when rendered', () => {
    const wrapper = mount(MyAccount, {
        data() {
            return {
                isSignIn: true,
                isSignUp: false,
                userIsLogged: false,
            }
        }
    })

    const signUp = wrapper.find('#signUpBtn');

    expect(signUp.exists()).toBeFalsy()
});

test('Make sure sign in button does not show when sign up is true', () => {
    const wrapper = mount(MyAccount, {
        data() {
            return {
                isSignIn: false,
                isSignUp: true,
                userIsLogged: false,
            }
        }
    })

    const signIn = wrapper.find('#signInBtn');

    expect(signIn.exists()).toBeFalsy()
});

