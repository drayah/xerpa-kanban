import Vue from 'vue'

/* a helper function to subclass a Vue component and mount
 * with given propsData
 * 
 * used for testing Vue components
 */
export default function getViewModel(Component, propsData) {
    const Ctor = Vue.extend(Component)
    const viewModel = new Ctor({propsData}).$mount()
    return viewModel
}