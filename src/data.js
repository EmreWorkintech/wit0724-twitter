import { v4 as uuidv4 } from "uuid";

export const navItems = [
  {
    title: "Home",
    icon: "fa-solid fa-house",
    href: "/",
  },
  {
    title: "Explore",
    icon: "fa-solid fa-hashtag",
    href: "/explore",
  },
  {
    title: "Notifications",
    icon: "fa-regular fa-bell",
    href: "/notifications",
  },
  {
    title: "Messages",
    icon: "fa-regular fa-message",
    href: "/",
  },
  {
    title: "Explore",
    icon: "fa-solid fa-hashtag",
    href: "/explore",
  },
  {
    title: "Notifications",
    icon: "fa-regular fa-bell",
    href: "/notifications",
  },
  {
    title: "Messages",
    icon: "fa-regular fa-message",
    href: "/",
  },
];

export const postData = [
  {
    id: uuidv4(),
    tweet: "lorem ipsum hladskfjhalkjhflkasdhfjkdaf",
    createdAt: "2024-10-05 11:00:00",
    user: {
      username: "EmreS",
      account: "@wit.com.tr",
    },
    analytics: {
      reTweet: 13,
      like: 5,
      comment: 8,
    },
    replies: [
      {
        id: uuidv4(),
        comment: "lorem bu bir comment 1",
        createdAt: "2024-10-05 11:05:00",
        user: {
          username: "EmreS",
          account: "@wit.com.tr",
        },
      },
      {
        id: uuidv4(),
        comment: "lorem bu bir comment 2",
        createdAt: "2024-10-06 11:05:00",
        user: {
          username: "EmreS",
          account: "@wit.com.tr",
        },
      },
    ],
  },
  {
    id: uuidv4(),
    tweet: "lorem ipsum hladskfjhalkjhflkasdhfjkdaf",
    createdAt: "2024-10-08 11:00:00",
    user: {
      username: "EmreS",
      account: "@wit.com.tr",
    },
    analytics: {
      reTweet: 13,
      like: 5,
      comment: 8,
    },
    replies: [
      {
        id: uuidv4(),
        comment: "lorem bu bir comment 1",
        createdAt: "2024-10-05 11:05:00",
        user: {
          username: "EmreS",
          account: "@wit.com.tr",
        },
      },
      {
        id: uuidv4(),
        comment: "lorem bu bir comment 2",
        createdAt: "2024-10-06 11:05:00",
        user: {
          username: "EmreS",
          account: "@wit.com.tr",
        },
      },
    ],
  },
  {
    id: uuidv4(),
    tweet: "lorem ipsum hladskfjhalkjhflkasdhfjkdaf",
    createdAt: "2024-10-05 11:00:00",
    user: {
      username: "EmreS",
      account: "@wit.com.tr",
    },
    analytics: {
      reTweet: 13,
      like: 5,
      comment: 8,
    },
    replies: [
      {
        id: uuidv4(),
        comment: "lorem bu bir comment 1",
        createdAt: "2024-10-05 11:05:00",
        user: {
          username: "EmreS",
          account: "@wit.com.tr",
        },
      },
      {
        id: uuidv4(),
        comment: "lorem bu bir comment 2",
        createdAt: "2024-10-06 11:05:00",
        user: {
          username: "EmreS",
          account: "@wit.com.tr",
        },
      },
    ],
  },
  {
    id: uuidv4(),
    tweet: "lorem ipsum hladskfjhalkjhflkasdhfjkdaf",
    createdAt: "2024-10-05 11:00:00",
    user: {
      username: "EmreS",
      account: "@wit.com.tr",
    },
    analytics: {
      reTweet: 13,
      like: 5,
      comment: 8,
    },
    replies: [
      {
        id: uuidv4(),
        comment: "lorem bu bir comment 1",
        createdAt: "2024-10-05 11:05:00",
        user: {
          username: "EmreS",
          account: "@wit.com.tr",
        },
      },
      {
        id: uuidv4(),
        comment: "lorem bu bir comment 2",
        createdAt: "2024-10-06 11:05:00",
        user: {
          username: "EmreS",
          account: "@wit.com.tr",
        },
      },
    ],
  },
];
