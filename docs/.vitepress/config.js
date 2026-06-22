import { defineConfig } from 'vitepress'

// Convention: sidebar items marked with * are stubs that haven't been documented yet.
// When a page is completed, remove the * from its label.

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
            { text: 'Overview *', link: '/front-end/' },
          ]
        },
        {
          text: 'Architecture',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview *', link: '/front-end/architecture/' },
            { text: 'Component Tree *', link: '/front-end/architecture/component-tree' },
            { text: 'Model Storage *', link: '/front-end/architecture/model-storage' },
            { text: 'Navigation *', link: '/front-end/architecture/navigation' },
            { text: 'API Requests *', link: '/front-end/architecture/api-requests' },
            { text: 'Polling *', link: '/front-end/architecture/polling' },
          ]
        },
        {
          text: 'Cross-Cutting Concepts',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview *', link: '/front-end/concepts/' },
            { text: 'Goals & Skills *', link: '/front-end/concepts/goals-and-skills' },
            { text: 'Planner & Timeframes *', link: '/front-end/concepts/planner-and-timeframes' },
            { text: 'Metrics *', link: '/front-end/concepts/metrics' },
            { text: 'Avatar', link: '/front-end/concepts/avatar' },
          ]
        },
        {
          text: 'Domains',
          items: [
            { text: 'Overview *', link: '/front-end/domains/' },
          ]
        },
        {
          text: 'Planner',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview *', link: '/front-end/domains/planner/' },
            {
              text: 'Planner',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'Overview *', link: '/front-end/domains/planner/planner/' },
                {
                  text: 'Entities',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Overview *', link: '/front-end/domains/planner/planner/entities/' },
                  ]
                },
                {
                  text: 'Features',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Overview *', link: '/front-end/domains/planner/planner/features/' },
                  ]
                },
                {
                  text: 'Components',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Overview *', link: '/front-end/domains/planner/planner/components/' },
                  ]
                },
              ]
            },
            {
              text: 'Goals',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'Overview *', link: '/front-end/domains/planner/goals/' },
                {
                  text: 'Entities',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Overview *', link: '/front-end/domains/planner/goals/entities/' },
                  ]
                },
                {
                  text: 'Features',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Overview *', link: '/front-end/domains/planner/goals/features/' },
                  ]
                },
                {
                  text: 'Components',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Overview *', link: '/front-end/domains/planner/goals/components/' },
                  ]
                },
              ]
            },
            {
              text: 'Todos',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'Overview *', link: '/front-end/domains/planner/todos/' },
                {
                  text: 'Entities',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Overview *', link: '/front-end/domains/planner/todos/entities/' },
                  ]
                },
                {
                  text: 'Features',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Overview *', link: '/front-end/domains/planner/todos/features/' },
                  ]
                },
                {
                  text: 'Components',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Overview *', link: '/front-end/domains/planner/todos/components/' },
                  ]
                },
              ]
            },
            {
              text: 'Routines',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'Overview *', link: '/front-end/domains/planner/routines/' },
                {
                  text: 'Entities',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Overview *', link: '/front-end/domains/planner/routines/entities/' },
                  ]
                },
                {
                  text: 'Features',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Overview *', link: '/front-end/domains/planner/routines/features/' },
                  ]
                },
                {
                  text: 'Components',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Overview *', link: '/front-end/domains/planner/routines/components/' },
                  ]
                },
              ]
            },
          ]
        },
        {
          text: 'Physical',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview *', link: '/front-end/domains/physical/' },
            {
              text: 'Fitness',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'Overview', link: '/front-end/domains/physical/fitness/' },
                {
                  text: 'Entities',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Overview *', link: '/front-end/domains/physical/fitness/entities/' },
                    { text: 'Mesocycle', link: '/front-end/domains/physical/fitness/entities/mesocycle' },
                    { text: 'Workout', link: '/front-end/domains/physical/fitness/entities/workout' },
                    { text: 'Workout Sections', link: '/front-end/domains/physical/fitness/entities/workout-sections' },
                    { text: 'Exercise', link: '/front-end/domains/physical/fitness/entities/exercise' },
                    { text: 'Exercise Variations', link: '/front-end/domains/physical/fitness/entities/exercise-variations' },
                    { text: 'Sets', link: '/front-end/domains/physical/fitness/entities/sets' },
                    { text: 'Muscles', link: '/front-end/domains/physical/fitness/entities/muscles' },
                    { text: 'Fitness Goal', link: '/front-end/domains/physical/fitness/entities/fitness-goal' },
                  ]
                },
                {
                  text: 'Features',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Overview *', link: '/front-end/domains/physical/fitness/features/' },
                    { text: 'Mesocycle', link: '/front-end/domains/physical/fitness/features/mesocycle' },
                    { text: 'Workout', link: '/front-end/domains/physical/fitness/features/workout' },
                    { text: 'Exercise', link: '/front-end/domains/physical/fitness/features/exercise' },
                    { text: 'Workout Exercise', link: '/front-end/domains/physical/fitness/features/workout-exercise' },
                    { text: 'Workout Dashboard', link: '/front-end/domains/physical/fitness/features/workout-dashboard' },
                    { text: 'Active Workout', link: '/front-end/domains/physical/fitness/features/active-workout' },
                    { text: 'Workout Planning', link: '/front-end/domains/physical/fitness/features/workout-planning' },
                    { text: 'Workout Briefing', link: '/front-end/domains/physical/fitness/features/workout-briefing' },
                    { text: 'Exercise History', link: '/front-end/domains/physical/fitness/features/exercise-history' },
                    { text: 'Fitness Goals', link: '/front-end/domains/physical/fitness/features/fitness-goals' },
                    { text: 'Volume Tracking *', link: '/front-end/domains/physical/fitness/features/volume-tracking' },
                    { text: 'Muscle Heat Map', link: '/front-end/domains/physical/fitness/features/muscle-heat-map' },
                  ]
                },
                {
                  text: 'Components',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Overview *', link: '/front-end/domains/physical/fitness/components/' },
                  ]
                },
              ]
            },
          ]
        },
        {
          text: 'Blurbs',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview', link: '/front-end/domains/blurbs/' },
            {
              text: 'Entities',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'Overview *', link: '/front-end/domains/blurbs/entities/' },
                { text: 'Blurb', link: '/front-end/domains/blurbs/entities/blurb' },
              ]
            },
            {
              text: 'Features',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'Overview *', link: '/front-end/domains/blurbs/features/' },
                { text: 'Timeline', link: '/front-end/domains/blurbs/features/timeline' },
                { text: 'Blurb Form', link: '/front-end/domains/blurbs/features/blurb-form' },
              ]
            },
            {
              text: 'Components',
              collapsible: true,
              collapsed: true,
              items: [
                { text: 'Overview *', link: '/front-end/domains/blurbs/components/' },
              ]
            },
          ]
        },
        {
          text: 'Mental',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview *', link: '/front-end/domains/mental/' },
          ]
        },
        {
          text: 'Social',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview *', link: '/front-end/domains/social/' },
          ]
        },
        {
          text: 'Emotional & Spiritual',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview *', link: '/front-end/domains/emotional-spiritual/' },
          ]
        },
        {
          text: 'Financial',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview *', link: '/front-end/domains/financial/' },
          ]
        },
        {
          text: 'Components',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview *', link: '/front-end/components/' },
          ]
        },
      ],

      '/back-end/': [
        {
          text: 'Back-End',
          items: [
            { text: 'Overview *', link: '/back-end/' },
          ]
        },
        {
          text: 'Architecture',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview *', link: '/back-end/architecture/' },
          ]
        },
        {
          text: 'Controllers',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview *', link: '/back-end/controllers/' },
          ]
        },
        {
          text: 'Services',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview *', link: '/back-end/services/' },
          ]
        },
        {
          text: 'Data Access',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview *', link: '/back-end/data-access/' },
          ]
        },
      ],

      '/database/': [
        {
          text: 'Database',
          items: [
            { text: 'Overview *', link: '/database/' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jasonalinton/coach-docs' }
    ],

    search: {
      provider: 'local'
    }
  }
})
