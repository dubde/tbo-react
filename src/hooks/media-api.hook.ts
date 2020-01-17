import React, { useState, useEffect } from 'react'
import axios from '../api/api';
import { MediaJson } from '../jsons/media-json.model';
import { Endpoint } from '../enums';
import { ImageMedia } from '../models/media.model';

export default function useMediaApi(mediaId: string | number) {
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [media, setMedia] = useState({});

    useEffect(() => {
        axios.get(Endpoint.Media + '/' + mediaId)
            .then((response) => {
                const media = ImageMedia.fromJson(response.data as MediaJson);
                setMedia(media);
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

    return [media, loaded, error, loading];
}