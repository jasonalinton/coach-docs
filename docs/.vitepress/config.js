import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Coach',
  description: 'Documentation for the Coach app',

  themeConfig: {
    nav: [
      { text: 'Front-End', link: '/front-end/' },
      { text: 'Back-End', link: '/back-end/' },
      { text: 'Database', link: '/database/' },
    ],

    sidebar: {
      '/front-end/': [
        {
          text: 'Front-End',
          items: [
            { text: 'Overview', link: '/front-end/' },
          ]
        },
        {
          text: 'Architecture',
          items: [
            { text: 'Overview', link: '/front-end/architecture/' },
            { text: 'Component Tree', link: '/front-end/architecture/component-tree' },
            { text: 'Model Storage', link: '/front-end/architecture/model-storage' },
            { text: 'Navigation', link: '/front-end/architecture/navigation' },
            { text: 'API Requests', link: '/front-end/architecture/api-requests' },
            { text: 'Polling', link: '/front-end/architecture/polling' },
          ]
        },
        {
          text: 'Domains',
          items: [
            { text: 'Overview', link: '/front-end/domains/' },
            { text: 'Planner', link: '/front-end/domains/planner/' },
            { text: 'Metrics', link: '/front-end/domains/metrics/' },
            { text: 'Goals', link: '/front-end/domains/goals/' },
          ]
        },
        {
          text: 'Features',
          items: [
            { text: 'Overview', link: '/front-end/features/' },
            { text: 'Daily Planner', link: '/front-end/features/daily-planner' },
            { text: 'Goals', link: '/front-end/features/goals' },
            { text: 'Battery', link: '/front-end/features/battery' },
          ]
        },
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/front-end/components/' },
            { text: 'Planner', link: '/front-end/components/planner' },
            { text: 'Todo Item Panel', link: '/front-end/components/todo-item-panel' },
          ]
        },
      ],

      '/back-end/': [
        {
          text: 'Back-End',
          items: [
            { text: 'Overview', link: '/back-end/' },
          ]
        },
        {
          text: 'Architecture',
          items: [
            { text: 'Overview', link: '/back-end/architecture/' },
          ]
        },
        {
          text: 'Controllers',
          items: [
            { text: 'Overview', link: '/back-end/controllers/' },
          ]
        },
        {
          text: 'Services',
          items: [
            { text: 'Overview', link: '/back-end/services/' },
          ]
        },
        {
          text: 'Data Access',
          items: [
            { text: 'Overview', link: '/back-end/data-access/' },
          ]
        },
      ],

      '/database/': [
        {
          text: 'Database',
          items: [
            { text: 'Overview', link: '/database/' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jasonalinton' }
    ],

    search: {
      provider: 'local'
    }
  }
})
