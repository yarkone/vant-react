import React from 'react';
import Button from '../';
import '../../../styles/stories.scss';

export default {
  title: 'Button',
  component: Button
};

export const ButtonTypes = () => (
  <div className='container'>
    <Button type='default'>Default Button</Button>
    <Button type='primary'>Primary Button</Button>
    <Button type='info'>Info Button</Button>
    <Button type='warning'>Warning Button</Button>
    <Button type='danger'>Danger Button</Button>
  </div>
);

export const PlainButtons = () => (
  <div className='container'>
    <Button type='danger' plain>
      Danger Button
    </Button>
    <Button type='primary' plain>
      Primary Button
    </Button>
  </div>
);

export const DisabledButtons = () => (
  <div className='container'>
    <Button type='danger' disabled>
      Disabled Button
    </Button>
    <Button type='primary' disabled>
      Disabled Button
    </Button>
  </div>
);

export const LoadingButtons = () => (
  <div className='container'>
    <Button type='danger' loading>
      Loading Default
    </Button>
    <Button type='info' loading loadingType='circular' loadingText='Loading...'>
      Loading Circular
    </Button>
    <Button type='primary' loading loadingType='spinner'>
      Loading Spinner
    </Button>
  </div>
);

export const ButtonShapes = () => (
  <div className='container'>
    <Button type='info' round>
      Info Button
    </Button>
    <Button type='warning' square>
      Warning Button
    </Button>
  </div>
);

export const ButtonColor = () => (
  <div className='container'>
    <Button color='FFECB3'>Info Button</Button>
    <Button color='00796B'>Warning Button</Button>
  </div>
);

export const ButtonTags = () => (
  <div className='container'>
    <Button tag='a'>A Tag</Button>
    <Button tag='button'>Button Tag</Button>
  </div>
);

export const ButtonNativeTypes = () => (
  <div className='container'>
    <Button nativeType='submit'>Button Type</Button>
    <Button nativeType='reset'>Reset Type</Button>
    <Button nativeType='submit'>Submit Type</Button>
  </div>
);

export const BlockButtons = () => (
  <div className='container column'>
    <Button>Non Block Button</Button>
    <Button block>Block Button</Button>
  </div>
);

// export const Emoji = () => <Button text='😀 😎 👍 💯' />;
