import * as React from 'react';
import { Post } from '../types/Post';

interface Props {
  post: Post;
}

interface State { }

export class PostPreview extends React.Component<Props, State> {
  render() {
    return (
      <div className="post-preview">
        <div className="post-title">
          {this.props.post.title}
        </div>
        <div className="post-body">
          {this.props.post.body}
        </div>
      </div>
    );
  }
}