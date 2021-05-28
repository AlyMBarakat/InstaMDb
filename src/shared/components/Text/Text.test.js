import React from 'react';
import renderer from 'react-test-renderer';
import Text from '../Text';

test('renders font weight, size and color correctly', () => {
    const tree = renderer.create(<>
        <Text light size={23} color="white">testing</Text>
        <Text bold size={19} color="black">testing</Text>
        <Text regular size={80} color="#2d2d2d">testing</Text>
    </>).toJSON();
    expect(tree).toMatchSnapshot();
});

