import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Felipe Kruschewsky',
        avatar: 'https://avatars.githubusercontent.com/kruschewskyfe',
        time: 'há 4 min',
        body:
          'Maecenas sed odio quis magna vestibulum fermentum dignissim in erat. Nulla imperdiet lacus at dolor accumsan volutpat. Nunc mattis purus eget consectetur ullamcorper. Mauris eleifend purus eget dui sagittis, vehicula feugiat orci consectetur.',
      },
      {
        id: 2,
        name: 'Diego Fernandes',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        time: 'há 24 min',
        body:
          'Vivamus magna mi, pellentesque vel eros in, finibus rutrum ex. Donec dignissim efficitur scelerisque. Vivamus vitae ligula a tellus ultricies euismod id non lorem. Nullam interdum nec elit ac auctor.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
