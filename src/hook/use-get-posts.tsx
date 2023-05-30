import React from "react";
import { getPosts, Post } from "../api/get-posts";

export const useGetPosts = () => {
  const [data, setData] = React.useState<Post[]>([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await getPosts();
      if (response.error_code && response.error_message) {
        throw new Error(response.error_message);
      }
      if (!response.payload) {
        throw new Error("No payload");
      }
      setData(response.payload.Posts);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return { data, error, loading };
};
