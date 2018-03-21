import * as React from 'react';
import { Post } from '../types/Post';
import { PostPreview } from './PostPreview';

interface Props {}
interface State {
  posts: Post[];
}

export class PublicPosts extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { posts: [
      { id: 1, title: 'Awesome title', body: 'Awesome body' },
      { id: 2, title: 'Another awesome title', body: 'Yey' },
    ]};
  }

  render() {
    return (
      <div className="posts-preview">
        {this.state.posts.map(post => (<PostPreview key={post.id} post={post} />))}
      </div>
    );
  }
}