import React, { useState, useEffect } from 'react'
import axios from '../api/api';
import { Endpoint } from '../enums';
import { PostJson } from '../jsons';
import { Post } from '../models';



export default function usePostsApi() {

    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useState([] as Post[]);

    useEffect(() => {
        axios.get(Endpoint.Posts)
            .then((response) => {
                const postsJsonList: PostJson[] = response.data;
                setPosts(postsJsonList.map((post) => Post.fromJson(post)));
                setLoading(true);
            })
            .catch(err => {
                setLoaded(false);
                setLoading(false);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
                setLoaded(true);
            })
    })

    return [posts, loaded, error, loading];
}