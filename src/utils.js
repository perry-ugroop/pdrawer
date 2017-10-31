const data = [
  { // Thread structure
    createdAt: '2017-10-30T03:44:29.405Z',
    updatedAt: '2017-10-30T03:44:29.405Z',
    feedbackList: [
      {
        author: {
          name: 'Julian Woods',
        },
        content: 'Hi, guys! What\'s up?',
        createdAt: '2017-10-30T03:44:29.405Z',
        updatedAt: '2017-10-30T03:44:29.405Z',
      },
      {
        author: {
          name: 'Mary Hudson',
        },
        content: 'Hey, Julian! Good to see you.',
        createdAt: '2017-10-30T03:47:34.068Z',
        updatedAt: '2017-10-30T03:47:34.068Z',
      },
      {
        author: {
          name: 'Julian Woods',
        },
        content: 'Yeah, do you still have your old pressure cooker? I want to borrow it.',
        createdAt: '2017-10-30T05:07:52.288Z',
        updatedAt: '2017-10-30T05:07:52.288Z',
      },
    ],
  },
  { // Thread structure
    createdAt: '2017-10-30T03:44:29.405Z',
    updatedAt: '2017-10-30T03:44:29.405Z',
    feedbackList: [
      {
        author: {
          name: 'Bob Smith',
        },
        content: 'Jeff, still there?',
        createdAt: '2017-10-30T03:44:29.405Z',
        updatedAt: '2017-10-30T03:44:29.405Z',
      },
      {
        author: {
          name: 'Jeff Wright',
        },
        content: 'Yes, Bob.',
        createdAt: '2017-10-30T03:47:34.068Z',
        updatedAt: '2017-10-30T03:47:34.068Z',
      },
      {
        author: {
          name: 'Bob Smith',
        },
        content: 'Have you heard the news lately? Seems that a hurricane is coming to your place, and it will be really strong!',
        createdAt: '2017-10-30T05:07:52.288Z',
        updatedAt: '2017-10-30T05:07:52.288Z',
      },
      {
        author: {
          name: 'Jeff Wright',
        },
        content: 'Yes, it\'s true, I and my family want to go some place else before the hurricane comes.',
        createdAt: '2017-10-30T05:13:40.326Z',
        updatedAt: '2017-10-30T05:13:40.326Z',
      },
    ],
  },
];

function getData() {
  return data;
}

export default {
  getData
};

