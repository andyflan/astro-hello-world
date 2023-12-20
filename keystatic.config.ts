import { 
  config, fields, collection, singleton, 
} from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    postsIndex: singleton({
      label: 'Posts',
      path: 'src/content/postsIndex/',
        schema: {
          title: fields.text({ label: 'Title' }),
          content: fields.document({
            label: 'Content',
            formatting: true,
            dividers: true,
            links: true,
            images: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          }),
        },
    }),
    eventsIndex: singleton({
      label: 'Events',
      path: 'src/content/eventsIndex/',
        schema: {
          title: fields.text({ label: 'Title' }),
          content: fields.document({
            label: 'Content',
            formatting: true,
            dividers: true,
            links: true,
            images: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          }),
        },
    }),
    about: singleton({
      label: 'About',
      path: 'src/content/about/',
        schema: {
          title: fields.text({ label: 'Title' }),
          content: fields.document({
            label: 'Content',
            formatting: true,
            dividers: true,
            links: true,
            images: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          }),
        },
    }),
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/images/posts',
            publicPath: '../../assets/images/posts/',
          },
        }),
      },
    }),
    events: collection({
      label: 'Events',
      slugField: 'title',
      path: 'src/content/events/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/images/events',
            publicPath: '../../assets/images/events/',
          },
        }),
        startDateTime: fields.datetime({  
          label: 'Start Date/Time',
          validation: {
            isRequired: true
          },
        }),
        endDateTime: fields.datetime({  
          label: 'End Date/Time',

        }),
        isAllDay: fields.checkbox({ 
          label: 'All Day',
          defaultValue: false,
        }),
      },
    })
  },
});
