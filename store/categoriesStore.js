import axios from 'axios';
import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore({
  id: 'categoryStore',
  state: () => {
    return {
      categories: [],
      flattenCategories: [],
      headerCategories: [],
    };
  },
  actions: {
    async fetch() {
      const { data } = await axios.get(
        'https://dev.api.logicpower.ua/user/catalog/category/list/tree',
      );

      console.log(`Categories fetched. Total item(s): ${data.data.length}`);

      this.categories = data.data;
      this.flattenCategories = categoryFlatten(data.data);
      this.headerCategories = categoryHeader(data.data);
    },
  },
  getters: {
    getCategories: (state) => state.categories,
    getCategoryBySlug: (state) => {
      return (slug) =>
        state.flattenCategories.find((category) => category.slug === slug);
    },
    getFlattenCategories: (state) => state.flattenCategories,
    getHeaderCategories: (state) => state.headerCategories,
  },
});
