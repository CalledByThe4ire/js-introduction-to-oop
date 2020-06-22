export const getMutualFriends = (user1, user2) => {
  const friends1 = user1.getFriends();
  const friends2 = user2.getFriends();
  // the esiest way to do it is using intersection function from lodash
  const mutualFriends = friends1.filter((friend1) =>
    friends2.some((friend2) => friend2.id === friend1.id)
  );
  return mutualFriends;
};
