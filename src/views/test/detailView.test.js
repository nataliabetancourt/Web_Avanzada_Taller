import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it, test } from "vitest";
import DetailView from '../DetailView.vue'
import { createTestingPinia } from '@pinia/testing'
import { useFirestoreStore } from "../../stores/firestore";


test('Renders the page', () => {
    const mockRoute = {
        params: {
          id: 'bookId'
        }
      }

    /*const wrapper = mount(DetailView, {
        global: {
            plugins: [createTestingPinia()],
            mocks: {
                $route: mockRoute,
            },
        },
    });*/
})

test('Check if current book is null', () => {
   /* const mockRoute = {
        params: {
          id: 'bookId'
        }
      }

    const wrapper = mount(DetailView, {
        global: {
            plugins: [createTestingPinia()],
            mocks: {
                $route: mockRoute,
            },
        },

        data() {
            return {
                currentBook: {},
                rating: null,
                userRating: null,
                comments: [],
                dollar: Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }),
            }
        }
    });

    expect(wrapper.currentBook).toBeNull();*/
});