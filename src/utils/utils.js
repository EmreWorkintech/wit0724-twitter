import { v4 as uuidv4 } from "uuid";

export function convertToTweetModel(data) {
  return data.map((item) => {
    return {
      id: item.id,
      tweet: item.tweet,
      createdAt: item.createdAt,
      user: {
        username: item.username,
        account: item.account,
        avatar: item.avatar,
      },
      analytics: {
        reTweet: Math.ceil(Math.random() * 10),
        like: Math.ceil(Math.random() * 30),
        comment: Math.ceil(Math.random() * 90),
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
    };
  });
}
