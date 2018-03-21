import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { PostPreview } from './PostPreview';

enzyme.configure({ adapter: new Adapter() });

it('renders the correct title when a post is given', () => {
  const post = { id: 1, title: 'Awesome Post', body: 'Awesome post Body' };
  const postPreview = enzyme.shallow(<PostPreview post={post} />);
  expect(postPreview.find('.post-title').text()).toEqual('Awesome Post');
  expect(postPreview.find('.post-body').text()).toEqual('Awesome post Body');
});