import { addToList } from '~/api/Lists/addToList';
import { allLists } from '~/api/Lists/allLists';
import { createList } from '~/api/Lists/createFavorities';
import { deleteFromList } from '~/api/Lists/deleteFromList';

/* eslint-disable @typescript-eslint/no-unsafe-assignment  --- ктущтиу */
export const share = async () => {
  const link = window.location.href;
  await navigator.clipboard.writeText(link).then().catch();
};
export const LocalStorageKey = {
  book: '@pixema/booked-posts',
  listId: '@pixema/list-id',
  accessToken: '@pixema/access-token'
};
export const booked = async (id: string) => {
  const listId = localStorage.getItem(LocalStorageKey.listId);
  if (typeof listId === 'string' && listId !== '') {
    const savedPosts = localStorage.getItem(LocalStorageKey.book);
    const favorities: string[] = savedPosts ? JSON.parse(savedPosts) : [];
    if (favorities.includes(id)) {
      favorities.splice(favorities.indexOf(id), 1);
      await deleteFromList(
        { itemId: Number.parseInt(id), itemType: 'title' },
        listId?.toString()
      );
    } else {
      favorities.push(id);
      await addToList(
        { itemId: Number.parseInt(id), itemType: 'title' },
        listId?.toString()
      );
    }

    localStorage.setItem(LocalStorageKey.book, JSON.stringify(favorities));
  } else {
    await allLists().then(async (data) => {
      data.pagination.data.length === 1
        ? await createList({
            details: {
              name: 'Favorites',
              description: 'List of my favorities',
              public: false
            },
            items: [
              {
                id: Number.parseInt(id),
                type: 'title'
              }
            ]
          }).then((data) => {
            data &&
              localStorage.setItem(
                LocalStorageKey.listId,
                data.list.id.toString()
              );
          })
        : localStorage.setItem(
            LocalStorageKey.listId,
            data.pagination.data[0].id.toString()
          );
    });
  }
};
/* eslint-enable @typescript-eslint/no-unsafe-assignment  --- ктущтиу */
