import { faker } from '@faker-js/faker';
import renderer from 'react-test-renderer';
import IndexPage from '../../pages/index';

faker.seed(123);

describe('Index page tests', () => {
  test('Page rendering', async () => {
    jest.useFakeTimers();
    const component = renderer.create(<IndexPage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot('Initial');

    await renderer.act(() => {
      jest.advanceTimersByTimeAsync(1000);
    });

    tree = component.toJSON();
    expect(tree).toMatchSnapshot('Loaded');
  });
});
