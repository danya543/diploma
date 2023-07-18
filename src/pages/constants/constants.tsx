/* eslint-disable @typescript-eslint/no-unsafe-assignment  --- ктущтиу */
export const share = async () => {
  const link = window.location.href;
  await navigator.clipboard.writeText(link).then().catch();
};
export const LocalStorageKey = {
  book: 'bookedposts'
};
export const booked = (id: string) => {
  const savedPosts = localStorage.getItem(LocalStorageKey.book);
  const favorities: string[] = savedPosts ? JSON.parse(savedPosts) : [];

  if (favorities.includes(id)) {
    favorities.splice(favorities.indexOf(id), 1);
  } else {
    favorities.push(id);
  }

  localStorage.setItem(LocalStorageKey.book, JSON.stringify(favorities));
};
/* eslint-enable @typescript-eslint/no-unsafe-assignment  --- ктущтиу */
