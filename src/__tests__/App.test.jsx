import { render, screen } from '@testing-library/react';
import { App } from '../components/App';

test('Renders the main application heading', () => {
	render(<App />);
	const searchForm = screen.getByRole('heading');
	expect(searchForm).toBeInTheDocument();
});
