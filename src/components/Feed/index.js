import React, { useState, useEffect } from 'react';
import { FeedContainer, FeedBack, FeedIconBack, FeedArticle, FeedHeader, FeedList, FeedItem } from './feed.styled';
const Feed = () => {
    return (
        <FeedContainer>
            <FeedBack><FeedIconBack /></FeedBack>
            <FeedArticle>
                <FeedHeader>insta</FeedHeader>
                <FeedList>
                    <FeedItem></FeedItem>
                </FeedList>
            </FeedArticle>
        </FeedContainer>
    )
}

export default Feed;
