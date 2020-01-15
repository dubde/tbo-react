import React from 'react'

export interface PostLayoutProps {
    children: React.ReactNode;
}

const postLayout = (props: PostLayoutProps) => {
    return (
        <article>
            <div className="entryMeta"></div>
            <div className="entryContent"></div>
        </article>
    )
}

export default postLayout;