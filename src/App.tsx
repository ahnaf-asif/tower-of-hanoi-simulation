import { MantineProvider } from '@mantine/core';

import { TowerOfHanoi } from './Components';

function App() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<TowerOfHanoi />
		</MantineProvider>
	);
}

export default App;
