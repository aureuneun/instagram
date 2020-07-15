type Post = {
  id: number;
  title: string;
  content: string;
};

let Posts: Post[] = [];

const resolvers = {
  Query: {
    posts: () => Posts,
    post: (_: any, { id }: Post) => Posts.find((post) => post.id === id),
  },
  Mutation: {
    addPost: (_: any, { title, content }: Post) => {
      const newPost = {
        id: Posts.length + 1,
        title,
        content,
      };
      Posts = [...Posts, newPost];
      return newPost;
    },
    updatePost: (_: any, { id, title, content }: Post) => {
      const index = Posts.findIndex((post) => post.id === id);
      if (index !== -1) {
        const updatedPost = {
          id,
          title,
          content,
        };
        Posts.splice(index, 1, updatedPost);
        return true;
      }
      return false;
    },
    removePost: (_: any, { id }: Post) => {
      const removedPosts = Posts.filter((post) => post.id !== id);
      if (Posts.length > removedPosts.length) {
        Posts = removedPosts;
        return true;
      }
      return false;
    },
  },
};

export default resolvers;
